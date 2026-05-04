import * as dailySalesRepository from "../repository/daily-sales.repository.js";
import { normalizeDate, formatDateOnly } from "../utils/helper.js";

export const getSalesToday = async () => {
  const today = normalizeDate(new Date());
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const amountSales = await dailySalesRepository.getDailySalesToday(
    today,
    tomorrow,
  );

  return amountSales._sum_terjual || 0;
};

export const getLast5DailySales = async () => {
  const sales = await dailySalesRepository.getLast5DailySales();
  const data = sales.map((sale) => ({
    tanggal: formatDateOnly(sale.tanggal),
    terjual: sale.terjual,
  }));

  return data;
};

export const getAverageSalesLast7Days = async () => {
  const today = normalizeDate(new Date());

  const last7Days = new Date(today);
  last7Days.setDate(today.getDate() - 6);

  const result = await dailySalesRepository.getSalesGroupBy(last7Days, today);

  const total = result.reduce((sum, item) => sum + (item._sum.terjual || 0), 0);

  const average = total / 7;

  return Math.round(average);
};

export const getSalesLast7Days = async () => {
  const today = normalizeDate(new Date());

  const last7Days = new Date(today);
  last7Days.setDate(today.getDate() - 6);

  const sales = await dailySalesRepository.getSalesGroupBy(last7Days, today);
  const data = sales.map((sale) => ({
    tanggal: formatDateOnly(sale.tanggal),
    terjual: sale._sum.terjual,
  }));

  return data;
};

export const getInsightSales = async () => {
  const today = normalizeDate(new Date());

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const sales = await dailySalesRepository.getSalesGroupBy(
    yesterday,
    today
  );

  const data = sales.map((sale) => ({
    tanggal: formatDateOnly(sale.tanggal),
    terjual: sale._sum.terjual || 0,
  }));

  const todaySales = data[1]?.terjual || 0;
  const yesterdaySales = data[0]?.terjual || 0;

  const percentage =
    yesterdaySales === 0
      ? 0
      : ((todaySales - yesterdaySales) / yesterdaySales) * 100;

  let status = "Stable";
  let direction = "Flat";

  if (percentage >= 5) {
    status = "Good";
    direction = "Up";
  } else if (percentage <= -5) {
    status = "Needs Attention";
    direction = "Down";
  }

  return {
    status,
    percentage: Number(percentage.toFixed(2)),
    direction,
  };
};

export const getTotalThisMonth = async () => {
  const now = new Date();

  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  const totalSales = await dailySalesRepository.getTotalThisMonth(
    startOfMonth,
    startOfNextMonth,
  );

  return totalSales;
};