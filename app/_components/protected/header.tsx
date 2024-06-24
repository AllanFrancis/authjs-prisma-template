"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import {
  CircleUserIcon,
  Package2Icon,
  SearchIcon,
  MenuIcon,
} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SheetTrigger, SheetContent, Sheet } from "../ui/sheet";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session?.user) {
    router.push("/");
  }
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2Icon className="h-6 w-6" />
          <span className="sr-only">Template NextJS</span>
        </Link>
        <Link
          href="/dashboard"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </Link>

        <Link
          href="/settings"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Configurações
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-lg font-semibold text-white"
            >
              <div className="flex gap-4">
                <Package2Icon className="h-6 w-6" />
                <span className="truncate">Template NextJS</span>
              </div>
            </Link>
            <Link
              href="/dashboard"
              className="text-muted-foreground hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link href="/settings" className="hover:text-foreground">
              Configurações
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Pesquisar..."
              className="pl-8 sm:w-[250px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUserIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={"/settings"}>Configurações</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Suporte</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              Sair da conta
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
