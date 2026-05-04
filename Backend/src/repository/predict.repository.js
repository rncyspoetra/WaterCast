import { prisma } from "../config/database.js";

export const getAllPredict = async () => {
  const data = await prisma.hasilPrediksi.findMany({
    include: {
      penjualanBulanan: {
        select: {
          bulan: true,
          tahun: true,
          total: true,
        },
      },
    },
    orderBy: [
      {
        penjualanBulanan: {
          tahun: "asc",
        },
      },
      {
        penjualanBulanan: {
          bulan: "asc",
        },
      },
    ],
  });

  return {
    count: data.length,
    data,
  };
};

export const deleteAllPredict = async () => {
  return await prisma.hasilPrediksi.deleteMany();
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

export const createPredict = async ({
  id_penjualan_bulanan,
  hasil_prediksi,
  error,
}) => {
  return await prisma.hasilPrediksi.create({
    data: {
      id_penjualan_bulanan,
      hasil_prediksi,
      error,
    },
  });
};
