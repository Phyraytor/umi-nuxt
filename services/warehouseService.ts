
import type { IStructure } from "~/interfaces/interfaces";
import { useProductStore } from "~/stores/productsStore";
import { notify } from "~/services/notifiesService";
import { useWarehouseStore } from "~/stores/warehouseStore";

const productStore = useProductStore()
const warehouseStore = useWarehouseStore()

export abstract class WarehouseService {
  private static append  = (product: IStructure) => {
    if (!productStore.get(product.product_id)) {
      notify(`Product ${product.product_id} is not found`, 'error')
      return
    }
    warehouseStore.append(product)
  }
  public static buy = (product: IStructure) => {
    if (!warehouseStore.get(product.product_id)) {
      this.append(product)
      return
    }
    warehouseStore.changeWeight(product.product_id, product.weight);
  }
  public static spend = (productId: number, weight: number) => {
    if (!warehouseStore.get(productId)) {
      notify(`Product ${productId} is not found`, 'error')
      return
    }
    warehouseStore.changeWeight(productId, -weight);
  }
}