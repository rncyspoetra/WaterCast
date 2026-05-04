export const normalizeDate = (input) => {
  const date = new Date(input);
  date.setHours(0, 0, 0, 0);
  return date;
};

export const formatDateOnly = (date) => {
  const d = new Date(date);

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const calculateMAD = (data) => {
  if (!data.length) return 0;

  const totalError = data.reduce((sum, value) => {
    return sum + Math.abs(value.penjualanBulanan.total - value.hasil_prediksi);
  }, 0);

  return Number((totalError / data.length).toFixed(2));
};

export const calculateMSE = (data) => {
  if (!data.length) return 0;

  const totalError = data.reduce((sum, value) => {
    return sum + (value.penjualanBulanan.total - value.hasil_prediksi) ** 2;
  }, 0);

  return Number((totalError / data.length).toFixed(2));
};

export const calculateMAPE = (data) => {
  if (!data.length) return 0;

  const totalError = data.reduce((sum, value) => {
    return (
      sum +
      Math.abs(value.penjualanBulanan.total - value.hasil_prediksi) /
        value.penjualanBulanan.total
    );
  }, 0);

  return Number(((totalError / data.length) * 100).toFixed(2));
};

export const calculateSES = (data) => {
  if (!data.length) return 0;

  const last = data[data.length - 1];
  const lastMonthActual = last.penjualanBulanan.total;
  const lastMonthPrediction = last.hasil_prediksi;

  const result = 0.4 * lastMonthActual + (1 - 0.4) * lastMonthPrediction;

  return Number(result.toFixed(2));
};
