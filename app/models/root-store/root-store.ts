import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ProductStore, ProductStoreModel } from "../product-store/product-store"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  productStore: types.optional(ProductStoreModel, {} as ProductStore)
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
