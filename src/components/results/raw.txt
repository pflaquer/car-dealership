import { FC, useState, useEffect } from 'react'; 

import React from "react";

interface car {
  id: number;
  name: string;
  price: number;
  category: string;
}

const cars: car[] = [
  { id: 1, name: 'Tesla Model Y', price: 2200, category: 'suv' },
  { id: 2, name: 'Lamborghini Urus', price: 500, category: 'suv' },
  { id: 3, name: 'Toyota 4 Door', price: 450, category: 'sedan' },
  { id: 4, name: 'Honda 4 Door', price: 750, category: 'sedan' },
  { id: 5, name: 'Nissan 350Z Drop Top', price: 1400, category: 'convertible' },
  { id: 6, name: 'Ferrari F360', price: 4500, category: 'convertible' },
];


const FilterByProductCategory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<car[]>([]);
  const [selectedRange, setSelectedRange] = useState<any>([0,10000000]);

  const handleRange = (event: any) => {
    setSelectedRange(event.target.value);
    
  };

  useEffect(() => {
    if (selectedRange == 0) {
      setFilteredProducts(cars);
    } else {
      const filteredProducts = cars.filter((car) => car.price < selectedRange);
      setFilteredProducts(filteredProducts);
    }
  }, [selectedRange, cars]);

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    if (selectedCategory === '') {
      setFilteredProducts(cars);
    } else {
      const filteredProducts = cars.filter((car) => car.category === selectedCategory);
      setFilteredProducts(filteredProducts);
    }
  }, [selectedCategory, cars]);

  return (
    <div>
      <input type ="range" min={selectedRange[0]} max={5000} step="5" onChange={handleRange}></input>
      <button value="" onClick={handleCategoryChange}>All</button>
      <button value="suv" onClick={handleCategoryChange}>SUV </button>
      <button value="sedan" onClick={handleCategoryChange}>Sedan </button>
      <button value="convertible" onClick={handleCategoryChange}>Convertible </button>
      
      
      
      <ul>
        {filteredProducts.map((car) => (
          
         <li key={car.id}>
            {car.name} - ${car.price}
          </li>
          
        ))}
      </ul>
    </div>
  );
};

function Main(){
  return(
    <Filter />
  )
}
function Filter(){
  return (
    <>
    <FilterByProductCategory />
    
</>
  )
}
export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <Main />
      
    </div>
  );
};
