import React, { useEffect, useState, useContext } from 'react'
import Card from '../Card/Card';
import { startCase } from 'lodash'
import { FiltersContext } from '../../context/FiltersContext';
import { DataContext } from '../../context/DataContext';

const Cards = () => {
  const globalData = useContext(DataContext)
  const products = globalData.products

  const [productsRender, setProductsRender] = useState(products)

  const { filters } = useContext(FiltersContext)
  const { minPrice, maxPrice, searched, catSelected, orderBy, sortBy } = filters


  useEffect(() => {
    const productsFiltered = products.filter((product) => {
      const priceInRange = product.price >= minPrice && product.price <= maxPrice;
      const matchesCategory = catSelected === 'all' || catSelected === product.category;
      const matchesSearch = searched === '' || product.name.includes(searched);
      return priceInRange && matchesCategory && matchesSearch;
    });

    const ordered = productsFiltered.sort((a, b) => {
      if (sortBy === 'price') {
        if (orderBy === 'from_lower') {
          return (a.price - b.price) 
        }
        else return (b.price - a.price)
      }
      else if (sortBy === 'rating')
        if (orderBy === 'from_lower') {
          return (a.rating - b.rating)
        }
        else return (b.rating - a.rating)
    })

    setProductsRender(ordered)

  }, [minPrice, maxPrice, catSelected, searched, products, sortBy, orderBy]);

  return (
    <div className='grid gap-6 mx-10 mt-32 md:mt-40 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 justify-center ' >
      {productsRender.map(product => (
        <Card
          key={product.id}
          id={product.id}
          title={startCase(product.name ? product.name : product.title)}
          description={product.description}
          price={product.price}
          image={product.img}
          category={product.category}
          rating={product.rating}
        />
      ))
      }
    </div>
  );
};

export default Cards;