import React, { useEffect, useState, useContext } from 'react'
import axios from "axios";
import Card from '../Card/Card';

import { FiltersContext } from '../../context/FiltersContext';

const Cards = () => {
  const [products, setProducts] = useState([]);
  const { filters } = useContext(FiltersContext)
  const minPrice = filters.minPrice
  const maxPrice = filters.maxPrice
  const searched = filters.searched

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    }
    fetchData()
  }, []);

  //function for search an item
  const productSearched = products.includes(product => product.title === searched)

  //function for filter  with the range selector or input   
  const productsFiltered = products.filter((product) => product.price >= minPrice && product.price <= maxPrice)

  return (
    <div className='grid mx-8 mt-44 md:mt-24 grid-cols-1  sm:grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4 '>
      {productsFiltered.map(product => (
        <Card

          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          category={product.category}
          rating={product.rating}
        />
      ))
      }
    </div>
  )
}
export default Cards
