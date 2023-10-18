import Carousel from "../components/Carousel";
import Pagelayout from "../components/Pagelayout";
import MenuLayout from "./Menu/MenuLayout/MenuLayout";
//json-server --watch src/db.json --port 4000
// https://assets.bonappetit.com/photos/5ca534485e96521ff23b382b/1:1/w_1600,c_limit/chocolate-chip-cookie.jpg

function HomePage() {
  const foodList = [
    {
      id: 1,
      img: "https://img.dominos.vn/Pizza+Seoul+vien+khoai+lang+-+TIENG+ANH.jpg",
      name: "SEOUL BEEF BULGOGI CHEESY SWEET POTATO CRUST",
      price: 8,
      size: "Medium",
      category: "favor",
      description : "Mozzarella Cheese, Bulgogi Sauce, Bulgogi Beef, Korean Vermicelli, Carrot, Mushroom, Green Bell Pepper, White Sesame, Sweet Potato Cheese Crust"
    },
    {
      id: 3,
      img: "https://img.dominos.vn/Menu+BG+1.jpg",
      name: "NEW YORK CHEESESTEAK",
      price: 9,
      size: "Medium",
      category: "favor",
      description : "Beefsteak, Demi-Glace Sauce (Steak Sauce), Sour Cream Sauce, Mozzarella Cheese, Mushrooms, Tomatoes, Onions, Seaweed Powder"
    },
    {
      id: 10,
      img: "https://img.dominos.vn/Menu+BG+-+TIENG+ANH_cheese.jpg",
      name: "CHEESY MADNESS",
      price: 7,
      size: "Medium",
      category: "traditional",
      description : "Cheddar Cheese, Mozzarella Cheese, Blue Cheese Balls, Cheese Rim, Cheese Sauce and Served With Honey."
    },
    {
      id: 6,
      img: "https://img.dominos.vn/Pizzaminsea-Hai-San-Nhiet-Doi-Xot-Tieu.jpg",
      name: "PIZZAMIN SEA",
      price: 8,
      size: "Medium",
      category: "seafood",
      description : "Black pepper sauce, Mozzarella Cheese, Cheddar Cheese, Pineapple, Onion, Shrimp, Squid"
    },

]

  return (
    <Pagelayout>
      <Carousel />
      <MenuLayout name='New Product' data={foodList}/>
    </Pagelayout>
  );
}

export default HomePage;
