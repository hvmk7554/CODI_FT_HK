
import MenuLayout from "../MenuLayout/MenuLayout"

function Drinks() {
    const drinkList = [
       {
        id : 1,
       img: "https://img.dominos.vn/coke-390.jpg",
       name: "Chai Coca-Cola 390ml",
       price: 1,
        size: 'Medium'
       },
       {
        id : 2,
        img: "https://img.dominos.vn/fanta-390.jpg",
        name: "Chai Fanta 398ml",
        price: 1,
        size: 'Medium'
       },
       {
       id: 3,
        img: "https://img.dominos.vn/Sprite-390.jpg", 
        name: "Chai Sprite 390ml",
        price: 1,
        size: 'Medium'
       }
    ]

    return (
        <div>
            <MenuLayout name = "GIẢI KHÁT" data={drinkList}/>
        </div>
    )
}
export default Drinks