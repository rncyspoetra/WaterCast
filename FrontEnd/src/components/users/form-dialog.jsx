import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

import {
  useCreateUsers,
  useUpdateUsers,
} from "../../features/users/users.query";

const UsersFormDialog = ({ open, setOpen, selected }) => {
  const { mutate: createUser } = useCreateUsers();
  const { mutate: updateUser } = useUpdateUsers();

  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "",
  });

  useEffect(() => {
    if (selected) {
      setForm({
        username: selected.username,
        password: "",
        role: selected.role,
      });
    } else {
      setForm({ username: "", password: "", role: "" });
    }
  }, [selected]);

  const handleSubmit = () => {
    // VALIDASI
    if (!form.username.trim()) {
      toast.error("Username tidak boleh kosong");
      return;
    }

    if (!form.role) {
      toast.error("Role harus dipilih");
      return;
    }

    if (!selected && !form.password.trim()) {
      toast.error("Password tidak boleh kosong");
      return;
    }
    
    const payload = {
      username: form.username,
      role: form.role,
    };

    if (form.password.trim()) {
      payload.password = form.password;
    }

    if (selected) {
      updateUser({
        id: selected.id_users,
        data: payload,
      });

      toast.success("User berhasil diupdate");
    } else {
      createUser(payload);
      toast.success("User berhasil ditambahkan");
    }

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{selected ? "Edit User" : "Tambah User"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <Input
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />

          <Input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <select
            className="w-full border rounded-md px-3 py-2"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="">Pilih Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <Button onClick={handleSubmit} className="w-full">
            Simpan
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UsersFormDialog;
