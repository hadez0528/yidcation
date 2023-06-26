export type ProductAttributes = { [attributeId: string]: string };

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  attributes: ProductAttributes;
  createdAt: string;
};

export type ProductAttributeType = "select";
export type ProductAttributeValue = "string";

export type ProductAttribute = {
  id: string;
  name: string;
  type: ProductAttributeType;
  values: ProductAttributeValue[];
  createdAt: string;
};
