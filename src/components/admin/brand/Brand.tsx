"use client";
import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/shared/DataTable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Add from "./Add";
import { useFetchData } from "@/hooks/useApi";
import Image from "next/image";
import EditBrand from "./EditBrand";
import { useDispatch } from "react-redux";
import { handleEditData } from "@/redux/Reducer/MainSlice";
import TableLoaderSkeleton from "@/components/shared/loder/TableLoaderSkeleton";

export type Brand = {
  _id: string;
  name: string;
  email: string;
  amount: number;
  status: string;
};

const Brand: React.FC = () => {
  const { data = [], isLoading, error } = useFetchData(["brands"], `/v1/brand`);
  const dispatch = useDispatch();
  console.log("brand data", data);

  const columns: ColumnDef<any>[] = [
    {
      header: "Sl No",
      accessorFn: (_row, index) => index + 1, // Generate serial number
      cell: ({ row }) => (
        <div>{row.index + 1}</div> // Display the 1-based index
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("description")}</div>
      ),
    },
    {
      accessorKey: "activeStatus",
      header: "Status",
      cell: ({ row }) => {
        const data = row.original;

        return (
          <div className="flex justify-start items-center">
            <div
              className={`px-4 py-2 rounded-md ${
                data.activeStatus
                  ? "bg-green-200 text-green-700"
                  : "bg-red-200 text-red-700"
              }`}
            >
              {data.activeStatus ? "Active" : "Inactive"}
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "logo",
      header: "Logo",
      cell: ({ row }) => {
        const imageData = row.original;

        return (
          <div>
            <Image
              src={imageData.logo}
              alt={imageData.name}
              width={100}
              height={100}
            />
          </div>
        );
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const data = row.original;
        return (
          <>
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-backgroundColor">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem className="hover:bg-brandColor hover:text-white cursor-pointer"
                  onClick={() => {
                    setViewModalOpen(true)


                  }}
                >
                  View
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-brandColor hover:text-white cursor-pointer" onClick={() => {
                  setEditModalOpen(true)
                  dispatch(handleEditData(data))
                }}>Edit</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
            <button
              className="bg-primary hover:bg-brandColor px-4 py-2 rounded-md text-white "
              onClick={() => {
                setEditModalOpen(true);
                dispatch(handleEditData(data));
              }}
            >
              Edit
            </button>
          </>
        );
      },
    },
  ];

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  if (isLoading || data.length <= 0) return <TableLoaderSkeleton />;
  return (
    <div>
      <DataTable
        data={data}
        columns={columns}
        searchFieldName={"name"}
        tableName="Brand"
        setAddModalOpen={setAddModalOpen}
      />
      <Dialog open={addModalOpen} onOpenChange={setAddModalOpen}>
        <DialogContent className="bg-white w-[50vw]">
          <DialogHeader>
            <DialogDescription>
              <Add modalClose={setAddModalOpen} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={viewModalOpen} onOpenChange={setViewModalOpen}>
        <DialogContent className="bg-white w-[50vw]">
          <DialogHeader>
            <DialogDescription>View</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
        <DialogContent className="bg-white w-[50vw]">
          <DialogHeader>
            <DialogDescription>
              <EditBrand modalClose={setEditModalOpen} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Brand;
