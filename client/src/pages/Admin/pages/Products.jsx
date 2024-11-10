// Importing React Icons
import { FaPlus } from "react-icons/fa";

// Importing React Packages
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Importing Custom Hooks
import { useProduct } from "../../../hooks/useProduct";

// Importing Local Files
import LockForNoAuthentication from "../components/LockForNoAuthentication"

export default function Products() {
  // Custom Hooks
  const { AllProducts, DeleteProduct } = useProduct();

  // useSelector
  const user = useSelector(state => state.user.data);
  const privilege = user.privilege;
  
  // useState
  const [companyId, setCompanyId] = useState("");
  const [products, setProducts] = useState([]);
  
  // useEffect
  useEffect(() => {
    const handleRefresh = async () => {
      const data = await AllProducts();
      setProducts(data?.products || []);
      setCompanyId(data?.companyId);
    };

    handleRefresh();
  }, []);

  // Functions
  const handleDelete = async (product) => {
    const res = await DeleteProduct(product._id, companyId);

    if(res === "success") setProducts((prevProducts) => prevProducts.filter(p => p._id !== product._id));
  }

  return (
    <div className="bg-blue-950 flex flex-col gap-5 h-full w-full px-8 py-5 rounded-xl shadow-xl">
      <div className="flex items-center gap-10 justify-between">
        <h1 className="font-bold text-3xl tracking-widest">Products</h1>

        {privilege === "admin" && <Link to="/admin/create-product" className="bg-green-700 hover:bg-green-800 active:bg-green-900 flex items-center gap-3 px-5 py-1 rounded-lg">
          <FaPlus className="size-5" />
          <span>Add New Item</span>
        </Link>}
      </div>

      <table>
        <thead>
          <tr>
            <th className="px-4 py-2 w-1/4 text-left text-white">Image</th>
            <th className="px-4 py-2 w-2/4 text-left text-white">Product Name</th>
            <th className="px-4 py-2 w-1/4 text-left text-white">Price</th>
            {privilege === "admin" && <th className="px-4 py-2 w-1/4 text-left text-white">Update/Delete</th>}
          </tr>
        </thead>
        <tbody>{products?.map((product, i) => {
          return(
            <tr key={i} className="hover:bg-sky-500">
              <td className="px-4 py-2 text-left text-white"><img src={product.img} alt="product_img" className="w-[100px] h-16 rounded-lg" /></td>
              <td className="px-4 py-2 text-left text-white">{product.name}</td>
              <td className="px-4 py-2 text-left text-white">₹ {product.price}</td>
              {privilege === "admin" && <td className="flex items-center pt-6 gap-3 px-4 text-left text-white">
                <Link to="/admin/update-product"  state={{ companyId: companyId, product: product }} className="bg-green-600 px-5 py-1 rounded-lg">Update</Link>
                <button onClick={() => handleDelete(product)} className="bg-red-600 px-5 py-1 rounded-lg">Delete</button>
              </td>}
            </tr>
          )
      })}</tbody>
      </table>
    </div>
  );
}
