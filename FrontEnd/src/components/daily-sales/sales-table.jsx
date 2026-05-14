import { useState, useEffect } from "react";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useDeleteDailySales } from "../../features/daily-sales/daily-sales.query";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";
import LoadingHandler from "../LoadingHandler";

const PenjualanTable = ({ data, isLoading, onEdit }) => {
  const { mutate: deleteSales } = useDeleteDailySales();

  const dataTable = data || [];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(dataTable.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = dataTable.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {}, [dataTable.length]);

  const handleDelete = async (id) => {
    deleteSales({ id });
  };

  if (isLoading) return <LoadingHandler />;

  return (
    <Card className="p-5 shadow-md gap-3 flex flex-col ring-0">
      <Table className="text-xs md:text-sm">
        <TableHeader>
          <TableRow className="bg-gray-100 rounded-l-lg">
            <TableHead className="text-center font-bold text-gray-500">
              No
            </TableHead>
            <TableHead className="text-center font-bold text-gray-500">
              Tanggal
            </TableHead>
            <TableHead className="text-center font-bold text-gray-500">
              Terjual
            </TableHead>
            <TableHead className="text-center font-bold text-gray-500">
              Aksi
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentData.map((item, index) => (
            <TableRow key={item.id_penjualan_harian} className="text-center">
              <TableCell>{startIndex + index + 1}</TableCell>

              <TableCell>
                {new Date(item.tanggal).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell>{item.terjual}</TableCell>

              <TableCell className="space-x-2">
                <Button
                  variant="outline"
                  onClick={() => onEdit(item)}
                  className="text-xs md:text-sm px-3 md:px-4 py-2"
                >
                  Edit
                </Button>

                <Button
                  variant="destructive"
                  onClick={() => handleDelete(item.id_penjualan_harian)}
                  className="text-xs md:text-sm px-3 md:px-4 py-2"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
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
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
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
};

export default PenjualanTable;
