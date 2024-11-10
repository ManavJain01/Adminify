// Importing React Packages
import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Importing Custom Hooks
import { useProduct } from "../../../../hooks/useProduct";

// Importing Local Files
import LockForNoAuthentication from "../../components/LockForNoAuthentication"

export default function UpdateProduct() {
  // useNavigate
  const navigate = useNavigate();

  // useLocation
  const location = useLocation();
  
  const { companyId = "", product : productThroughLink = {} } = location.state || {};

  // useSelector
  const user = useSelector(state => state.user.data);
  const privilege = user.privilege;
  
  // Custom Hooks
  const { UpdateProduct } = useProduct();

  // useState
  const [product, setProduct] = useState(productThroughLink);  

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {product: product, companyId: companyId};
    const res = await UpdateProduct(data);
  
    if(res === "success") navigate("/admin/products");
  };

  return (
    <div className="relative bg-blue-950 flex flex-col h-full w-full px-8 py-5 rounded-xl shadow-xl">
      {privilege === "user" && <LockForNoAuthentication />}

      <div>
        <h1 className="font-bold text-3xl tracking-widest">UpdateProduct</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <section className="flex flex-col">
          <label htmlFor="updateProduct-name" className="">Product Name</label>
          <input type="text" id="updateProduct-name" value={product?.name || ""} onChange={(e) => setProduct(restData => {return {...restData, name: e.target.value}})} placeholder="Enter Product Name" className="text-black px-5 py-1 rounded-lg outline-none" />
        </section>

        <section className="flex flex-col">
          <label htmlFor="updateProduct-img" className="">Enter Product Url</label>
          <input type="text" id="updateProduct-img" placeholder="Enter Product Url" value={product?.img || ""} onChange={(e) => setProduct(restData => {return {...restData, img: e.target.value}})} className="text-black px-5 py-1 rounded-lg outline-none" />
        </section>

        <section className="flex flex-col">
          <label htmlFor="updateProduct-price" className="">Enter Product Price</label>
          <input type="number" id="updateProduct-price" placeholder="Enter Product Price" value={product?.price || ""} onChange={(e) => setProduct(restData => {return {...restData, price: e.target.value}})} className="text-black px-5 py-1 rounded-lg outline-none" />
        </section>

        <section className="flex items-center gap-5">
          <Link to="/admin/products" className="flex-1 font-semibold text-center bg-gray-600 hover:bg-gray-700 active:bg-gray-800 px-5 py-2 rounded-lg">Go Back</Link>
          <button className="flex-1 font-semibold bg-green-600 hover:bg-green-700 active:bg-green-800 px-5 py-2 rounded-lg">Update Product</button>
        </section>
      </form>
    </div>
  )
}