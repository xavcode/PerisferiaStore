import React, { useEffect, useState, useContext } from 'react'
import axios from "axios";
import Card from '../Card/Card';
import { startCase } from 'lodash'
import { FiltersContext } from '../../context/FiltersContext';


import { FiltersContext } from '../../context/FiltersContext';

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [productsRender, setProductsRender] = useState([])


  const { filters } = useContext(FiltersContext)
  const minPrice = filters.minPrice
  const maxPrice = filters.maxPrice
  const searched = filters.searched
  const category = filters.catSelected

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    }
    fetchData()
  }, []);
  //function for search an item

  const productsSearched = products.filter((product) => product.title.includes(searched));

  const productsFiltered = products.filter((product) => product.price >= minPrice && product.price <= maxPrice && (
    category === 'all' || category === product.category
  ));

  const productsToRender = searched !== '' ? productsSearched : productsFiltered;

  useEffect(() => {
    setProductsRender(productsToRender);
  }, [minPrice, maxPrice, category, searched]);

  return (
    <div className='grid justify-center mx-8 mt-44 md:mt-24 grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4' >
      {productsToRender.map(product => (
        <Card
          key={product.id}
          id={product.id}
          title={startCase(product.title)}
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
