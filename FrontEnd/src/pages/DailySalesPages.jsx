import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Button } from "@/components/ui/button";
import LoadingHandler from "../components/LoadingHandler";

import PenjualanTable from "../components/daily-sales/sales-table";
import PenjualanFormDialog from "../components/daily-sales/form-dialog";

import { useDailySalesQuery } from "../features/daily-sales/daily-sales.query";

const DailySales = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const { data, isLoading, isError, error } = useDailySalesQuery();

  if (isLoading) return <LoadingHandler />;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <MainLayout>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Penjualan Harian</h1>

          <Button
            onClick={() => {
              setSelected(null);
              setOpen(true);
            }}
          >
            + Tambah Data
          </Button>
        </div>

        <PenjualanTable
          data={data || []}
          onEdit={(item) => {
            setSelected(item);
            setOpen(true);
          }}
        />

        <PenjualanFormDialog
          open={open}
          setOpen={setOpen}
          selected={selected}
        />
      </div>
    </MainLayout>
  );
};

export default DailySales;
