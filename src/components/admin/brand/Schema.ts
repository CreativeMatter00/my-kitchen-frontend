import * as yup from "yup";
export const schema = yup.object().shape({
 
  name: yup.string().required("Name is required"),
  description: yup.string().optional(),
  logo: yup
    .mixed()
    .optional()
    .required("Image is required")
    .test("fileSize", "File is too large", (value: any) => {
      console.log("value of image is", value);
      return value && value[0] && value[0].size <= 5000000;
    })
    .test("fileType", "Unsupported File Format", (value: any) => {
      return (
        value && value[0] && ["image/jpeg", "image/png"].includes(value[0].type)
      );
    }),
});

export const editSchema = yup.object().shape({
  activeStatus: yup.string().optional(),
  name: yup.string().required("Name is required"),
  description: yup.string().optional(),
  requiresLogo: yup.boolean(),
  logo: yup.mixed().required("Logo is required"),
});
