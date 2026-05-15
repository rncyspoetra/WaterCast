import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Skeleton } from "@/components/ui/skeleton";

const UsersSkeleton = () => {
  return (
    <MainLayout>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <Skeleton className="h-10 w-25 md:w-50 bg-gray-300" />

          <Skeleton className="h-10 w-25 md:w-50 bg-gray-300" />
        </div>

        <Skeleton className="h-100 bg-gray-300" />
      </div>
    </MainLayout>
  );
};

export default UsersSkeleton;
