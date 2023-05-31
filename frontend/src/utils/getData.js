
import axios from 'axios'
const fetchdata = async () => {
  try {
    const getData = await axios.get('http://localhost:3001/store/categories')
    const response = getData.data
    console.log(response)
    return response
    
  } catch (error) {
    throw new Error(error)
  }

  fetchdata()

}