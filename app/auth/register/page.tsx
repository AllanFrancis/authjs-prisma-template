import RegisterForm from "@/components/auth/register-form";

const Login = async () => {
	return (
		<div className="flex flex-col w-full min-h-screen items-center justify-center">
			<RegisterForm />
		</div>
	);
};

export default Login;
