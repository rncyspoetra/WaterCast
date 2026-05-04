import { prisma } from "../config/database.js";

export const getAllDailySales = async () => {
  return await prisma.penjualanHarian.findMany({
    orderBy: {
      tanggal: "asc",
    },
  });
};

export const getDailySalesById = async (id) => {
  return await prisma.penjualanHarian.findUnique({
    where: { id_penjualan_harian: id },
  });
};

export const createDailySales = async ({ userId, tanggal, terjual }) => {
  const newDailySale = await prisma.penjualanHarian.create({
    data: {
      id_users: userId,
      tanggal,
      terjual,
    },
  });
  return newDailySale.id_penjualan_harian;
};

export const updateDailySales = async (id, data) => {
  return await prisma.penjualanHarian.update({
    where: { id_penjualan_harian: id },
    data,
  });
};

export const deleteDailySales = async (id) => {
  return await prisma.penjualanHarian.delete({
    where: { id_penjualan_harian: id },
  });
};

export const getDailySalesToday = async (today, tomorrow) => {
  return await prisma.penjualanHarian.aggregate({
    where: {
      tanggal: {
        gte: today,
        lt: tomorrow,
      },
    },
    _sum: {
      terjual: true,
    },
  });
};

export const getLast5DailySales = async () => {
  return await prisma.penjualanHarian.findMany({
    orderBy: {
      tanggal: "desc",
    },
    take: 5,
    select: {
      tanggal: true,
      terjual: true,
    },
  });
};

export const getSalesGroupBy = async (startDate, endDate) => {
  const tomorrow = new Date(endDate);
  tomorrow.setDate(endDate.getDate() + 1);

  return await prisma.penjualanHarian.groupBy({
    by: ["tanggal"],
    where: {
      tanggal: {
        gte: startDate,
        lt: tomorrow,
      },
    },
    _sum: {
      terjual: true,
    },
    orderBy: {
      tanggal: "asc",
    },
  });
};

export const getTotalThisMonth = async (start, end) => {
  const result = await prisma.penjualanHarian.aggregate({
    _sum: {
      terjual: true,
    },
    where: {
      tanggal: {
        gte: start,
        lt: end,
      },
    },
  });

  return result._sum.terjual || 0;
};
