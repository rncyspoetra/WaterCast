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

const TopRecentTransactions = ({ data }) => {
  const dataTable = data?.last5DailySales || [];

  return (
    <Card className="p-5 shadow-md ring-0 gap-3 h-full flex flex-col">
      <CardHeader className="flex flex-col items-start text-left px-3">
        <CardTitle className="text-left font-bold text-base md:text-xl text-gray-600">
          Top Recent Transactions
        </CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Overview of the latest transactions from the past 5 days.
        </CardDescription>
      </CardHeader>
      <Table className="border-separate border-spacing-y-2">
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-400 text-sm md:text-base font-medium">
              No
            </TableHead>
            <TableHead className="text-gray-400 text-sm md:text-base font-medium">
              Date
            </TableHead>
            <TableHead className="text-gray-400 text-sm md:text-base font-medium">
              Sold
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {dataTable.map((item, index) => (
            <TableRow key={index} className="bg-white shadow-sm rounded-lg">
              <TableCell className=" text-sm md:text-base">
                {index + 1}
              </TableCell>
              <TableCell className=" text-sm md:text-base">
                {item.tanggal}
              </TableCell>
              <TableCell className=" text-sm md:text-base">
                {item.terjual}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TopRecentTransactions;
