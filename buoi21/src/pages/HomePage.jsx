import Carousel from "../components/Carousel"; 
import HomeProduct from "../components/HomeProduct";
import Pagelayout from "../components/Pagelayout";

function HomePage() {
return (
  <div>
<Pagelayout>
<Carousel />
<HomeProduct/>
</Pagelayout>
</div>
);
}

export default HomePage;