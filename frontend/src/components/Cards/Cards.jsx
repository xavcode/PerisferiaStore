import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { FiltersContext } from '../../context/FiltersContext';

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [productsRender, setProductsRender] = useState([]);

  const { filters } = useContext(FiltersContext);
  const minPrice = filters.minPrice;
  const maxPrice = filters.maxPrice;
  const searched = filters.searched;
  const category = filters.catSelected;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/store');
      setProducts(response.data);
    }
    fetchData();
  }, []);

  const productsSearched = products.filter((product) => product.title.includes(searched));

  const productsFiltered = products.filter((product) => product.price >= minPrice && product.price <= maxPrice && (
    category === 'all' || category === product.category
  ));

  const productsToRender = searched !== '' ? productsSearched : productsFiltered;

  useEffect(() => {
    setProductsRender(productsToRender);
  }, [minPrice, maxPrice, category, searched]);

  return (
    <div className='grid mx-8 mt-44 md:mt-24 grid-cols-1  sm:grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4'>
      {productsRender.map((product) => (
        <Link key={product.id} className='flex' to={`/store/${product.id}`}>
          <Card
            key={product.id}
            id={product.id}
            title={product.name}
            description={product.description}
            price={product.price}
            image={product.img}
            category={product.category}
            rating={product.rating}
          />
        </Link>
      ))}
    </div>
  );
};

export default Cards;