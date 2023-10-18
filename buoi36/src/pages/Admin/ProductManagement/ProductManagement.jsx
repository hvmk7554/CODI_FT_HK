
import PageLayoutAdmin from "../Dashboard/PageLayoutAdmin/PageLayoutAdmin"
import ProductTable from "./ProductTable"



function ProductManagement() {
  return (
    <PageLayoutAdmin>
      <div className="px-5">
    <p className="font-bold text-2xl">Product Management</p>
    <ProductTable/>
    </div>
    </PageLayoutAdmin>
  )
}

export default ProductManagement