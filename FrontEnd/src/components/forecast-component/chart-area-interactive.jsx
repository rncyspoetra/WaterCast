"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

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

import { useState, useEffect } from "react";
export const description = "A simple area chart";

const chartConfig = {
  hasil_prediksi: {
    label: "Forecast",
  },
  "penjualanBulanan.total": {
    label: "Actual",
  },
};

const bulanNama = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

const ChartAreaInteractive = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartData = (data?.data || []).map((item) => ({
    ...item,
    label_bulan: `${bulanNama[item.penjualanBulanan.bulan - 1]} ${item.penjualanBulanan.tahun}`,
  }));

  return (
    <Card className="ring-0 shadow-xl h-full">
      <CardHeader>
        <CardTitle className="font-bold  text-base md:text-xl text-gray-600">
          Analisis Peramalan
        </CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Tren prediksi permintaan berdasarkan data penjualan historis.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="h-full aspect-auto h-[300px]"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 0, right: 12 }}
          >
            <defs>
              <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="label_bulan"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={8}
              interval={isMobile ? 6 : 2}
            />

            <YAxis orientation="left" tickLine={false} axisLine={false} />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />

            <Area
              dataKey="hasil_prediksi"
              type="natural"
              fill="url(#forecastGradient)"
              strokeWidth={2}
              style={{ filter: "drop-shadow(0 0 6px rgba(34,197,94,0.4))" }}
              fillOpacity={1}
            />

            <Area
              dataKey="penjualanBulanan.total"
              type="natural"
              fill="url(#actualGradient)"
              strokeWidth={2}
              style={{ filter: "drop-shadow(0 0 6px rgba(34,197,94,0.4))" }}
              fillOpacity={1}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ChartAreaInteractive;
