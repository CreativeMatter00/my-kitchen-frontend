"use client";
import FormSubmitButton from "@/components/shared/FormSubmitButton";
import ImageInput from "@/components/shared/ImageInput";
import Input from "@/components/shared/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useUpdateData } from "@/hooks/useApi";
import { RootState } from "@/redux/Reducer/MainSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { FormModalProps } from "../../../../types";
import { editSchema } from "./Schema";
const EditBrand: React.FC<FormModalProps> = ({ modalClose }) => {
    const {
        control,
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(editSchema) as any,
    });
    const router = useRouter();
    const cookies = useCookies();
    const token = cookies.get('myKitchenAccessToken')
    const editData = useSelector((state: RootState) => state.Initial.editData)
    const updateBrand = useUpdateData([`brands`], `/v1/brand/update-brand/${editData._id}`, token)

    console.log("editData", editData)
    const onSubmit = (data: any) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("activeStatus", data.activeStatus);
        if (data.logo && data.logo[0]) {           // Check if logo is provided
            formData.append("logo", data.logo[0]);   // Append logo file to FormData
        }
        try {
            updateBrand.mutate(formData, {
                onSuccess: (responseData) => {

                    toast.success("Successfully updated brand!");
                    reset();
                    modalClose(false)
                },
                onError: (error: any) => {
                    toast.error("Failed to update brand");
                },
            });
        } catch (error: any) {
            console.error("Error uploading image:", error);
        }
    };

    const onError = (e: any) => {
        console.error("Form validation error:", e);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="container mx-auto px-3 mt-5 space-y-4"
        >

            <h2 className="text-xl font-semibold text-primary">Edit Brand</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                <Input
                    label="Brand Name"
                    name="name"
                    type="text"
                    placeholder="Enter brand name"
                    register={register}
                    error={errors.name}
                    required
                    defaultValue={editData.name}
                />

                <Input
                    label="Description"
                    name="description"
                    type="text"
                    placeholder="Enter product description"
                    register={register}
                    error={errors.description}
                    required
                    defaultValue={editData.description}
                />

                {/* Image Upload */}
                <div className="col-span-1 lg:col-span-2">
                    <ImageInput
                        label="Logo"
                        name="logo"
                        register={register}
                        error={errors.logo}
                        required
                        defaultImage={editData.logo}
                    />
                </div>
                <div className="col-span-1 lg:col-span-2">
                    <Controller
                        name="activeStatus"
                        control={control}
                        render={({ field }) => (
                            <Select
                                onValueChange={(value) => field.onChange(value)}
                                defaultValue={String(editData.activeStatus)}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select active status" />
                                </SelectTrigger>
                                <SelectContent className="z-[9999] bg-black text-white">
                                    <SelectItem value="true" className="bg-black hover:bg-brandColor">Active</SelectItem>
                                    <SelectItem value="false" className="bg-black hover:bg-brandColor">Inactive</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </div>
            </div>
            {/* Product Name */}

            <FormSubmitButton
                status={updateBrand.status}
                buttonName="Update Brand"
                context="Updating"
            />
        </form>
    );
};

export default EditBrand;
