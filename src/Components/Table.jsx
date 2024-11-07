import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Table() {
  const [datas, setData] = useState([]); 
  const navigate = useNavigate();

  function apicall() {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => res.data.products)
      .then((products) => setData(products))
      .catch((error) => {
        console.error("Error fetching data:", error);
        navigate("/errorpage");
      });
  }

  useEffect(() => {
    apicall();
  }, []);

  return (
    <section className="bg-blue-400 p-6"> 
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="text-xl italic bg-gray-300">
            <th className="py-2 px-4 text-center font-semibold">Id</th>
            <th className="py-2 px-4 text-center font-semibold">Title</th>
            <th className="py-2 px-4 text-center font-semibold">Category</th>
            <th className="py-2 px-4 text-center font-semibold">Price</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((e) => (
            <tr key={e.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-4 border border-slate-700">{e.id}</td>
              <td className="py-3 px-4 border border-slate-700">{e.title}</td>
              <td className="py-3 px-4 border border-slate-700">{e.category}</td>
              <td className="py-3 px-4 border border-slate-700">{e.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>

  );
}
