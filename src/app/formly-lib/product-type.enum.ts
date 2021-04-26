export enum ProductType {
  PRODUCT_A,
  PRODUCT_B,
  PRODUCT_C,
}

export const ProductTypeNames: any[] = Object.keys(ProductType)
  .map((x) => {
    if (new RegExp(/[0-9]/g).test(x)) {
      return ProductType[x].toLowerCase();
    }
  }).filter((x) => x !== undefined)
