import EmailVerificationForm from "./_components/email-verification-form";
import { Suspense } from "react";

const VerifyEmailPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Suspense fallback={<div> Loading... </div>}>
        <EmailVerificationForm />
      </Suspense>
    </div>
  );
};

export default VerifyEmailPage;
