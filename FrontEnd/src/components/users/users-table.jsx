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
import { useDeleteUsers } from "../../features/users/users.query";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";
import LoadingHandler from "../LoadingHandler";

const ROLE_STYLE = {
  admin: "bg-green-100 text-green-600 border border-green-200",
  cashier: "bg-purple-100 text-purple-600 border border-purple-200",
};

const UsersTable = ({ data, isLoading, onEdit }) => {
  const { mutate: deleteUser } = useDeleteUsers();

  const dataTable = data || [];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(dataTable.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = dataTable.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {}, [dataTable.length]);

  const handleDelete = (id) => {
    deleteUser({ id });
  };

  if (isLoading) return <LoadingHandler />;

  return (
    <Card className="p-5 shadow-md flex flex-col gap-3 ring-0">
      <div className="w-full overflow-x-auto">
        <Table className="text-xs md:text-sm">
          <TableHeader>
            <TableRow className="bg-gray-100 rounded-l-lg">
              <TableHead className="text-center font-bold text-gray-500">
                No
              </TableHead>
              <TableHead className="text-center font-bold text-gray-500">
                Username
              </TableHead>
              <TableHead className="hidden md:table-cell text-center font-bold text-gray-500">
                Password
              </TableHead>
              <TableHead className="text-center font-bold text-gray-500">
                Role
              </TableHead>
              <TableHead className="text-center font-bold text-gray-500">
                Aksi
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentData.map((item, index) => (
              <TableRow key={item.id_users} className="text-center">
                <TableCell>{startIndex + index + 1}</TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell className="hidden md:table-cell">********</TableCell>
                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-sm text-xs font-medium ${
                      ROLE_STYLE[item.role] ||
                      "bg-gray-100 text-gray-600 border"
                    }`}
                  >
                    {item.role}
                  </span>
                </TableCell>
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
                    onClick={() => handleDelete(item.id_users)}
                    className="text-xs md:text-sm px-3 md:px-4 py-2"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

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

export default UsersTable;
