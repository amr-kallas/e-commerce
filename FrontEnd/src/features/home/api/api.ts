import API_ROUTES from '../../../constants/apiRoutes'
import axios from '../../../lib/axios'
import { filterProduct } from './type'

const API = {
  getAllProducts: async (params: filterProduct) => {
    const { data } = await axios.get(API_ROUTES.PRODUCT.getAll, { params: params })
    return data.data
  },
  getProduct: async (id: number) => {
    const { data } = await axios.get(API_ROUTES.PRODUCT.GET(id),{params:{
        populate:'*'
    }})
    return data.data
  },
}
export default API
