import LoginForm from "@/app/_components/auth/login-form";

const LoginPage = async () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
