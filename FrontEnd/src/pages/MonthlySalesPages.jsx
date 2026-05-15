import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Button } from "@/components/ui/button";
import MonthlySalesSkeleton from "../components/monthly-sales/monthly-sales-skeleton";
import PenjualanTable from "../components/monthly-sales/sales-table";
import PenjualanFormDialog from "../components/monthly-sales/form-dialog";

import { useMonthlySalesQuery } from "../features/monthly-sales/monthly-sales.query";

const MonthlySales = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const { data, isLoading } = useMonthlySalesQuery();

  if (isLoading) return <MonthlySalesSkeleton />;

  return (
    <MainLayout>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-sm md:text-base font-semibold">
            Penjualan Bulanan
          </h1>

          <Button
            onClick={() => {
              setSelected(null);
              setOpen(true);
            }}
            className="text-xs md:text-sm px-3 md:px-4 py-2"
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
