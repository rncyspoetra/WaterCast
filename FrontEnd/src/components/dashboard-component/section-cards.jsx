"use client";

import { Card } from "@/components/ui/card";
import { TrendingUpIcon,
  BarChart3Icon,
  ActivityIcon
} from "lucide-react";

const SectionCards = ({ data }) => {
  return (
    <div className="grid justify-baseline grid-cols-1 gap-8  @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      
      <Card className="p-5 shadow-md ring-0">
        <div className="flex items-center gap-8 py-2">
          <div className="flex p-4 items-center justify-center rounded-xl bg-blue-100">
            <TrendingUpIcon className="h-6 w-6 text-indigo-700" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-base text-gray-400">
              Penjualan Hari Ini
            </p>
            <h2 className="text-xl font-medium tabular-nums">
              {data?.totalSalesToday}
            </h2>
          </div>
        </div>
      </Card>
      <Card className="p-5 shadow-md ring-0">
        <div className="flex items-center gap-8 py-2">
          <div className="flex p-4 items-center justify-center rounded-xl bg-pink-100">
            <BarChart3Icon className="h-6 w-6 text-pink-700" />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-base text-gray-400">
              Penjualan Bulan Ini
            </p>
            <h2 className="text-xl font-medium tabular-nums">
              {data?.totalThisMonth}
            </h2>
          </div>
        </div>
      </Card>
      <Card className="p-5 shadow-md ring-0">
        <div className="flex items-center gap-8 py-2">
          <div className="flex p-4 items-center justify-center rounded-xl bg-green-200">
            <ActivityIcon className="h-6 w-6 text-green-800" />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-base text-gray-400">
              Rata-rata Penjualan
            </p>
            <h2 className="text-xl font-medium tabular-nums">
              {data?.averageSales}
            </h2>
          </div>
        </div>
      </Card>

    </div>
  );
}

export default SectionCards;