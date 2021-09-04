import { DataObjectModel } from "./data-object"

test("can be created", () => {
  const instance = DataObjectModel.create({})

  expect(instance).toBeTruthy()
})
