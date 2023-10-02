import { createQueryKeys } from "@lukemorales/query-key-factory";
import API from "./api";
import { useQuery } from "@tanstack/react-query";
import { filterProduct } from "./type";

export const keys=createQueryKeys("product",{
    getProducts:(params:filterProduct)=>({
        queryFn:()=>API.getAllProducts(params),
        queryKey:[params]
    }),
    getProduct:(id:number)=>({
        queryFn:()=>API.getProduct(id),
        queryKey:[id]
    })
})
export const queries={
    useProducts:(params:filterProduct)=>useQuery(keys.getProducts(params)),
    useProduct:(id:number)=>useQuery(keys.getProduct(id))
}