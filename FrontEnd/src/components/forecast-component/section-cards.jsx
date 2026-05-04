"use client";

import { Card } from "@/components/ui/card";
import {
  ActivityIcon,
  SigmaIcon,
  PercentIcon,
  TrendingUp
} from "lucide-react";

const SectionCards = ({ data }) => {
  return (
    <div className="grid justify-baseline grid-cols-1 gap-8 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="p-5 shadow-md ring-0">
        <div className="flex items-center gap-8 py-2">
          <div className="flex p-4 items-center justify-center rounded-xl bg-blue-100">
            <TrendingUp className="h-6 w-6 text-blue-700" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-400">Prediksi Penjualan Bulan Depan</p>
            <h2 className="text-xl font-medium tabular-nums">{data?.nextMonthPredict}</h2>
          </div>
        </div>
      </Card>
      <Card className="p-5 shadow-md ring-0">
        <div className="flex items-center gap-8 py-2">
          <div className="flex p-4 items-center justify-center rounded-xl bg-red-200">
            <ActivityIcon className="h-6 w-6 text-red-700" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-base text-gray-400">MAD</p>
            <h2 className="text-xl font-medium tabular-nums">{data?.mad}</h2>
          </div>
        </div>
      </Card>
      <Card className="p-5 shadow-md ring-0">
        <div className="flex items-center gap-8 py-2">
          <div className="flex p-4 items-center justify-center rounded-xl bg-purple-100">
            <SigmaIcon className="h-6 w-6 text-purple-700" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-base text-gray-400">MSE</p>
            <h2 className="text-xl font-medium tabular-nums">{data?.mse}</h2>
          </div>
        </div>
      </Card>
      <Card className="p-5 shadow-md ring-0">
        <div className="flex items-center gap-8 py-2">
          <div className="flex p-4 items-center justify-center rounded-xl bg-green-100">
            <PercentIcon className="h-6 w-6 text-green-700" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-base text-gray-400">MAPE</p>
            <h2 className="text-xl font-medium tabular-nums">
              {data?.mape}
            </h2>
          </div>
        </div>
      </Card>

    </div>
  );
}

export default SectionCards;