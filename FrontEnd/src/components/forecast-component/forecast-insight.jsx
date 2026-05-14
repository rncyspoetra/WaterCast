import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Lightbulb } from "lucide-react";

const ForecastInsight = ({ data }) => {
  const rows = data?.data || [];
  const last = rows[rows.length - 1];

  const lastActual = last?.penjualanBulanan?.total;
  const next = data?.nextMonthPredict;

  if (!lastActual || !next) return null;

  const diff = next - lastActual;
  const percent = ((diff / lastActual) * 100).toFixed(1);
  const isUp = diff > 0;

  return (
    <Card className="shadow-sm border bg-white ring-0 gap-3 h-auto">
      <CardHeader className="flex justify-between">
        <CardTitle className="font-bold text-base md:text-xl text-gray-600">
          Insight Peramalan Penjualan
        </CardTitle>
        <Badge variant={isUp ? "default" : "destructive"}>
          {isUp ? "Naik" : "Turun"} {Math.abs(percent)}%
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-xs md:text-sm leading-relaxed">
          Berdasarkan metode{" "}
          <span className="font-medium">Single Exponential Smoothing</span>,
          diprediksi penjualan bulan berikutnya sebanyak{" "}
          <span className="font-semibold text-gray-900">
            {Math.round(next)} galon.
          </span>{" "}
          <span className="font-semibold text-red-700">
            {isUp ? "Naik" : "Turun"} {Math.abs(percent)}%
          </span>{" "}
          dari {lastActual} galon (bulan terakhir)
        </p>
        <div className="pt-3 border-t">
          {isUp ? (
            <div className="flex gap-2 items-start text-sm text-gray-600">
              <div className="items-center justify-center flex p-2 bg-green-200 rounded-md">
                <TrendingUp className="w-6 h-6 text-green-600 mt-0.5" />
              </div>
              <p className="text-sm">
                Permintaan diprediksi meningkat. Disarankan menambah stok galon
                dan memperkuat distribusi untuk menghindari kehabisan stok.
              </p>
            </div>
          ) : (
            <div className="flex gap-4 items-center text-sm  text-gray-600">
              <div className="items-center justify-center flex p-2 bg-red-200 rounded-md">
                <TrendingDown className="w-6 h-6 text-red-500 mt-0.5" />
              </div>
              <p className="text-sm">
                Permintaan diprediksi menurun. Disarankan meningkatkan promosi
                dan evaluasi strategi penjualan.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ForecastInsight;
