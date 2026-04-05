import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const [copied, setCopied] = useState(false)
  const navigate = useNavigate();
  const { id } = useParams();

  const data = JSON.parse(localStorage.getItem("results")) || [];
  const item = data.find((d) => d.id === id);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(item.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy Failed", err);
    }
  };

  if (!item)
    return (
      <p className="text-center mt-16 text-slate-500">Item not found!</p>
    );

  return (
    <div className="max-w-6xl p-4 mx-auto">
      <div className="flex justify-end mt-2 dark:border-slate-600">
        <button
          onClick={() => navigate("/history")}
          className="bg-slate-300 rounded-md px-3 py-1 border border-slate-300 cursor-pointer hover:bg-slate-400 transition-all duration-200"
        >
          <i className="ri-arrow-left-fill"></i> Back
        </button>
      </div>
      <div className="border border-slate-300 rounded-md p-4 md:w-[60%] mx-auto mt-4">
        <div className="flex justify-end gap-2 items-center">
          {/* Copy */}

          {copied && (
              <span className=" text-xs -top-8 right-0 border border-sky-400 bg-sky-100 text-sky-400 px-2 py-1 rounded-full whitespace-nowrap">
                Copied!
              </span>
            )}

            <button
              onClick={handleCopy}
              title="Copy"
              className="cursor-pointer hover:bg-slate-300 rounded-md px-2 py-0.5 transition-all duration-200 text-xl"
            >
              <i className="ri-file-copy-line"></i>
            </button>
        </div>
        <p className="whitespace-pre-line dark:text-slate-200">{item.text}</p>
      </div>
    </div>
  );
};

export default Detail;