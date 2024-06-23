import type { ConfigRoutes } from "@/types/routes";

export const configRoutes: ConfigRoutes = {
  publicRoutes: [
    "/",
    "/login",
    "/register",
    "/change-password",
    "/reset-password",
    "verify-email",
  ],
  authRoutes: ["/api/auth/signin"],
  apiRoutes: ["/api/protected-api"],
  protectedRoutes: ["/settings", "/dashboard"],
};
