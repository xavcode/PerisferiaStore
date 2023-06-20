import React, { useContext } from "react";
import { startCase } from "lodash";
import { FiltersContext } from "../../context/FiltersContext.jsx";

const Filters = () => {
  const { filters, setFilters, categories } = useContext(FiltersContext);
  const minPrice = filters.minPrice;
  const maxPrice = filters.maxPrice;

  //get data from FilterContext, for render it in cards jsx. at the while.

  //------------------------Handlers---------------------------//

  const handleChangePrice = (evt) => {
    const value = parseInt(evt.target.value);
    const valueId = evt.target.id;
    if (valueId === "minPrice") setFilters({ ...filters, minPrice: value });
    else if (valueId === "maxPrice")
      setFilters({ ...filters, maxPrice: value });
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
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 h-36 w-full fixed top-0 z-20">
      <div className="relative flex top-16 w-full gap-36 font-bold accent-text_filters_bar text-text_filters_bar justify-evenly bg-bg_filters_bar rounded-lg px-10 z-10 border-2 border-gray-900"
      // style={{ backgroundColor: "#F9F8F1" }}
      style={{ backgroundColor: "#161F2D" }}
      >
        <div
          className="flex w-full justify-around"
          // style={{ backgroundColor: "#F9F8F1" }}
          style={{ backgroundColor: "#161F2D" }}
        >
          <div className="flex flex-col justify-center">
            <div className="flex justify-between">
              <label
                className="bg-inputs px-4 py-2 rounded-md"
                htmlFor="valueMinPrice"
                // style={{ backgroundColor: "#F9F8F1" }}
                style={{ backgroundColor: "#161F2D", color:"#F9F8F1" }}
              >
                $ARS
              </label>
              <input
                id="valueMinPrice"
                className="bg-inputs text-center w-24 px-4 py-2 rounded-md"
                // style={{ backgroundColor: "#F9F8F1" }}
                style={{ backgroundColor: "#161F2D" }}
                type="number"
                max={1000000}
                onChange={handleInputText}
                value={minPrice}
              />
            </div>
            <span style={{color: "#F9F8F1" }}>
              Desde
              <input
                className="bg-inputs mx-3 h-2 w-full transition-all duration-300"
                type="range"
                id="minPrice"
                min={0}
                max={1000000}
                onChange={handleChangePrice}
                value={minPrice}
              />
            </span>
          </div>

          <div
            className="flex flex-col justify-center"
          >
            <div
              className="flex justify-between"
            >
              <label
                className="bg-inputs px-4 py-2 rounded-md"
                // style={{ backgroundColor: "#F9F8F1" }}
                style={{ backgroundColor: "#161F2D", color:"#F9F8F1" }}
                htmlFor="valueMaxPrice"
              >
                $ARS
              </label>
              <input
                id="valueMaxPrice"
                className="bg-inputs accent-red-600 text-center w-24 px-4 py-2 rounded-md"
                // style={{ backgroundColor: "#F9F8F1" }}
                style={{ backgroundColor: "#161F2D", color:"#F9F8F1" }}
                type="number"
                max={1000000}
                onChange={handleInputText}
                value={maxPrice}
              />
            </div>
            <span style={{color: "#F9F8F1" }}>
              Hasta
              <input
                className="bg-inputs mx-3 h-2 w-full transition-all duration-300"
                type="range"
                id="maxPrice"
                min={0}
                max={1000000}
                onChange={handleChangePrice}
                value={maxPrice}
              />
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <label htmlFor="category" className="text-text_filters_bar"
            style={{color: "#F9F8F1" }}
            >
              CATEGORIA
            </label>
            <select
              className="bg-inputs text-md text-center w-40"
              name="category"
              id="category"
              defaultValue="all"
              onChange={handleSelectCat}
              // style={{ backgroundColor: "#F9F8F1" }}
              style={{ backgroundColor: "#161F2D", color:"#F9F8F1" }}
            >
              <option  value="all">Todos</option>
              {categories.map((category) => {
                return (
                  <option key={category} value={category}>
                    {startCase(category)}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex flex-col items-center justify-around m-2">
            <span className="text-text_filters_bar" style={{color: "#F9F8F1" }}>Ordenar por</span>
            <div className="flex flex-col items-center justify-center">
              <select
                className="bg-inputs w-40"
                name="order"
                id="order"
                onChange={handleSelectSort}
                // style={{ backgroundColor: "#F9F8F1" }}
                style={{ backgroundColor: "#161F2D", color:"#F9F8F1" }}
              >
                <option value="price">Precio</option>
                <option value="rating">Rating</option>
              </select>
              <select
                className="bg-inputs w-40"
                name="sort"
                id="sort"
                onChange={handleSelectOrder}
                // style={{ backgroundColor: "#F9F8F1" }}
                style={{ backgroundColor: "#161F2D", color:"#F9F8F1" }}
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
