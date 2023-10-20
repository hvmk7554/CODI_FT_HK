//a
import { useEffect,useState } from "react";

function Carousel() {
  const [curr, setCurr] = useState(0)
  const nextImg = () => setCurr((curr) => curr === slider.length -1 ? 0 : curr + 1 )
  const prevImg = () => setCurr((curr) => curr === 0 ? slider.length -1 : curr - 1 )
    

  const slider = [
    {
      id: 1,
      img: 'https://media.istockphoto.com/id/1314356933/vi/vec-to/th%E1%BB%B1c-t%E1%BA%BF-chi-ti%E1%BA%BFt-3d-hot-fresh-pizza-ads-banner-concept-poster-card-vector.jpg?s=1024x1024&w=is&k=20&c=2E-uStFKuCOQ0ajJZ03M_cxjCSliqopnPVcUeDa89Ak='
    },
    {
      id: 2,
      img: 'https://img.dominos.vn/Menu+BG+1.jpg'
    },
    {
      id: 3,
      img: 'https://images8.alphacoders.com/369/369063.jpg'
    }
  ]

  useEffect(() => { 
    const interval = setInterval(()=> {nextImg()}, 5000);
    return () => clearInterval(interval) 
  },[])

  return (
    <div className="flex justify-center bg-gray-100 m-auto relative">
      <button onClick= {prevImg}> Previous </button>
      <div
  className = "relative xl:w-[75%] w-[98%] block h-56 bg-cover rounded-lg md:h-96 transition duration-500 ease-in-out mt-20" 
  style = {{
backgroundImage: `url(${ slider[curr].img })`,
  }}
  />

  <button onClick={nextImg}>Next</button>
  </div>
  )
}

  export default Carousel;