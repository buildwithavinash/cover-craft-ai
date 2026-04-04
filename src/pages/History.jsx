import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const History = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("results")) || [];
    setData(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = data.filter((item) => item.id !== id);
    setData(updated);
    localStorage.setItem("results", JSON.stringify(updated));
  };

  return (
    <div className="max-w-6xl p-4 mx-auto">
      <div>
        <h2 className="text-center text-2xl font-medium">Your History</h2>


{data.length === 0 ? (
    <p className="text-center my-8">No saved results yet.</p>
) : (
    <>
        <div className="flex justify-end mt-6">
          <button
            onClick={() => {
              localStorage.removeItem("results");
              setData([]);
            }}
            className="bg-slate-300 rounded-md px-3 py-1 border border-slate-300 cursor-pointer hover:bg-slate-400 transition-all duration-200"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {data.map((d) => (
            <div
              key={d.id}
              onClick={() => navigate(`/detail/${d.id}`)}
              className="relative border border-slate-300 p-2 rounded-md hover:cursor-pointer"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(d.id);
                }}
                className="absolute top-1 right-2 cursor-pointer hover:bg-red-100 hover:text-red-500 hover:boder hover:border-s-red-500 px-2 py-0.5 rounded-md transition-all duration-200"
              >
                <i class="ri-delete-bin-6-line"></i>
              </button>
              <span className="line-clamp-2 text-xs w-fit px-2 py-0.5 rounded-md text-slate-700 bg-slate-100">
                {new Date(d.createdAt).toLocaleString()}
              </span>

              <p className="line-clamp-3 leading-tight mt-2">{d.text}</p>
            </div>
          ))}
        </div>
    </>
)}
        
      </div>
    </div>
  );
};

export default History;
