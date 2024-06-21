import Navbar from "@/components/site/navbar";

export default function Home() {
	return (
		<div className="flex min-h-screen w-full flex-col">
			<header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-10">
				<Navbar />
			</header>
			<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
				<div className="absolute z-0 inset-0 h-full w-full flex items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#3b82f6_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#3b82f6_100%)]">
					<div className="z-auto container contain-content flex flex-col justify-center">
						<div className="flex flex-col items-center">
							<span className="text-7xl mb-8">🧑‍🚀🚀</span>
							<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
								<span className="bg-gradient-to-r from-primary dark:to-white to-gray-600 text-transparent bg-clip-text">
									Vamos comecar já adiantados
								</span>
							</h1>
							<p className="mb-8 text-lg text-center max-w-[90%] font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
								Este template foi desenvolvido para poupar seu tempo. Aqui você encontra o que precisa para começar a
								desenvolver seu projeto com segurança.
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
