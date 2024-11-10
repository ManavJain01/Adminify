// Importing React Packages
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Importing Custom Hooks
import { useProduct } from "../../../../hooks/useProduct";

// Importing Local Files
import LockForNoAuthentication from "../../components/LockForNoAuthentication"

export default function CreateProduct() {
  // useNavigate
  const navigate = useNavigate();

  // useSelector
  const user = useSelector(state => state.user.data);
  const privilege = user.privilege;

  // Custom Hooks
  const { CreateProduct } = useProduct();

  // useState
  const [product, setProduct] = useState({});

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await CreateProduct(product);
  
    if(res === "success") navigate("/admin/products");
  };

  return (
    <div className="relative bg-blue-950 flex flex-col gap-8 h-full w-full px-8 py-5 rounded-xl shadow-xl">
      {privilege === "user" && <LockForNoAuthentication />}
      
      <div className="flex gap-10 justify-between items-center">
        <h1 className="font-bold text-3xl tracking-widest">Create Product</h1>

        <Link to="/admin/products" className="font-semibold text-center bg-gray-600 hover:bg-gray-700 active:bg-gray-800 px-5 py-2 rounded-lg">Go Back</Link>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <section className="flex flex-col">
          <label htmlFor="createProduct-name" className="">Product Name</label>
          <input type="text" id="createProduct-name" value={product?.name || ""} onChange={(e) => setProduct(restData => {return {...restData, name: e.target.value}})} placeholder="Enter Product Name" className="text-black px-5 py-1 rounded-lg outline-none" />
        </section>

        <section className="flex flex-col">
          <label htmlFor="createProduct-img" className="">Enter Product Url</label>
          <input type="text" id="createProduct-img" placeholder="Enter Product Url" value={product?.img || ""} onChange={(e) => setProduct(restData => {return {...restData, img: e.target.value}})} className="text-black px-5 py-1 rounded-lg outline-none" />
        </section>

        <section className="flex flex-col">
          <label htmlFor="createProduct-price" className="">Enter Product Price</label>
          <input type="number" id="createProduct-price" placeholder="Enter Product Price" value={product?.price || ""} onChange={(e) => setProduct(restData => {return {...restData, price: e.target.value}})} className="text-black px-5 py-1 rounded-lg outline-none" />
        </section>

        <button className="font-semibold bg-green-600 hover:bg-green-700 active:bg-green-800 px-5 py-2 rounded-lg">Create Product</button>
      </form>
    </div>
  )
}