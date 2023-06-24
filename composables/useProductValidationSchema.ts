import { object, string, number } from "yup";

export const useProductValidationSchema = () =>
  object({
    name: string()
      .min(20, "To pole nie może mieć mniej niż 20 znaków")
      .max(50, "To pole nie może mieć więcej niż 50 znaków")
      .required("To pole jest wymagane"),
    description: string(),
    category: string().required("To pole jest wymagane"),
    fitterPlace: string().required("To pole jest wymagane"),
    isolation: string().nullable(),
    price: number()
      .typeError("To pole musi być liczbą")
      .min(1, "To pole może mieć minimalną wartość 1")
      .max(9999, "To pole może mieć maksymalną wartość 9999")
      .required("To pole jest wymagane"),
    quantity: number()
      .typeError("To pole musi być liczbą")
      .min(0, "To pole może mieć minimalną wartość 0")
      .max(9999, "To pole może mieć maksymalną wartość 9999")
      .required("To pole jest wymagane"),
  });
