"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";

const bulanNama = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

const TableForecastData = ({ data }) => {
  const dataTable = data?.data || [];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(dataTable.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = dataTable.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Card className="p-5 shadow-md ring-0 gap-3 h-full flex flex-col">
      <CardHeader className="flex flex-col items-start text-left px-3">
        <CardTitle className="text-left font-bold text-xl text-gray-600">
          Data Aktual vs Prediksi
        </CardTitle>
        <CardDescription>
          Perbandingan data aktual dan hasil prediksi beserta nilai error
          berdasarkan bulan dan tahun.
        </CardDescription>
      </CardHeader>

      <Table className="border-separate border-spacing-y-2">
        <TableHeader>
          <TableRow className="bg-gray-100 ">
            <TableHead className="text-center font-semibold text-gray-500 ">No</TableHead>
            <TableHead className="text-center font-semibold text-gray-500">
              Bulan - Tahun
            </TableHead>
            <TableHead className="text-center font-semibold text-gray-500">
              Data Aktual
            </TableHead>
            <TableHead className="text-center font-semibold text-gray-500">
              Hasil Prediksi
            </TableHead>
            <TableHead className="text-center font-semibold text-gray-500">Error</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentData.map((item, index) => {
            const bulan = bulanNama[item.penjualanBulanan.bulan - 1];
            const tahun = item.penjualanBulanan.tahun;

            return (
              <TableRow
                key={item.id_prediksi}
                className="bg-white shadow-sm rounded-lg text-center"
              >
                <TableCell className="font-semibold">
                  {startIndex + index + 1}
                </TableCell>

                <TableCell className="font-semibold">
                  {bulan} {tahun}
                </TableCell>

                <TableCell className="font-semibold">
                  {item.penjualanBulanan.total}
                </TableCell>

                <TableCell className="font-semibold">
                  {item.hasil_prediksi}
                </TableCell>

                <TableCell className="font-semibold">
                  <span
                    className={
                      Number(item.error) > 0 ? "text-red-500" : "text-green-600"
                    }
                  >
                    {item.error}
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={
                currentPage === 1
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>

          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                isActive={currentPage === i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className="cursor-pointer"
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Card>
  );
}

export default TableForecastData;
