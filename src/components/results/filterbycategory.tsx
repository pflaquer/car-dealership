import { FC, useState, useEffect } from 'react'; 

interface car {
  id: number;
  name: string;
  price: number;
  category: string;
}

const cars: car[] = [
  { id: 1, name: 'Tesla Model Y', price: 1000, category: 'suv' },
  { id: 2, name: 'Lamborghini Urus', price: 500, category: 'suv' },
  { id: 3, name: 'Toyota 4 Door', price: 20, category: 'sedan' },
  { id: 4, name: 'Honda 4 Door', price: 50, category: 'sedan' },
  { id: 5, name: 'Nissan 350Z Drop Top', price: 15, category: 'convertible' },
];

const FilterByCategory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<car[]>([]);

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
      <button value="" onClick={handleCategoryChange}>All</button>
      <button value="suv" onClick={handleCategoryChange}>SUV </button>
      <button value="sedan" onClick={handleCategoryChange}>Sedan </button>
      <button value="convertible" onClick={handleCategoryChange}>Convertible </button>
      
      
      <ul>
        {filteredProducts.map((car) => (
          <button><li key={car.id}>
            {car.name} - ${car.price}
          </li></button>
        ))}
      </ul>
    </div>
  );
};

export default FilterByCategory;


//export const App: FC<{ name: string }> = ({ name }) => {
  //return (
    //<div>
     // <FilterByProductCategory />
    //</div>
 // );
//};
