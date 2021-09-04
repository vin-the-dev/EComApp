import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { getGeneralApiProblem } from "./api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import * as Types from "./api.types"
import { ProductSnapshot } from "../../models/product/product"

const convertProduct = (raw: any): ProductSnapshot => {
  // const id = uuid.v4()

  return {
    id: raw.id,
    name: raw.name,
    description: raw.description,
    imageUrl: raw.imageUrl,
  }
}

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  /**
   * Gets a list of users.
   */
  async getUsers(): Promise<Types.GetUsersResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(`/users`)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    const convertUser = (raw) => {
      return {
        id: raw.id,
        name: raw.name,
      }
    }

    // transform the data into the format we are expecting
    try {
      const rawUsers = response.data
      const resultUsers: Types.User[] = rawUsers.map(convertUser)
      return { kind: "ok", users: resultUsers }
    } catch {
      return { kind: "bad-data" }
    }
  }

  /**
   * Gets a single user by ID
   */

  async getUser(id: string): Promise<Types.GetUserResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(`/users/${id}`)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const resultUser: Types.User = {
        id: response.data.id,
        name: response.data.name,
      }
      return { kind: "ok", user: resultUser }
    } catch {
      return { kind: "bad-data" }
    }
  }

  /**
   * Gets a list of Products.
   */
  async getProducts(): Promise<Types.GetProductsResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get("",)

    const results = [{
      id: 1,
      name: "Product 1",
      description: "This is a product",
      imageUrl: "https://tinyurl.com/y4f5e96j",
    },
    {
      id: 1,
      name: "Product 1",
      description: "This is a product",
      imageUrl: "https://tinyurl.com/y2szwrys",
    },
    {
      id: 1,
      name: "Product 1",
      description: "This is a product",
      imageUrl: "https://tinyurl.com/y4bfj5b7",
    },
    {
      id: 1,
      name: "Product 1",
      description: "This is a product",
      imageUrl: "https://tinyurl.com/y44marw5",
    },
    {
      id: 1,
      name: "Product 1",
      description: "Minimum Discount 50%",
      imageUrl: "https://tinyurl.com/y4urobx8",
    },
    {
      id: 1,
      name: "Product 1",
      description: "This is a product",
      imageUrl: "https://tinyurl.com/y2yhf95n",
    },
    {
      id: 1,
      name: "Product 1",
      description: "This is a product",
      imageUrl: "https://tinyurl.com/y5n467o3",
    },
    {
      id: 1,
      name: "Product 1",
      description: "This is a product",
      imageUrl: "https://tinyurl.com/yxupqdll",
    },
    ]

    console.tron.log(results)
    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const rawProducts = results
      const convertedProducts: ProductSnapshot[] = rawProducts.map(convertProduct)
      return { kind: "ok", products: convertedProducts }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
