import { prisma } from "../config/database.js";

export const getAllMonthlySales = async () => {
  return await prisma.penjualanBulanan.findMany({
    orderBy: [{ tahun: "asc" }, { bulan: "asc" }],
  });
};

export const getAllMonthlySalesPredict = async () => {
  return await prisma.penjualanBulanan.findMany({
    orderBy: [{ tahun: "asc" }, { bulan: "asc" }],
  });
};

export const getMonthlySalesById = async (id) => {
  return await prisma.penjualanBulanan.findUnique({
    where: { id_penjualan_bulanan: id },
  });
};

export const checkExistingMonth = async ({ bulan, tahun }) => {
  return await prisma.penjualanBulanan.findFirst({
    where: {
      bulan,
      tahun,
    },
  });
};

export const createMonthlySales = async ({ userId, bulan, tahun, total }) => {
  const newMonthlySale = await prisma.penjualanBulanan.create({
    data: {
      id_users: userId,
      bulan,
      tahun,
      total,
    },
  });
  return newMonthlySale.id_penjualan_bulanan;
};

export const updateMonthlySales = async (id, data) => {
  return await prisma.penjualanBulanan.update({
    where: { id_penjualan_bulanan: id },
    data,
  });
};

export const deleteMonthlySales = async (id) => {
  return await prisma.penjualanBulanan.delete({
    where: { id_penjualan_bulanan: id },
  });
};

export const getAverageByMonth = async () => {
  const monthlyAverage = await prisma.penjualanBulanan.groupBy({
    by: ["bulan"],
    _avg: {
      total: true,
    },
    orderBy: {
      bulan: "asc",
    },
  });

  return monthlyAverage.map((item) => ({
    bulan: item.bulan,
    average: Number(item._avg.total.toFixed(2)),
  }));
};
