import RegisterForm from "@/components/auth/register-form";

const RegisterPage = async () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
