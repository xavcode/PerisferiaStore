
import axios from 'axios'
const fetchdata = async () => {
  try {
    const getData = await axios.get('https://perisferiastore-production-9f09.up.railway.app/store/categories')
    const response = getData.data
    console.log(response)
    return response
    
  } catch (error) {
    throw new Error(error)
  }

  fetchdata()

}