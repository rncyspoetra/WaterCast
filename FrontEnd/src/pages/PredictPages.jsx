import MainLayout from "../layouts/MainLayout";
import SectionCard from "../components/forecast-component/section-cards";
import ChartAreaInteractive from "../components/forecast-component/chart-area-interactive";
import TableForecastData from "../components/forecast-component/table-forecast-data";
import ChartPieDonutText from "../components/forecast-component/pie-charts";
import AccuracyInsight from "../components/forecast-component/accuracy-insight";
import ForecastInsight from "../components/forecast-component/forecast-insight";
import ForecastSkeleton from "../components/forecast-component/forecast-skeleton";

import { useForecastQuery } from "../features/forecast/forecast.query";

const PredictPages = () => {
  const { data, isLoading } = useForecastQuery();

  if (isLoading) return <ForecastSkeleton />;

  return (
    <MainLayout>
      <div className="px-4 lg:px-6 flex flex-col space-y-4">
        <SectionCard data={data} />
        <div className="w-full">
          <ChartAreaInteractive data={data} />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-stretch">
          <div className="xl:col-span-2 h-full">
            <TableForecastData data={data} />
          </div>
          <div className="xl:col-span-1 h-full">
            <ChartPieDonutText data={data} />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-3 w-full h-auto">
          <div>
            <ForecastInsight data={data} />
          </div>
          <div>
            <AccuracyInsight data={data} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PredictPages;
