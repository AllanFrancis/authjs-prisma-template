import EmailVerificationForm from "@/components/auth/email-verification-form";
import { Suspense } from "react";

const VerifyEmailPage = () => {
	return (
		<div className="flex flex-col w-full min-h-screen items-center justify-center">
			<Suspense>
				<EmailVerificationForm />
			</Suspense>
		</div>
	);
};

export default VerifyEmailPage;
