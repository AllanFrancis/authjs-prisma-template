import LoginForm from "@/components/auth/login-form";
import Login from "../register/page";

const LoginPage = async () => {
	return (
		<div className="flex flex-col w-full min-h-screen items-center justify-center">
			<LoginForm />
		</div>
	);
};

export default LoginPage;
