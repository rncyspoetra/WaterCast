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

export const description = "A simple area chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
};

const ChartAreaInteractive = ({ data }) => {
  const chartData = data?.last7DaysSales || [];

  return (
    <Card className="ring-0 shadow-xl h-full">
      <CardHeader>
        <CardTitle className="font-bold text-xl text-gray-600">
          Sales Performance
        </CardTitle>
        <CardDescription>
          Overview of sales performance over the past 7 days.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-full aspect-auto h-[300px]"  >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <defs>
              <linearGradient id="desktopGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#CED9E9" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#CED9E9" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="tanggal"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={8}
            />

            <YAxis orientation="left" tickLine={false} axisLine={false} />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />

            <Area
              dataKey="terjual"
              type="natural"
              fill="url(#desktopGradient)"
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
