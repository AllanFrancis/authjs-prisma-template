"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { CircleUser, LogOut } from "lucide-react";
import type { User } from "next-auth";
import Link from "next/link";
import { LineMdCogLoop } from "@/app/_components/icons";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar";
import LoginButton from "@/app/_components/auth/login-button";
import LogoutButton from "@/app/_components/auth/logout-button";
import { Button } from "@/app/_components/ui/button";

type Props = {
  user?: User;
};

const LoginBadge = ({ user }: Props) => {
  return (
    <>
      {user && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src={user?.image || ""} />
              <AvatarFallback className="bg-green-500">
                <CircleUser className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link
                href="/settings"
                className="flex flex-1 items-center justify-start"
              >
                <LineMdCogLoop className="mr-2" />
                Perfil
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <LogoutButton>
              <DropdownMenuItem className="m-0 p-0">
                <Button
                  variant={"ghost"}
                  className="flex flex-1 justify-around"
                >
                  <LogOut /> Sair
                </Button>
              </DropdownMenuItem>
            </LogoutButton>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {!user && (
        <LoginButton>
          <Button variant={"default"}>Entrar</Button>
        </LoginButton>
      )}
    </>
  );
};

export default LoginBadge;
