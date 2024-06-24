import { ListFilterIcon, FileIcon } from "lucide-react";
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
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { Progress } from "@/app/_components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import { Badge } from "@/app/_components/ui/badge";

const OrdersOverview = () => {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        <Card className="sm:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle>Seus pedidos</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Apresentando nosso painel dinâmico de pedidos para gerenciamento
              contínuo e análise perspicaz.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>Criar novo pedido</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Essa semana</CardDescription>
            <CardTitle className="text-4xl">R$ 1.329,00</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +25% em relação à semana passada
            </div>
          </CardContent>
          <CardFooter>
            <Progress value={25} aria-label="Aumento de 25%" />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Este mês</CardDescription>
            <CardTitle className="text-4xl">R$ 5.329,00</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +10% em relação ao mês passado
            </div>
          </CardContent>
          <CardFooter>
            <Progress value={12} aria-label="Aumento de 12%" />
          </CardFooter>
        </Card>
      </div>
      <Tabs defaultValue="week">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="week">Semana</TabsTrigger>
            <TabsTrigger value="month">Mês</TabsTrigger>
            <TabsTrigger value="year">Ano</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 gap-1 text-sm"
                >
                  <ListFilterIcon className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Filtrar</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Realizado
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Recusado</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Devolveu</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
              <FileIcon className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only">Exportar</span>
            </Button>
          </div>
        </div>
        <TabsContent value="week">
          <Card>
            <CardHeader className="px-7">
              <CardTitle>Pedidos</CardTitle>
              <CardDescription>Pedidos recentes de sua loja.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Consumidor</TableHead>
                    <TableHead className="hidden sm:table-cell">Tipo</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Status
                    </TableHead>
                    <TableHead className="hidden md:table-cell">Data</TableHead>
                    <TableHead className="text-right">Quantia</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-accent">
                    <TableCell>
                      <div className="font-medium">Liam Johnson</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        liam@example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      Venda
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge className="text-xs" variant="secondary">
                        Realizado
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      23/06/2024
                    </TableCell>
                    <TableCell className="text-right">R$ 250,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Olivia Smith</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        olivia@example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      Reembolso
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge className="text-xs" variant="outline">
                        Recusado
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      24/06/2024
                    </TableCell>
                    <TableCell className="text-right">R$ 150,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Noah Williams</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        noah@example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      Inscrição
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge className="text-xs" variant="secondary">
                        Realizado
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      25/06/2024
                    </TableCell>
                    <TableCell className="text-right">R$ 350,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Emma Brown</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        emma@example.com
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      Venda
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <Badge className="text-xs" variant="secondary">
                        Realizado
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      26/06/2024
                    </TableCell>
                    <TableCell className="text-right">R$ 450,00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrdersOverview;
