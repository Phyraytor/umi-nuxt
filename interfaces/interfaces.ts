export interface IProduct {
  id: number;
  name: string,
  price: number,
  proteins: number,
  fats: number,
  carbohydrates: number,
  calories: number,
}

export interface IStructure {
  product_id: number;
  weight: number;
}

export interface IDish {
  id: number;
  name: string;
  structure: IStructure[];
}

export type IProductSumField = Exclude<Exclude<keyof IProduct, 'id'>, 'name'>;