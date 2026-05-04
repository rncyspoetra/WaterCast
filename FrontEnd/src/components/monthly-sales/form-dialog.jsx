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
  useCreateMonthlySales,
  useUpdateMonthlySales,
} from "../../features/monthly-sales/monthly-sales.query";

const MONTHS = [
  { label: "Januari", value: 1 },
  { label: "Februari", value: 2 },
  { label: "Maret", value: 3 },
  { label: "April", value: 4 },
  { label: "Mei", value: 5 },
  { label: "Juni", value: 6 },
  { label: "Juli", value: 7 },
  { label: "Agustus", value: 8 },
  { label: "September", value: 9 },
  { label: "Oktober", value: 10 },
  { label: "November", value: 11 },
  { label: "Desember", value: 12 },
];

const PenjualanFormDialog = ({ open, setOpen, selected }) => {
  const { mutate: createSales } = useCreateMonthlySales();
  const { mutate: updateSales } = useUpdateMonthlySales();

  const [form, setForm] = useState({
    bulan: "",
    tahun: "",
    total: "",
  });

  useEffect(() => {
    if (selected) {
      setForm({
        bulan: selected.bulan,
        tahun: selected.tahun,
        total: selected.total,
      });
    } else {
      setForm({ bulan: "", tahun: "", total: "" });
    }
  }, [selected]);

  const handleSubmit = () => {
    const payload = {
      bulan: Number(form.bulan),
      tahun: Number(form.tahun),
      total: Number(form.total),
    };

    if (selected) {
      updateSales({
        id: selected.id_penjualan_bulanan,
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
            {selected ? "Edit Penjualan" : "Tambah Penjualan"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <select
            className="w-full border rounded-md px-3 py-2"
            value={form.bulan}
            onChange={(e) => setForm({ ...form, bulan: e.target.value })}
          >
            <option value="">Pilih Bulan</option>
            {MONTHS.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>

          <Input
            placeholder="Tahun"
            type="number"
            value={form.tahun}
            onChange={(e) => setForm({ ...form, tahun: e.target.value })}
          />

          <Input
            placeholder="Total"
            value={form.total}
            onChange={(e) => setForm({ ...form, total: e.target.value })}
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
