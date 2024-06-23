import Navbar from "@/components/site/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Navbar />
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="absolute inset-0 z-0 flex h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#3b82f6_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#3b82f6_100%)]">
          <div className="container z-auto flex flex-col justify-center contain-content">
            <div className="flex flex-col items-center">
              <span className="mb-8 text-7xl">🧑‍🚀🚀</span>
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-primary to-gray-600 bg-clip-text text-transparent dark:to-white">
                  Vamos comecar já adiantados
                </span>
              </h1>
              <p className="mb-8 max-w-[90%] text-center text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
                Este template foi desenvolvido para poupar seu tempo. Aqui você
                encontra o que precisa para começar a desenvolver seu projeto
                com segurança.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
