import { ChangePasswordForm } from "./_components/change-password-form";
import React, { Suspense } from "react";

const ChangePassword = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Suspense>
        <ChangePasswordForm />
      </Suspense>
    </div>
  );
};

export default ChangePassword;
