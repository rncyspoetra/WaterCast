"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const bulanNama = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const chartConfig = {
  value: {
    label: "Rata-rata Penjualan",
  },
};

const ChartPieDonutText = ({ data }) => {
  const raw = data?.averageSalesByMonth || [];

  const baseColor = "59, 130, 246";
  const chartData = raw.map((item, index) => ({
    name: bulanNama[item.bulan - 1],
    value: Number(item.average),
    fill: `rgba(${baseColor}, ${0.3 + (index / raw.length) * 0.7})`,
  }));

  const totalAvg = React.useMemo(() => {
    if (!chartData.length) return 0;

    const total = chartData.reduce((acc, curr) => acc + curr.value, 0);
    return Math.round(total / chartData.length);
  }, [chartData]);

  return (
    <Card className="p-5 flex flex-col ring-0 shadow-md">
      <CardHeader className="flex flex-col items-start text-left px-3">
        <CardTitle className="font-bold text-base md:text-xl text-gray-600">
          Rata-rata Penjualan per Bulan
        </CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Distribusi rata-rata penjualan tiap bulan
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalAvg.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 20}
                          className="fill-muted-foreground text-sm"
                        >
                          Avg / Bulan
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium">
          Distribusi Penjualan Bulanan
        </div>
        <div className="text-muted-foreground text-center text-xs md:text-sm">
          Data berdasarkan rata-rata penjualan bulanan
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChartPieDonutText;
