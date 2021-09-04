import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import { withEnvironment } from ".."
import { GetProductsResult } from "../../services/api/api.types"
import { Product, ProductModel, ProductSnapshot } from "../product/product"

/**
 * Model description here for TypeScript hints.
 */
export const ProductStoreModel = types
  .model("ProductStore")
  .props({
    products: types.optional(types.array(ProductModel), []),
  })
  .extend(withEnvironment)
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    saveProducts: (productSnapshots: ProductSnapshot[]) => {
      const ProductModels: Product[] = productSnapshots.map(c => ProductModel.create(c)) // create model instances from the plain objects
      self.products.replace(ProductModels) // Replace the existing data with the new data
    },
  }))
  .actions(self => ({
    getProducts: flow(function * () {
      const result: GetProductsResult = yield self.environment.api.getProducts()
      if (result.kind === "ok") {
        self.saveProducts(result.products)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    }),
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type ProductStoreType = Instance<typeof ProductStoreModel>
export interface ProductStore extends ProductStoreType {}
type ProductStoreSnapshotType = SnapshotOut<typeof ProductStoreModel>
export interface ProductStoreSnapshot extends ProductStoreSnapshotType {}
