"use client";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import Input from "@/components/shared/Input";
import ImageInput from "@/components/shared/ImageInput";
import { useAddData, useFetchData } from "@/hooks/useApi";
import { toast } from "sonner";
import { useCookies } from "next-client-cookies";
import { FormModalProps } from "../../../../types";
import FormSubmitButton from "@/components/shared/FormSubmitButton";
import { schema } from "./Schema";
import MultipleImageInput from "@/components/shared/MultipleImageInput";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import TextInput from "@/components/shared/TextInput";


const AddProduct: React.FC<FormModalProps> = ({ modalClose }) => {
    const router = useRouter();
    const cookies = useCookies();
    const token = cookies.get('myKitchenAccessToken')
    console.log("token", token);
    const [images, setImages] = useState<File[]>([]);
    const {
        control,
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema) as any,
    });

    const { data: brandData = [] } = useFetchData(['brands'], `/v1/brand`)
    const { data: categoryData = [], } = useFetchData(['categories'], `/v1/category`)
    const { data: colorData = [] } = useFetchData(['colors'], `/v1/color`)
    const { data: finishData = [] } = useFetchData(['finish'], `/v1/finish`)
    const { data: installationTypeData = [] } = useFetchData(['installationsType'], `/v1/installation-types`)
    const { data: materialData = [] } = useFetchData(['materials'], `/v1/material`)
    const { data: styleData = [] } = useFetchData(['styles'], `/v1/style`)
    const addProduct = useAddData(['products'], `/v1/product/create-product`, token)


    const onSubmit = (data: any) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("code", data.code);
        formData.append("origin", data.origin);
        formData.append("dimension", data.dimension);
        formData.append("description", data.description);
        formData.append("specification", data.specification);
        formData.append("price", data.price);
        formData.append("brand", data.brand);
        formData.append("category", data.category);
        formData.append("material", data.material);
        formData.append("finish", data.finish);
        formData.append("style", data.style);
        formData.append("color", data.color);
        formData.append("installation", data.installation);
        if (data.images && data.images.length > 0) {
            Array.from(data.images).forEach((file: any) => {
                formData.append("images", file); // Use the key "images"
            });
        } else {
            console.error("No images provided!");
        }
        // formData.append("category", data.category);
        // if (data.logo && data.logo[0]) {           // Check if logo is provided
        //     formData.append("logo", data.logo[0]);   // Append logo file to FormData
        // }
        try {
            addProduct.mutate(formData, {
                onSuccess: (responseData) => {
                    console.log("responseData", responseData)
                    toast.success("Successfully added new brand!");
                    reset();
                    modalClose(false);
                },
                onError: (error: any) => {
                    toast.error("Failed to create new brand");
                },
            });
        } catch (error: any) {
            console.error("Error uploading image:", error);
        }
    };

    // const images = watch('images');
    useEffect(() => {
        setValue('images', images)
    }, [images, setValue])
    const formImages = watch('images');
    useEffect(() => {
        console.log('formImages', formImages)
    }, [formImages])

    const onError = (e: any) => {
        console.error("Form validation error:", e);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="container mx-auto px-3 mt-5 space-y-4"
        >

            <h2 className="text-xl font-semibold text-primary">Add New Product</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <Input
                    label="Brand Name"
                    name="name"
                    type="text"
                    placeholder="Enter brand name"
                    register={register}
                    error={errors.name}
                    required
                />
                <Input
                    label="Product Code"
                    name="code"
                    type="text"
                    placeholder="Enter product code"
                    register={register}
                    error={errors.code}
                    required
                />
                <Input
                    label="Product Origin"
                    name="origin"
                    type="text"
                    placeholder="Enter product origin"
                    register={register}
                    error={errors.origin}
                    required
                />
                <Input
                    label="Product Dimension"
                    name="dimension"
                    type="text"
                    placeholder="Enter product dimension"
                    register={register}
                    error={errors.dimension}
                    required
                />
                <Input
                    label="Description"
                    name="description"
                    type="text"
                    placeholder="Enter product description"
                    register={register}
                    error={errors.description}
                    required
                />
                <TextInput name="description" labelName="Description"
                    control={control}
                    errors={errors}
                    setValue={setValue}
                    required={true}

                />
                <Input
                    label="Specification"
                    name="specification"
                    type="text"
                    placeholder="Enter product specification"
                    register={register}
                    error={errors.specification}
                    required
                />
                <Input
                    label="Price"
                    name="price"
                    type="number"
                    placeholder="Enter product price"
                    register={register}
                    error={errors.price}
                    required
                />
                {/* <label className="text-gray-800 font-medium">
                    Brand<span className="text-red-500">*</span>
                </label> */}
                <Controller
                    name="brand"
                    control={control}
                    render={({ field }) => (
                        <>

                            <Select
                                onValueChange={(value) => field.onChange(value)}

                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select brand" />
                                </SelectTrigger>
                                <SelectContent className="z-[9999] bg-black text-white">
                                    {
                                        brandData.map((brand: any) => (
                                            <SelectItem key={brand._id} className="bg-black hover:bg-brandColor" value={brand._id}>
                                                {brand.name}
                                            </SelectItem>
                                        ))
                                    }

                                </SelectContent>
                            </Select>
                        </>
                    )}
                />
                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                        <Select
                            onValueChange={(value) => field.onChange(value)}

                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select brand" />
                            </SelectTrigger>
                            <SelectContent className="z-[9999] bg-black text-white">
                                {
                                    categoryData.map((category: any) => (
                                        <SelectItem key={category._id} className="bg-black hover:bg-brandColor" value={category._id}>
                                            {category.name}
                                        </SelectItem>
                                    ))
                                }

                            </SelectContent>
                        </Select>
                    )}
                />
                <Controller
                    name="material"
                    control={control}
                    render={({ field }) => (
                        <Select
                            onValueChange={(value) => field.onChange(value)}

                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Material" />
                            </SelectTrigger>
                            <SelectContent className="z-[9999] bg-black text-white">
                                {
                                    materialData.map((material: any) => (
                                        <SelectItem key={material._id} className="bg-black hover:bg-brandColor" value={material._id}>
                                            {material.name}
                                        </SelectItem>
                                    ))
                                }

                            </SelectContent>
                        </Select>
                    )}
                />
                <Controller
                    name="finish"
                    control={control}
                    render={({ field }) => (
                        <Select
                            onValueChange={(value) => field.onChange(value)}

                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Finish" />
                            </SelectTrigger>
                            <SelectContent className="z-[9999] bg-black text-white">
                                {
                                    finishData.map((finish: any) => (
                                        <SelectItem key={finish._id} className="bg-black hover:bg-brandColor" value={finish._id}>
                                            {finish.name}
                                        </SelectItem>
                                    ))
                                }

                            </SelectContent>
                        </Select>
                    )}
                />
                <Controller
                    name="color"
                    control={control}
                    render={({ field }) => (
                        <Select
                            onValueChange={(value) => field.onChange(value)}

                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Color" />
                            </SelectTrigger>
                            <SelectContent className="z-[9999] bg-black text-white">
                                {
                                    colorData.map((color: any) => (
                                        <SelectItem key={color._id} className="bg-black hover:bg-brandColor" value={color._id}>
                                            {color.name}
                                        </SelectItem>
                                    ))
                                }

                            </SelectContent>
                        </Select>
                    )}
                />
                <Controller
                    name="style"
                    control={control}
                    render={({ field }) => (
                        <Select
                            onValueChange={(value) => field.onChange(value)}

                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Style" />
                            </SelectTrigger>
                            <SelectContent className="z-[9999] bg-black text-white">
                                {
                                    styleData.map((style: any) => (
                                        <SelectItem key={style._id} className="bg-black hover:bg-brandColor" value={style._id}>
                                            {style.name}
                                        </SelectItem>
                                    ))
                                }

                            </SelectContent>
                        </Select>
                    )}
                />
                <Controller
                    name="installation"
                    control={control}
                    render={({ field }) => (
                        <Select
                            onValueChange={(value) => field.onChange(value)}

                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Installation Type" />
                            </SelectTrigger>
                            <SelectContent className="z-[9999] bg-black text-white">
                                {
                                    installationTypeData.map((installationType: any) => (
                                        <SelectItem key={installationType._id} className="bg-black hover:bg-brandColor" value={installationType._id}>
                                            {installationType.name}
                                        </SelectItem>
                                    ))
                                }

                            </SelectContent>
                        </Select>
                    )}
                />

                <div className="col-span-1 lg:col-span-2">
                    <MultipleImageInput
                        label="Images"
                        name="images"
                        register={register}
                        error={errors.images}
                        setImages={setImages}
                        required
                    />
                </div>
            </div>
            {/* Product Name */}
            <FormSubmitButton
                status={addProduct.status}
                buttonName="Add Brand"
                context="Adding"
            />
        </form>
    );
};

export default AddProduct;
