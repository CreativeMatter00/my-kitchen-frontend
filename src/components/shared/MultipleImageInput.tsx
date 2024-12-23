import Image from "next/image";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface ImageInputProps {
    label: string;
    name: string;
    register: UseFormRegister<any>;
    error?: any;
    // defaultImage?: any;
    required?: boolean;
    setImages: any;
}
const ImageInput: React.FC<ImageInputProps> = ({
    label,
    name,
    register,
    error,
    // defaultImages,
    required = false,
    setImages
}) => {
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newFiles = Array.from(files);
            setImages((prev: any) => [...prev, ...newFiles]);
            const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
            setImagePreviews((prev) => [...prev, ...newPreviews]);
        }
    };

    const removeImage = (index: number) => {
        setImagePreviews((prev) => prev.filter((_, i) => i !== index));
        setImages((prev: any) => prev.filter((_: any, i: any) => i !== index));
    };

    return (
        <div className="flex flex-col gap-2 col-span-1">
            <label className="text-gray-800 font-medium">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="w-full flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-md hover:border-primary focus:outline-none">
                <input
                    id={name}
                    type="file"
                    accept="image/jpeg, image/png"
                    multiple
                    {...register(name, { required })}
                    onChange={(e) => {
                        handleFileChange(e);
                        register(name).onChange(e);
                    }}
                    className="hidden"
                />
                <label
                    htmlFor={name}
                    className="cursor-pointer text-primary text-center w-full h-full py-6"
                >
                    {imagePreviews.length > 0
                        ? "Change Images"
                        : "Click to Upload Images"}
                </label>

                {imagePreviews.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-4">
                        {imagePreviews.map((preview: any, index: number) => (
                            <div key={index} className="relative group">
                                <Image
                                    src={preview}
                                    alt={`Image Preview ${index + 1}`}
                                    className="w-32 h-32 object-cover rounded-md"
                                    width={200}
                                    height={200}
                                />
                                <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    className="absolute top-0 right-0 bg-red-500 text-white text-sm rounded-full p-1 opacity-75 hover:opacity-100 transition-opacity"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {error && (
                <p className="text-sm text-red-500">
                    {error.message || "At least one image is required"}
                </p>
            )}
        </div>
    );
};

export default ImageInput;