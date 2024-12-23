import * as yup from "yup";
export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  code: yup.string().required("Code is required"),
  description: yup.string().optional(),
  activeStatus: yup.boolean().optional(),
});
