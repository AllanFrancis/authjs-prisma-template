import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/app/_components/ui/pagination";
import { Separator } from "@/app/_components/ui/separator";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyIcon,
  CreditCardIcon,
  MoreVerticalIcon,
  TruckIcon,
} from "lucide-react";

const OrderDetails = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Pedido Oe31b70H
            <Button
              size="icon"
              variant="outline"
              className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <CopyIcon className="h-3 w-3" />
              <span className="sr-only">Copiar ID do pedido</span>
            </Button>
          </CardTitle>
          <CardDescription>Data: 23 de novembro de 2023</CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <TruckIcon className="h-3.5 w-3.5" />
            <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
              Acompanhar Pedido
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline" className="h-8 w-8">
                <MoreVerticalIcon className="h-3.5 w-3.5" />
                <span className="sr-only">Mais</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Editar</DropdownMenuItem>
              <DropdownMenuItem>Exportar</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Excluir</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <div className="font-semibold">Detalhes do pedido</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Glimmer Lamps x <span>2</span>
              </span>
              <span>R$ 250,00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Aqua Filters x <span>1</span>
              </span>
              <span>R$ 49,00</span>
            </li>
          </ul>
          <Separator className="my-2" />
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>R$ 299,00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Envio</span>
              <span>R$ 5,00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Imposto</span>
              <span>R$ 25,00</span>
            </li>
            <li className="flex items-center justify-between font-semibold">
              <span className="text-muted-foreground">Total</span>
              <span>R$ 329,00</span>
            </li>
          </ul>
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-3">
            <div className="font-semibold">Informação de envio</div>
            <address className="grid gap-0.5 not-italic text-muted-foreground">
              <span>Liam Johnson</span>
              <span>1234 Main St.</span>
              <span>Anytown, CA 12345</span>
            </address>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="grid gap-3">
          <div className="font-semibold">Informação do consumidor</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Consumidor</dt>
              <dd>Liam Johnson</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Email</dt>
              <dd>
                <a href="mailto:liam@acme.com">liam@acme.com</a>
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Contato</dt>
              <dd>
                <a href="tel:+1234567890">+55 69 99567 8900</a>
              </dd>
            </div>
          </dl>
        </div>
        <Separator className="my-4" />
        <div className="grid gap-3">
          <div className="font-semibold">Informação de pagamento</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="flex items-center gap-1 text-muted-foreground">
                <CreditCardIcon className="h-4 w-4" /> Visa
              </dt>
              <dd>**** **** **** 4532</dd>
            </div>
          </dl>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Atualizado <time dateTime="2023-11-23">23 de novembro de 2023</time>
        </div>
        <Pagination className="ml-auto mr-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <Button size="icon" variant="outline" className="h-6 w-6">
                <ChevronLeftIcon className="h-3.5 w-3.5" />
                <span className="sr-only">Pedido anterior</span>
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button size="icon" variant="outline" className="h-6 w-6">
                <ChevronRightIcon className="h-3.5 w-3.5" />
                <span className="sr-only">Próximo pedido</span>
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  );
};

export default OrderDetails;
