import EmailVerificationForm from "@/components/auth/email-verification-form";
import { Suspense } from "react";

const VerifyEmail = () => {
	return (
		<div className="flex flex-col w-full min-h-screen items-center justify-center">
			<Suspense>
				<EmailVerificationForm />
			</Suspense>
		</div>
	);
};

export default VerifyEmail;
