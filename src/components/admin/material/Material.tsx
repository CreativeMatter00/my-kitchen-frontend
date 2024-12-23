'use client'
import { DataTable } from "@/components/shared/DataTable";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import React, { useState } from "react";
import Add from "../brand/Add";
import { useDispatch } from "react-redux";
import { useFetchData } from "@/hooks/useApi";
import { handleEditData } from "@/redux/Reducer/MainSlice";
import AddMaterial from "./AddMaterial";
import EditMaterial from "./EditMaterial";

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const Material: React.FC = () => {
  const dispatch = useDispatch();
  const { data = [], isLoading, error } = useFetchData(['materials'], `/v1/material`)
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
      header: 'Status',
      cell: ({ row }) => {
        const data = row.original;

        return <div className="flex justify-start items-center">
          <div className={`px-4 py-2 rounded-md ${data.activeStatus ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>{data.activeStatus ? 'Active' : 'Inactive'}</div>
        </div>
      }
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const data = row.original
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
            <button className="bg-primary hover:bg-brandColor px-4 py-2 rounded-md text-white " onClick={() => {
              setEditModalOpen(true)
              dispatch(handleEditData(data))
            }}>Edit</button>
          </>
        )
      },
    },
  ]

  const [addModalOpen, setAddModalOpen] = useState(false)
  const [viewModalOpen, setViewModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  return (
    <div>
      <DataTable data={data} columns={columns} searchFieldName={'name'} tableName="Material" setAddModalOpen={setAddModalOpen} />
      <Dialog open={addModalOpen} onOpenChange={setAddModalOpen}>
        <DialogContent className="bg-white w-[50vw]">
          <DialogHeader>

            <DialogDescription>
              {/* <Add /> */}
              <AddMaterial modalClose={setAddModalOpen} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={viewModalOpen} onOpenChange={setViewModalOpen}>
        <DialogContent className="bg-white w-[50vw]">
          <DialogHeader>

            <DialogDescription>
              {/* <Add />+ */}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog><Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
        <DialogContent className="bg-white w-[50vw]">
          <DialogHeader>

            <DialogDescription>
              <EditMaterial modalClose={setEditModalOpen} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};


export default Material;