import Header from "@/app/_components/protected/header";
import OrdersOverview from "./_components/orders-overview";
import OrderDetails from "./_components/order-details";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <OrdersOverview />
          <OrderDetails />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
