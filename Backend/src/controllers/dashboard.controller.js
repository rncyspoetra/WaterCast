import * as dashboardServices from "../services/dashboard.services.js";
export const getDashboardData = async (req, res) => {
  try {
    const salesToday = await dashboardServices.getSalesToday();
    const last5DailySales = await dashboardServices.getLast5DailySales();
    const averageSales = await dashboardServices.getAverageSalesLast7Days();
    const last7DaysSales = await dashboardServices.getSalesLast7Days();
    const totalThisMonth = await dashboardServices.getTotalThisMonth();
    const insightSales = await dashboardServices.getInsightSales();

    const data = {
      totalSalesToday: salesToday,
      totalThisMonth,
      last5DailySales: last5DailySales,
      averageSales: averageSales,
      last7DaysSales,
      insightSales,
    };

    return res.status(200).json({
      status: "success",
      message: "Get Data Dashboard Success",
      data,
    });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};
