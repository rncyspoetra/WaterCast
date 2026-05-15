import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Button } from "@/components/ui/button";
import UsersSkeleton from "../components/users/users-skeleton";
import UsersTable from "../components/users/users-table";
import UsersFormDialog from "../components/users/form-dialog";

import { useUsersQuery } from "../features/users/users.query";

const UsersPages = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const { data, isLoading } = useUsersQuery();

  if (isLoading) return <UsersSkeleton />;

  return (
    <MainLayout>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-sm md:text-base font-semibold">Manage Users</h1>

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

        <UsersTable
          data={data || []}
          onEdit={(item) => {
            setSelected(item);
            setOpen(true);
          }}
        />

        <UsersFormDialog open={open} setOpen={setOpen} selected={selected} />
      </div>
    </MainLayout>
  );
};

export default UsersPages;
