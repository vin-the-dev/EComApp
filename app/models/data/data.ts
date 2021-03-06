import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const DataModel = types
  .model("Data")
  .props({
    id: types.maybe(types.number),
    name: types.maybe(types.string),
    description: types.maybe(types.string),
    imageUrl: types.maybe(types.string),
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type DataType = Instance<typeof DataModel>
export interface Data extends DataType {}
type DataSnapshotType = SnapshotOut<typeof DataModel>
export interface DataSnapshot extends DataSnapshotType {}
