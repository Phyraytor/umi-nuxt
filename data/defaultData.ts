import type { IDish, IProduct, IStructure } from "~/interfaces/interfaces";

export const defaultDishesList: IDish[] = [
  {
    id: 1,
    name: 'Salad',
    structure: [
      {product_id: 1, weight: 150},
      {product_id: 2, weight: 150},
      {product_id: 3, weight: 100},
    ],
  },
  {
    id: 2,
    name: 'Fried egg',
    structure: [
      {product_id: 1, weight: 100},
      {product_id: 3, weight: 200},
    ],
  },
]

export const defaultProductsList: IProduct[] = [
  {
    id: 1,
    name: 'Tomato',
    price: 17,
    proteins: 1.1,
    fats: 0.2,
    carbohydrates: 5.2,
    calories: 24,
  },
  {
    id: 2,
    name: 'Cucumber',
    price: 8,
    proteins: 0.8,
    fats: 0.1,
    carbohydrates: 2.8,
    calories: 15,
  },
  {
    id: 3,
    name: 'Egg',
    price: 3,
    proteins: 12.7,
    fats: 11.5,
    carbohydrates: 0.7,
    calories: 157,
  },
]

export const defaultWarehouseList: IStructure[] = [
  {product_id: 1, weight: 600},
  {product_id: 2, weight: 500},
  {product_id: 3, weight: 800},
]