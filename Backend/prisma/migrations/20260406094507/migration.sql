-- CreateTable
CREATE TABLE "users" (
    "id_users" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id_users")
);

-- CreateTable
CREATE TABLE "penjualanBulanan" (
    "id_penjualan_bulanan" SERIAL NOT NULL,
    "id_users" INTEGER NOT NULL,
    "bulan" INTEGER NOT NULL,
    "tahun" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,

    CONSTRAINT "penjualanBulanan_pkey" PRIMARY KEY ("id_penjualan_bulanan")
);

-- CreateTable
CREATE TABLE "penjualanHarian" (
    "id_penjualan_harian" SERIAL NOT NULL,
    "id_users" INTEGER NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "terjual" INTEGER NOT NULL,

    CONSTRAINT "penjualanHarian_pkey" PRIMARY KEY ("id_penjualan_harian")
);

-- CreateTable
CREATE TABLE "hasilPrediksi" (
    "id_prediksi" SERIAL NOT NULL,
    "id_penjualan_bulanan" INTEGER NOT NULL,
    "hasil_prediksi" DECIMAL(10,2) NOT NULL,
    "error" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "hasilPrediksi_pkey" PRIMARY KEY ("id_prediksi")
);

-- CreateTable
CREATE TABLE "authentications" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "authentications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "authentications_token_key" ON "authentications"("token");

-- AddForeignKey
ALTER TABLE "penjualanBulanan" ADD CONSTRAINT "penjualanBulanan_id_users_fkey" FOREIGN KEY ("id_users") REFERENCES "users"("id_users") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "penjualanHarian" ADD CONSTRAINT "penjualanHarian_id_users_fkey" FOREIGN KEY ("id_users") REFERENCES "users"("id_users") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "hasilPrediksi" ADD CONSTRAINT "hasilPrediksi_id_penjualan_bulanan_fkey" FOREIGN KEY ("id_penjualan_bulanan") REFERENCES "penjualanBulanan"("id_penjualan_bulanan") ON DELETE NO ACTION ON UPDATE NO ACTION;
