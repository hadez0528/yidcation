import { object, string, number, array } from "yup";

export const useProductValidationSchema = () => {
  const attributeStorage = useAttributeStorage();
  const attributesCount = attributeStorage.entities.value.length;

  const properties = {
    name: string()
      .min(10, "To pole nie może mieć mniej niż 10 znaków")
      .max(50, "To pole nie może mieć więcej niż 50 znaków")
      .required("To pole jest wymagane"),
    description: string(),
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
    attributes: array()
      .min(
        attributesCount,
        `To pole musi zawierać minimum ${attributesCount} wartości`
      )
      .required(`To pole musi zawierać minimum ${attributesCount} wartości`),
  };

  attributeStorage.entities.value.forEach((attribute) => {
    properties[attribute.name] = string().required("To pole jest wymagane");
  });

  return object(properties);
};
