import { useDishStore } from "~/stores/dishStore";
import type { IDish, IProductSumField, IStructure } from "~/interfaces/interfaces";
import { useProductStore } from "~/stores/productsStore";
import { notify } from "~/services/notifiesService";
import { useWarehouseStore } from "~/stores/warehouseStore";
import { WarehouseService } from "~/services/warehouseService";

const dishStore = useDishStore()
const productStore = useProductStore()
const warehouseStore = useWarehouseStore()

export abstract class DishService {
  private static getSumField (id: number, fieldName: IProductSumField, weightConst: number = 1) {
    return dishStore.get(id)?.structure.reduce((acc: number, product: IStructure) =>
        acc + weightConst * product.weight * (productStore.get(product.product_id)?.[fieldName] || 0)
      , 0)
  }
  private static isMakeDish (dish: IDish) {
    return dish.structure.every(product =>
      product.weight <= (warehouseStore.get(product.product_id)?.weight || 0)
    )
  }
  public static getPrice (id: number) {
    return this.getSumField(id, 'price', 1 / 1000);
  }
  public static getProteins (id: number) {
    return this.getSumField(id, 'proteins');
  }
  public static getFats (id: number) {
    return this.getSumField(id, 'fats');
  }
  public static getCarbohydrates (id: number) {
    return this.getSumField(id, 'carbohydrates');
  }
  public static getCalories (id: number) {
    return this.getSumField(id, 'calories');
  }
  public static makeDish (id?: number) {
    if (!id) return;
    const dish = dishStore.get(id);
    if (!dish) {
      notify(`Dish ${id} is not found`, 'error')
      return false;
    }
    if (!this.isMakeDish(dish)) {
      notify("You can't make thiss dish", 'error')
      return false;
    }
    dish.structure.forEach(product =>
      WarehouseService.spend(product.product_id, product.weight)
    );
  }
}