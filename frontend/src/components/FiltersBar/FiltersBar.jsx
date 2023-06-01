import React, { useContext } from "react";
import { startCase } from "lodash";
import { FiltersContext } from "../../context/FiltersContext.jsx";

const Filters = () => {
  const { filters, setFilters, categories } =
    useContext(FiltersContext);
  const minPrice = filters.minPrice;
  const maxPrice = filters.maxPrice;

  //get data from FilterContext, for render it in cards jsx. at the while.

  //------------------------Handlers---------------------------//

  const handleChangePrice = (evt) => {
    const value = parseInt(evt.target.value);
    const valueId = evt.target.id; 
    if (valueId === "minPrice") setFilters({ ...filters, minPrice: value });
    else if (valueId === "maxPrice") setFilters({ ...filters, maxPrice: value });
  };
  
  const handleInputText = (evt) => {
    const value = parseInt(evt.target.value);
    const valueId = evt.target.id;
    if (valueId === "valueMinPrice") {
      setFilters({ ...filters, minPrice: value });
    } else if (valueId === "valueMaxPrice") {
      setFilters({ ...filters, maxPrice: value });
    }
  };

  const handleSelectCat = (evt) => {
    const category = evt.target.value;
    setFilters({ ...filters, catSelected: category });
  };

  const handleSelectSort = (evt) => {
    const sortBy = evt.target.value;
    setFilters({ ...filters, sortBy: sortBy });
  };

  const handleSelectOrder = (evt) => {
    const orderBy = evt.target.value;
    setFilters({ ...filters, orderBy: orderBy });
  };
  

  return (
    <div className="bg-black h-36 w-full fixed top-0 z-20">
      <div className="relative flex top-16 w-full gap-36 font-bold accent-text_filters_bar text-text_filters_bar justify-evenly bg-bg_filters_bar rounded-lg px-10 z-10 border-2 border-gray-400">
        <div className="flex w-full justify-around ">
          <div className="flex flex-col justify-center">
            <div className="flex justify-between">
              <label className="bg-inputs" htmlFor="valueMinPrice">
                {" "}
                $ARS
              </label>
              <input
                id="valueMinPrice"
                className="bg-inputs text-center"
                type="number"
                max={1000000}
                onChange={handleInputText}
                value={minPrice}
              />
            </div>
            <span>
              Desde
              <input
                className="bg-inputs mx-3"
                type="range"
                id="minPrice"
                min={0}
<<<<<<< HEAD
                max={10000000}
=======
                max={1000000}
>>>>>>> b87d5f313bb3daffd04493fd1c7d0c02323fee6a
                onChange={handleChangePrice}
                value={minPrice}
              />
            </span>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex justify-between">
              <label className="bg-inputs" htmlFor="valueMaxPrice">
                {" "}
                $ARS
              </label>
              <input
                id="valueMaxPrice"
                className=" bg-inputs accent-red-600 text-center"
                type="number"
<<<<<<< HEAD
                max={10000000}
=======
                max={1000000}
>>>>>>> b87d5f313bb3daffd04493fd1c7d0c02323fee6a
                onChange={handleInputText}
                value={maxPrice}
              />
            </div>
            <span>
              Hasta
              <input
                className="bg-inputs mx-3"
                type="range"
                id="maxPrice"
                min={0}
<<<<<<< HEAD
                max={10000000}
=======
                max={1000000}
>>>>>>> b87d5f313bb3daffd04493fd1c7d0c02323fee6a
                onChange={handleChangePrice}
                value={maxPrice}
              />
            </span>
          </div>

          <div className="flex flex-col items-center justify-center ">
            <label htmlFor="category">CATEGORIA</label>
            <select
              className="bg-inputs text-md text-center "
              name="category"
              id="category"
              defaultValue="all"
              onChange={handleSelectCat}
            >
              <option value="all">Todos</option>
              {categories.map((category) => {
                return (
                  <option key={category} value={category}>
                    {" "}
                    {startCase(category)}
                  </option>
                );
              })}
            </select>
          </div>

          {/* group checkbox*/}
          <div className="flex flex-col items-center justify-around m-2">
            {/* individual checkbox*/}
            <span>Ordenar por</span>
            <div className="flex flex-col items-center justify-center">
              <select
                className="bg-inputs"
                name="order"
                id="order"
                onChange={handleSelectSort}
              >
                <option value="price">Precio</option>
                <option value="rating">Rating</option>
              </select>
              <select
                className="bg-inputs"
                name="sort"
                id="sort"
                onChange={handleSelectOrder}
              >
                <option value="from_lower">De Menor a Mayor</option>
                <option value="from_greater">De Mayor a Menor</option>
              </select>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
