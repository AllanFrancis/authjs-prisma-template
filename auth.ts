import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { prisma } from "./lib/db";
import { findUserByEmail } from "./services";
import { isTwoFactorAuthenticationEnabled } from "./services/auth";
export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
	unstable_update: update,
} = NextAuth({
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/auth/login",
	},
	callbacks: {
		async signIn({ user, email, account, profile }) {
			if (account && (account.provider === "google" || account.provider === "github")) {
			const registeredUser = await findUserByEmail(user.email?? "");
                if (registeredUser) {
                    // Link the new provider to the existing user
                    await prisma.account.create({
                        data: {
                            userId: registeredUser.id,
                            provider: account.provider,
                            providerAccountId: account.providerAccountId,
                            type: account.type,
                            access_token: account.access_token,
                            refresh_token: account.refresh_token,
                            expires_at: account.expires_at,
                        },
                    });
                    return true;
                }
			}
			return true;
		},
		async jwt({ token, user, trigger, session }) {
			if (trigger && trigger === "update" && session) {
				token.isTwoFactorEnabled = session.user.isTwoFactorEnabled;
				return token;
			}
			if (user) {
				// User is available during sign-in
				if (user.id) {
					const isTwoFactorEnabled = await isTwoFactorAuthenticationEnabled(user?.id || "");
					token.isTwoFactorEnabled = isTwoFactorEnabled;
				}
				token.role = "DEFAULT";
			}
			return token;
		},
		session({ session, token }) {
			// `session.user.role` is now a valid property, and will be type-checked
			// in places like `useSession().data.user` or `auth().user`
			if (session.user && token.sub) {
				session.user.id = token.sub;
				session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
			}
			return {
				...session,
				user: {
					...session.user,
					role: token.role,
				},
			};
		},
	},
	...authConfig,
});
