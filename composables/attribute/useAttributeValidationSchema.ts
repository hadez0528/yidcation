import { object, string } from "yup";

export const useAttributeValidationSchema = () =>
  object({
    name: string()
      .min(3, "To pole może mieć minimalnie 3 znaki")
      .max(20, "To pole może mieć maksymalnie 20 znaków")
      .required("To pole jest wymagane"),
  });
