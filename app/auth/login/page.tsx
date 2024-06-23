import LoginForm from "@/components/auth/login-form";
import Login from "../register/page";

const LoginPage = async () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
