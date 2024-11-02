// Importing React Icons
import { CiImport } from "react-icons/ci";
import { SiTicktick } from "react-icons/si";

// Importing React Packages
import { useState } from "react";

export default function CompanyDetails({save = 1, setSave}) {
  // useState
  const [companyDetails, setCompanyDetails] = useState({});

  if(save === 2) return (
    <div className="flex flex-col gap-5 p-5 border border-gray-500 rounded-lg">
        <p className="font-semibold text-xl">Company Details</p>
        
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
          className="peer bg-black w-full px-5 py-2 border rounded-full outline-none"
        />
        <label
          htmlFor="companyName"
          className={`absolute top-2 left-5 peer-focus:-top-4 peer-focus:left-4 peer-focus:backdrop-blur-sm peer-focus:rounded-full ${
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
          className="peer bg-black w-full px-5 py-2 border rounded-full outline-none"
        />
        <label
          htmlFor="ownerName"
          className={`absolute top-2 left-5 peer-focus:-top-4 peer-focus:left-4 peer-focus:backdrop-blur-sm peer-focus:rounded-full ${
            companyDetails?.owner &&
            "peer-valid:-top-4 peer-valid:left-4 peer-valid:backdrop-blur-sm peer-valid:rounded-full"
          } duration-700 cursor-pointer`}
        >
          Owner Name
        </label>
      </section>

      <section className="relative">
        <input
          type="file"
          name="logo"
          id="logo"
          // onChange={handlePreview}
          className="hidden"
        />
        <label
          htmlFor="logo"
          className="flex gap-5 items-center justify-center px-8 py-2 border rounded-md cursor-pointer"
        >
          <span>Import Your Logo</span>
          <CiImport className="size-8" />
        </label>

        {companyDetails.logo && (
          // <img src={URL.createObjectURL(companyDetails.logo)} className="w-[100px] h-[100px] mx-auto mt-[10px] rounded-full" />
          <div></div>
        )}
      </section>

      <button onClick={() => setSave(false)} className="font-bold text-black bg-white py-2">Save</button>
    </div>
  )
  else return (
    <div className={`font-bold ${!companyDetails.company && !companyDetails.owner && "text-gray-500"} flex flex-col p-5 border border-gray-500 rounded-lg`}>
      <p className="font-semibold text-xl flex gap-5 justify-between">
        <span>Company Details</span>
        {companyDetails.company && companyDetails.owner && <SiTicktick className="text-green-400" />}
      </p>

      {companyDetails?.company && companyDetails?.owner
        && <div className="text-sm">
          <p className="flex justify-between gap-10">
            <span>Company name</span>
            <button className="underline" onClick={() => setSave(2)}>Edit</button>
          </p>
          <p>Owner Name</p>
        </div>
      }
    </div>
  )
}