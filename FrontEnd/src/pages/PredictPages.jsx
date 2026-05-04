import MainLayout from "../layouts/MainLayout";
import SectionCard from "../components/forecast-component/section-cards";
import ChartAreaInteractive from "../components/forecast-component/chart-area-interactive";
import TableForecastData from "../components/forecast-component/table-forecast-data";
import ChartPieDonutText from "../components/forecast-component/pie-charts";
import ForecastInsight from "../components/forecast-component/forecast-insight";
import LoadingHandler from "../components/LoadingHandler";
import { useForecastQuery } from "../features/forecast/forecast.query";
import { useSelector } from "react-redux";
import AccuracyInsight from "../components/forecast-component/accuracy-insight";

const PredictPages = () => {
  const { data, isLoading, isError, error } = useForecastQuery();

  if (isLoading) return <LoadingHandler />;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <MainLayout>
      <div className="px-4 lg:px-6 flex flex-col space-y-4">
        <SectionCard data={data} />
        <div className="w-full">
          <ChartAreaInteractive data={data} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2 h-full">
            <TableForecastData data={data} />
          </div>
          <div className="lg:col-span-1 h-full">
            <ChartPieDonutText data={data} />
          </div>
        </div>
        <div className="flex gap-3 w-full h-auto">
          <ForecastInsight data={data} />
          <AccuracyInsight data={data} />
        </div>
      </div>
    </MainLayout>
  );
};

export default PredictPages;
