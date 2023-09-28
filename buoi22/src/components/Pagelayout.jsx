


import Footer from "./Footer"
import Header from "./Header"



// eslint-disable-next-line react/prop-types
function Pagelayout({children})
{
  return (
    <div>
<Header/>
{children}
<Footer/>

</div>
  )
}

export default Pagelayout