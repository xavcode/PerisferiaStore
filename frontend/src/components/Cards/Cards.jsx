import React, { useEffect, useState, useContext } from 'react'
import Card from '../Card/Card';
import { startCase } from 'lodash'
import { FiltersContext } from '../../context/FiltersContext';
import { DataContext } from '../../context/DataContext';


const Cards = () => {

  const [productsRender, setProductsRender] = useState([])

  const globalData = useContext(DataContext)
  const products = globalData.products

  const { filters } = useContext(FiltersContext)
  const minPrice = filters.minPrice
  const maxPrice = filters.maxPrice
  const searched = filters.searched
  const category = filters.catSelected

//function to search items with the searchBar, and filter the results with the range selector. 
  const productsToRender = products.filter((product) => {
    const priceInRange = product.price >= minPrice && product.price <= maxPrice;
    const matchesCategory = category === 'all' || category === product.category;
    const matchesSearch = searched === '' || product.title.includes(searched);

    return priceInRange && matchesCategory && matchesSearch;
  });

  useEffect(() => {
    setProductsRender(productsToRender);
  }, [minPrice, maxPrice, category, searched]);

  return (
    <div className='grid gap-6 mx-10 mt-32 md:mt-40 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 justify-center ' >
      {productsToRender.map(product => (
        <Card
          key={product.id}
          id={product.id}
          title={startCase(product.title)}
          description={product.description}
          price={product.price}
          image={product.img}
          category={product.category}
          rating={product.rating}
        />
      ))
      }
    </div>
  )
}
export default Cards
