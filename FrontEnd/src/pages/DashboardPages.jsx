import MainLayout from "../layouts/MainLayout";
import SectionCards from "../components/dashboard-component/section-cards"
import ChartAreaInteractive from "../components/dashboard-component/chart-area-interactive";
import TopRecentTransactions from "../components/dashboard-component/top-recent-transactions";
import InsightSales from "../components/dashboard-component/insight-sales-section";
import { useSelector } from "react-redux";
import { useDashboardQuery } from "../features/dashboard/dashboard.query";
import LoadingHandler from "../components/LoadingHandler";

const DashboardPages = () => {
  const { data, isLoading, isError, error } = useDashboardQuery();

  if (isLoading) return <LoadingHandler />;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <MainLayout>
      <div className="px-4 lg:px-6 flex flex-col space-y-4">
        <SectionCards data={data} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ChartAreaInteractive data={data} />
          </div>

          <TopRecentTransactions data={data} />
        </div>

        <div className="lg:w-1/2 w-full">
          <InsightSales data={data} />
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPages;
