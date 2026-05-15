import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Skeleton } from "@/components/ui/skeleton";

const ForecastSkeleton = () => {
  return (
    <MainLayout>
      <div className="px-4 lg:px-6 flex flex-col space-y-4">
        <div className="grid justify-baseline grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
          <Skeleton className="h-25 bg-gray-300" />
          <Skeleton className="h-25 bg-gray-300" />
          <Skeleton className="h-25 bg-gray-300" />
          <Skeleton className="h-25 bg-gray-300" />
        </div>
        <div className="w-full">
          <Skeleton className="bg-gray-300 h-60" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2 h-full">
            <Skeleton className="bg-gray-300 h-60" />
          </div>
          <div className="lg:col-span-1 h-full">
            <Skeleton className="bg-gray-300 h-60" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 w-full h-auto">
          <Skeleton className="bg-gray-300 h-60 w-full" />
          <Skeleton className="bg-gray-300 h-60 w-full" />
        </div>
      </div>
    </MainLayout>
  );
};

export default ForecastSkeleton;
