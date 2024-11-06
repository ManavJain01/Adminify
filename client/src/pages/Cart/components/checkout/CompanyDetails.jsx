// Importing React Icons
import { CiImport } from "react-icons/ci";
import { SiTicktick } from "react-icons/si";

// Importing React Packages
import { useState, useEffect } from "react";
import axios from "axios"

// Importing Redux Packages
import { useDispatch, useSelector } from "react-redux";
import { setCompanyDetails as setCompanyDetailsDispatch } from "../../../../Redux/features/CompanySlice";

export default function CompanyDetails({save = 1, setSave}) {
  // useSelector
  const reduxData = useSelector(state => state.company.companyDetails);

  // useDispatch
  const dispatch = useDispatch();
  
  // useState
  const [companyDetails, setCompanyDetails] = useState({});

  // useEffect
  useEffect(() => {
    setCompanyDetails(reduxData);
  }, [reduxData]);

  // Functions
  const handlePreview = async (event) => {
    try {
      const file = event.target.files[0];
      if (file) {
        // You can store the file in state or set a preview URL
        setCompanyDetails((prevState) => ({
          ...prevState,
          logo: file,
        }));
      }
      
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(setCompanyDetailsDispatch(companyDetails));
    
    setSave(false);
  };

  if(save === 2) return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-5 border border-gray-500 rounded-lg">
      <p className="font-semibold text-xl">Company Details</p>

      {/* {companyDetails.logo
        ? <div className="flex items-end justify-center gap-5 flex-wrap">
          {typeof companyDetails.logo === "string"
            ? <img src={companyDetails.logo} className="w-[100px] h-[100px] mx-auto mt-[10px] rounded-full" />
            : <img src={URL.createObjectURL(companyDetails.logo)} className="w-[100px] h-[100px] mx-auto mt-[10px] rounded-full" />
          }
          <button onClick={() => setCompanyDetails((prevState) => ({...prevState, logo: null}))} className="bg-red-600 hover:bg-red-700 active:bg-red-800 px-5 py-2 rounded-xl duration-500">Remove</button>
        </div>
        : <section className="relative">
          <input
            type="file"
            name="logo"
            id="logo"
            onChange={handlePreview}
            className="hidden"
          />
          <label
            htmlFor="logo"
            className="flex gap-5 items-center justify-center px-8 py-2 border rounded-md cursor-pointer"
          >
            <span>Import Your Logo</span>
            <CiImport className="size-8" />
          </label>
        </section>
      } */}

      <section className="relative">
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={companyDetails.company || ""}
          onChange={(e) =>
            setCompanyDetails((prevInput) => {
              return { ...prevInput, company: e.target?.value };
            })
          }
          className="peer bg-black w-full px-5 py-3 border outline-none"
        />
        <label
          htmlFor="companyName"
          className={`absolute top-3 left-5 peer-focus:-top-4 peer-focus:left-4 peer-focus:backdrop-blur-sm peer-focus:rounded-full ${
            companyDetails?.company &&
            "peer-valid:-top-4 peer-valid:left-4 peer-valid:backdrop-blur-sm peer-valid:rounded-full"
          } duration-700 cursor-pointer`}
        >
          Company Name
        </label>
      </section>

      <section className="relative">
        <input
          type="text"
          name="ownerName"
          id="ownerName"
          value={companyDetails.owner || ""}
          onChange={(e) =>
            setCompanyDetails((prevInput) => {
              return { ...prevInput, owner: e.target?.value };
            })
          }
          className="peer bg-black w-full px-5 py-3 border outline-none"
        />
        <label
          htmlFor="ownerName"
          className={`absolute top-3 left-5 peer-focus:-top-4 peer-focus:left-4 peer-focus:backdrop-blur-sm peer-focus:rounded-full ${
            companyDetails?.owner &&
            "peer-valid:-top-4 peer-valid:left-4 peer-valid:backdrop-blur-sm peer-valid:rounded-full"
          } duration-700 cursor-pointer`}
        >
          Owner Name
        </label>
      </section>

      <button className="font-bold text-black bg-white py-2">Save</button>
    </form>
  )
  else return (
    <div className={`font-bold ${!companyDetails.company && !companyDetails.owner && "text-gray-500"} flex flex-col gap-3 p-5 border border-gray-500 rounded-lg`}>
      <p className="font-semibold text-xl flex gap-5 justify-between">
        <span>Company Details</span>
        {companyDetails.company && companyDetails.owner && <SiTicktick className="text-green-400" />}
      </p>

      {companyDetails?.company && companyDetails?.owner
        && <div className="text-sm">
          <p className="flex justify-between gap-10">
            <span>{companyDetails?.company || "Company name"}</span>
            <button className="underline" onClick={() => setSave(2)}>Edit</button>
          </p>
          <p>{companyDetails?.owner || "Owner Name"}</p>
        </div>
      }
    </div>
  )
}