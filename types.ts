export type ProductAttributeType = "text" | "number" | "select";
export type ProductAttributeValue = "text" | "number";

export type ProductAttribute = {
  id: string;
  name: string;
  type: ProductAttributeType;
  valueIndex: number;
  values: ProductAttributeValue[];
  createdAt: string;
};
