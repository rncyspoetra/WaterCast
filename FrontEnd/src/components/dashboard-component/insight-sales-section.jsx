"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  TrendingUp,
  Minus,
  TrendingDown,
  MinusIcon,
  BarChart3,
} from "lucide-react";

const InsightSales = ({ data }) => {
  const insight = data?.insightSales;

  const getStatusColor = (status) => {
    switch (status) {
      case "Good":
        return "text-green-600 bg-green-100";
      case "Stable":
        return "text-blue-600 bg-blue-100";
      case "Needs Attention":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <Card className="shadow-sm border bg-white ring-0 gap-3 h-auto">
      <CardHeader className="flex justify-between">
        <CardTitle className="text-base md:text-xl text-gray-600">
          <div className="flex gap-3 md:gap-6">
            <div>
              <div className="flex p-3 md:p-4 items-center justify-center rounded-xl bg-indigo-100">
                <BarChart3 className="h-4 w-4 md:h-5 md:w-5 text-indigo-800" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <CardTitle className="font-bold text-base md:text-xl text-gray-600">
                Sales Insight
              </CardTitle>

              <CardDescription className="text-xs md:text-sm">
                Overview of sales performance trends and changes.
              </CardDescription>
            </div>
          </div>
        </CardTitle>

        <span
          className={`w-fit px-3 py-1 text-center rounded-full text-[10px] md:text-xs font-medium ${getStatusColor(
            insight?.status,
          )}`}
        >
          {insight?.status}
        </span>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex flex-row md:items-center gap-4 md:gap-7 text-sm text-gray-500">
          <div className="rounded-xl p-2">
            {insight?.direction === "Up" && (
              <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-green-700" />
            )}

            {insight?.direction === "Down" && (
              <TrendingDown className="text-2xl text-red-600" />
            )}

            {insight?.direction === "Flat" && (
              <Minus className="text-2xl text-blue-600" />
            )}
          </div>

          <span className="text-xs md:text-base leading-relaxed text-black">
            {insight?.direction === "Up" && (
              <>
                Penjualan mengalami peningkatan sebesar {insight?.percentage}%
                dibanding hari sebelumnya, menunjukkan performa bisnis yang
                sedang membaik.
              </>
            )}

            {insight?.direction === "Down" && (
              <>
                Penjualan menurun sebesar {Math.abs(insight?.percentage)}%
                dibanding hari sebelumnya, sehingga perlu perhatian untuk
                menjaga performa bisnis.
              </>
            )}

            {insight?.direction === "Flat" && (
              <>
                Penjualan relatif stabil dengan perubahan {insight?.percentage}
                %, menunjukkan performa bisnis yang konsisten.
              </>
            )}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default InsightSales;
