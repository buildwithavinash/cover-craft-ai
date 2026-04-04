import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const data = JSON.parse(localStorage.getItem("results")) || [];
  const item = data.find((d) => d.id === id);

  if (!item)
    return (
      <p className="text-center mt-16 text-slate-500">Item not found!</p>
    );

  return (
    <div className="max-w-6xl p-4 mx-auto">
      <div className="flex justify-end mt-2">
        <button
          onClick={() => navigate("/history")}
          className="bg-slate-300 rounded-md px-3 py-1 border border-slate-300 cursor-pointer hover:bg-slate-400 transition-all duration-200"
        >
          <i className="ri-arrow-left-fill"></i> Back
        </button>
      </div>
      <div className="border border-slate-300 rounded-md p-4 md:w-[60%] mx-auto mt-4">
        <p className="whitespace-pre-line">{item.text}</p>
      </div>
    </div>
  );
};

export default Detail;