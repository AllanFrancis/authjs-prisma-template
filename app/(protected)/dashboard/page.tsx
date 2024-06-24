import Header from "@/app/_components/protected/header";
import OrdersOverview from "./_components/orders-overview";
import OrderDetails from "./_components/order-details";

const DashboardPage = () => {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <OrdersOverview />
      <OrderDetails />
    </main>
  );
};

export default DashboardPage;
