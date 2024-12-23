import * as yup from "yup";
export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().optional(),
  activeStatus: yup.boolean().optional(),
});

