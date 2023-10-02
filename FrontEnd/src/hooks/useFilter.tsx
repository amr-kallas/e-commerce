import { useSearchParams } from 'react-router-dom'

const UseFilter = (key:string):string|null => {
  const [searchParams] = useSearchParams()
  return searchParams.get(key)
}

export default UseFilter
