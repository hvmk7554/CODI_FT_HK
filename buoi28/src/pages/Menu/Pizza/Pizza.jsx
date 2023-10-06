import MenuLayout from "../MenuLayout/MenuLayout"

function Pizza() {
    const favorFood = [
        {
            id: 1,          
            img: "https://img.dominos.vn/Pizza+Seoul+vien+khoai+lang+-+TIENG+ANH.jpg",
            name: "PIZZA SEOUL BÒ XÀO BULGOGI VIÊN KHOAI LANG PHÔ MAI - SEOUL BEEF BULGOGI CHEESY SWEET POTATO CRUSI", 
            price: 35,
            size: 'Medium'
        },

        {id: 2,
        img: "https://img.dominos.vn/Pizza+Seoul+ko+vien+-+TIENG+ANH.jpg",
        name:  "PIZZA SEOUL BÒ XO BULGOGI",
        price: 35,
        size: 'Medium'
        },
        
        {id: 3,
            img: "https://img.dominos.vn/cach-lam-pizza-tom-bo-kieu-my-1.jpg",
            name:  "PIZZA HAWAI TOM XO ",
            price: 45,
            size: 'Medium'
            },
        ]

        const foodList = [
            {
            id:1,
            img: "https://img.dominos.vn/Surf-turf-Pizza-Bo-Tom-Nuong-Kieu-My-1.jpg",
            name : "PIZZA BÒ & TÔM NƯỚNG KIỂU MỸ - SURF & TURF",
            price: 35,
            size: 'Medium'
            },
            {
            id:2,
            ing: 'https://img.dominos.vn/Pizza-Hai-San-Xot-Mayonnaise-Ocean-Mania.jpg',
            name : "PIZZA HẢI SẢN XỐT MAYONNAISE - OCEAN MANIA",
            price: 35,
            size: "Medium"
            },
            {
            id :3,
            img: 'https://img.dominos.vn/Pizzaminsea-Hai-San-Nhiet-Doi-Xot-Tieu.jpg',
            name : "PIZZA HẢI SẢN NHIỆT ĐỚI XÉT TIÊU - PIZZAMIN SEA",
            price: 35,
            size: 'Medium'
            },
            {
            id:4,
            img: "https://img.dominos.vn/Sausage-Kid-Mania-1.jpg", 
            name : "PIZZA XÚC XÍCH XỐT PHÔ MAI - SAUSAGE KID MANIA",
            price: 35,
            size: "Medium"
            }
        ]

return (
        <div>
            <MenuLayout name="FLAVORS OF THE WORLD"  data={favorFood} />
            <MenuLayout name="S TOPPING"  data={foodList} />
</div>
)
}

export default Pizza