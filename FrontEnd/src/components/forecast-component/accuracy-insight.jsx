import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AccuracyInsight = ({ data }) => {
  const mad = data?.mad;
  const mse = data?.mse;
  const mape = data?.mape;

  if (!mad || !mse || !mape) return null;

  const getStatus = (mape) => {
    if (mape <= 10) {
      return {
        label: "Highly Accurate",
        badge: "bg-green-500 text-white text-xs md:text-sm",
        desc: `Prediksi ini termasuk dalam kategori berakurasi tinggi (Highly Accurate), karena tingkat kesalahan hanya sekitar ${mape}%. Artinya, hasil prediksi sangat mendekati kondisi sebenarnya.`,
        conclusion:
          "Prediksi sangat aman digunakan sebagai dasar utama dalam menentukan stok dan strategi penjualan.",
        tone: "text-green-600",
      };
    }

    if (mape <= 20) {
      return {
        label: "Good Accuracy",
        badge: "bg-blue-500 text-white text-xs md:text-sm",
        desc: `Prediksi ini termasuk dalam kategori peramalan yang baik (Good Accuracy), dengan tingkat kesalahan sekitar ${mape}%. Artinya, hasil prediksi cukup mendekati kondisi sebenarnya.`,
        conclusion:
          "Masih layak digunakan sebagai acuan, namun tetap perlu sedikit pertimbangan.",
        tone: "text-blue-600",
      };
    }

    if (mape <= 50) {
      return {
        label: "Reasonable Forecast",
        badge: "bg-yellow-500 text-black text-xs md:text-sm",
        desc: `Prediksi ini termasuk dalam kategori peramalan yang layak (Reasonable Forecast), dengan tingkat kesalahan sekitar ${mape}%. Artinya, hasil prediksi masih bisa digunakan sebagai gambaran umum, namun terdapat selisih yang cukup terlihat.`,
        conclusion:
          "Gunakan sebagai referensi tambahan, jangan dijadikan satu-satunya acuan.",
        tone: "text-yellow-600",
      };
    }

    return {
      label: "Low Accuracy",
      badge: "bg-red-500 text-white text-xs md:text-sm ",
      desc: `Prediksi ini termasuk dalam kategori berakurasi rendah, dengan tingkat kesalahan sekitar ${mape}%. Artinya, hasil prediksi cukup jauh dari kondisi sebenarnya.`,
      conclusion:
        "Sebaiknya tidak digunakan sebagai dasar pengambilan keputusan tanpa analisis tambahan.",
      tone: "text-red-600",
    };
  };

  const status = getStatus(mape);

  return (
    <Card className="shadow-sm border gap-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-bold text-base md:text-xl text-gray-600">
          Insight Akurasi Prediksi
        </CardTitle>

        <Badge className={status.badge}>{status.label}</Badge>
      </CardHeader>

      <CardContent className="space-y-4 text-sm text-muted-foreground">
        <p>{status.desc}</p>
        <div className="space-y-3">
          <div className="p-3 rounded-lg border">
            <p>
              <span className="font-medium text-foreground">
                MAD : {Math.round(mad)}
              </span>
              <br />
              Prediksi rata rata meleset sekitar {Math.round(mad)} galon dari
              penjualan sebenarnya.
            </p>
          </div>
          <div className="p-3 rounded-lg border">
            <p>
              <span className="font-medium text-foreground">MSE : {mse}</span>
              <br />
              MSE digunakan untuk melihat apakah ada kesalahan yang cukup besar
              dalam prediksi. Dari nilai ini, tidak terlihat adanya kesalahan
              yang terlalu jauh, sehingga hasil prediksi masih tergolong stabil
              dan dapat dipercaya.
            </p>
          </div>
          <div className="p-3 rounded-lg border">
            <p>
              <span className="font-medium text-foreground">
                MAPE / Persentase kesalahan: {mape}%
              </span>
              <br />
              Rata-rata prediksi memiliki selisih sekitar {mape}% dari penjualan
              sebenarnya.
            </p>
          </div>
        </div>
        <div className="pt-2 border-t">
          <p className={`font-medium ${status.tone}`}>
            Kesimpulan: {status.conclusion}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccuracyInsight;
