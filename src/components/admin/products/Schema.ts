import * as yup from "yup";
export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  code: yup.string().required("Coder is required"),
  origin: yup.string().required("Coder is required"),
  dimension: yup.string().required("Coder is required"),
  description: yup.string().required("Coder is required"),
  specification: yup.string().required("Coder is required"),
  price: yup.number().required("Price is required"),
  brand: yup.string().required("Brand is required"),
  category: yup.string().required("Category is required"),
  material: yup.string().required("Material is required"),
  finish: yup.string().required("Finish is required"),
  style: yup.string().required("Style is required"),
  color: yup.string().required("Color is required"),
  installation: yup.string().required("Installation is required"),
  activeStatus: yup.string().optional(),
  images: yup.array().of(
    yup
      .mixed()
      .optional()
      .required("Image is required")
      // .test("fileSize", "File is too large", (value: any) => {
      //   console.log("value of image is", value);
      //   return value && value[0] && value[0].size <= 5000000;
      // })
      // .test("fileType", "Unsupported File Format", (value: any) => {
      //   return (
      //     value &&
      //     value[0] &&
      //     ["image/jpeg", "image/png"].includes(value[0].type)
      //   );
      // })
  ),
});
