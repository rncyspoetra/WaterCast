import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Button } from "@/components/ui/button";
import LoadingHandler from "../components/LoadingHandler";

import PenjualanTable from "../components/monthly-sales/sales-table";
import PenjualanFormDialog from "../components/monthly-sales/form-dialog";

import { useMonthlySalesQuery } from "../features/monthly-sales/monthly-sales.query";

const MonthlySales = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const { data, isLoading, isError, error } = useMonthlySalesQuery();

  if (isLoading) return <LoadingHandler />;
  if (isError) return <div>Error: {error?.message}</div>;

  console.log(data);

  return (
    <MainLayout>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Penjualan Bulanan</h1>

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

export default MonthlySales;
