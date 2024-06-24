import Link from "next/link";

import { auth } from "@/auth";
import UserSettingsForm from "./_components/user-settings-form";
import { Separator } from "@/app/_components/ui/separator";
import { prisma } from "@/app/_lib/db";
import { User } from "@prisma/client";

export default async function SettingsPage() {
  const session = await auth();
  const data: User | null = await prisma.user.findFirst({
    where: { id: session?.user.id },
  });
  console.log(data);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="container flex flex-1 flex-col gap-4 md:gap-8">
        <div className="mx-auto grid w-full max-w-6xl gap-6">
          <h1 className="text-3xl font-semibold">Configurações</h1>
          <Separator orientation="horizontal" />
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            <Link href="#" className="font-semibold text-primary">
              Geral
            </Link>
            <Link href="#">Suporte</Link>
            <Link href="#">Avançado</Link>
          </nav>
          <div className="grid gap-6">
            <UserSettingsForm user={data} />
          </div>
        </div>
      </main>
    </div>
  );
}
