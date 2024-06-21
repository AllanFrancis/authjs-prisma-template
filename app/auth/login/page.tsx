import LoginForm from "@/components/auth/login-form";

const Login = async () => {
	return (
		<div className="flex flex-col w-full min-h-screen items-center justify-center">
			<LoginForm />
		</div>
	);
};

export default Login;
