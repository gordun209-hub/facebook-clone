import axios from 'axios'
import { useQuery } from 'react-query'

// const QueryExample = () => {
//   const { isLoading, error, data, isFetching } = useQuery('repoData', () =>
//     axios.get('http://localhost:5000/api/links').then(res => res.data)
//   )

//   if (isLoading) return <p>Loading...</p>
//   if (error) return <p>Error :(</p>
//   if (isFetching) return <p>Fetching...</p>
//   return <div></div>
// }

export default QueryExample
