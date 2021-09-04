import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const DataObjectModel = types
  .model("DataObject")
  .props({
    id: types.optional(types.number, 0),
    name: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    imageUrl: types.optional(types.string, ""),
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type DataObjectType = Instance<typeof DataObjectModel>
export interface DataObject extends DataObjectType {}
type DataObjectSnapshotType = SnapshotOut<typeof DataObjectModel>
export interface DataObjectSnapshot extends DataObjectSnapshotType {}
