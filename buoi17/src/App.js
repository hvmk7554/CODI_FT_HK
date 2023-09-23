
import './App.css'
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Card from './components/Card';
function App() {
  const listItem = [
  {
  img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone-14-storage-select-202209-6-1inch-y889.jpg",
  name: "Iphone 14",
  price: 35000000,
  },

  {
    img:"https://images.samsung.com/is/image/samsung/p6pim/vn/2302/gallery/vn-galaxy-s23-s911-sm-s911bzgcxxv-534848032?$650_519_PNG$",
    name: "Samsun S23",
    price: 32000000,
    },

    {
      img:"https://cdn.tgdd.vn/Products/Images/42/236768/oppo-a54-4g-black-600x600.jpg",
      name: "Oppo A54",
      price: 30000000,
      }, 
  ];

  return (
    <div>
      <Navbar/>
      <Carousel/>
      <div className='card-container'> 
      <div className='item'>
      {listItem.map((item,index)=>(
      <Card key={index} item={item} />
    ))}
      </div>
      </div>
      </div>
  );
}

export default App;
