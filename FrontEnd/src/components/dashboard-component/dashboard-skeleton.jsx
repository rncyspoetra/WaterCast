import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import MainLayout from "../../layouts/MainLayout";

const DashboardSkeleton = () => {
  return (
    <MainLayout>
      <div className="px-4 lg:px-6 flex flex-col space-y-4">
        <div className="grid justify-baseline grid-cols-1 gap-4  @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
          <Skeleton className="bg-gray-300 h-25" />
          <Skeleton className="bg-gray-300 h-25" />
          <Skeleton className="bg-gray-300 h-25" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Skeleton className="bg-gray-300 h-60" />
          </div>

          <Skeleton className="bg-gray-300 h-60" />
        </div>

        <div className="lg:w-1/2 w-full">
          <Skeleton className="h-40 bg-gray-300" />
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardSkeleton;
