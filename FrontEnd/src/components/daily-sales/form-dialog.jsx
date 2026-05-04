import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

import {
  useCreateDailySales,
  useUpdateDailySales,
} from "../../features/daily-sales/daily-sales.query";

const PenjualanFormDialog = ({ open, setOpen, selected }) => {
  const { mutate: createSales } = useCreateDailySales();
  const { mutate: updateSales } = useUpdateDailySales();

  const [form, setForm] = useState({
    tanggal: "",
    terjual: "",
  });

  useEffect(() => {
    if (selected) {
      setForm({
        tanggal: selected.tanggal?.slice(0, 10),
        terjual: selected.terjual,
      });
    } else {
      setForm({ tanggal: "", terjual: "" });
    }
  }, [selected]);

  const handleSubmit = () => {
    const payload = {
      tanggal: form.tanggal,
      terjual: Number(form.terjual),
    };

    if (selected) {
      updateSales({
        id: selected.id_penjualan_harian,
        data: payload,
      });
    } else {
      createSales(payload);
    }

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {selected ? "Edit Penjualan Harian" : "Tambah Penjualan Harian"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <Input
            type="date"
            value={form.tanggal}
            onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
          />

          <Input
            type="number"
            placeholder="Jumlah Terjual"
            value={form.terjual}
            onChange={(e) => setForm({ ...form, terjual: e.target.value })}
          />

          <Button onClick={handleSubmit} className="w-full">
            Simpan
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PenjualanFormDialog;
