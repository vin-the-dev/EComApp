import { GeneralApiProblem } from "./api-problem"
import { ProductSnapshot } from "../../models/product/product"

export interface User {
  id: number
  name: string
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem

export type GetProductsResult = { kind: "ok"; products: ProductSnapshot[] } | GeneralApiProblem
