
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { generateContent } from "../utils/api";


const Result = () => {
  const { state } = useLocation();
  const [displayedResult, setDisplayedResult] = useState(state?.result || "");
  const [editedText, setEditedText] = useState("");
  const [lastProcessedData, setLastProcessedData] = useState(state?.processedData || null);
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if (!displayedResult) {
    return <p>No result found.</p>;
  }

  
  const getResponse = async (processedData) => {
    try {
      // Optionally, show a loading state here
      const response = await generateContent(processedData);
      setDisplayedResult(response);
      setEditedText("");
      setLastProcessedData(processedData);
    } catch (error) {
      // Optionally, show an error state here
      console.error("Regenerate failed", error);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayedResult);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error("Copy Failed", err);
    }
  };

  return (
    <div className="max-w-6xl p-4 mx-auto">
        
        <div className="border border-slate-300 rounded-xl shadow-md bg-white p-4">
          <div className="flex justify-between text-xl items-center">
            <h2 className="text-base font-medium">Generated Output</h2>


            <div className="relative flex gap-1 text-base">
            {copied && <span className="absolute text-xs top-1 right-1 border border-sky-400 bg-sky-100 text-sky-400 px-2 py-1 rounded-full">Copied!</span>}
            <button
              onClick={handleCopy}
              className="cursor-pointer hover:bg-slate-300  rounded-md px-2 py-0.5 transition-all duration-200"
            >
              <i className="ri-file-copy-line"></i>
            </button>

            <button
              onClick={() => {
                if (isEditing) {
                  setDisplayedResult(editedText); // Save
                } else {
                  setEditedText(displayedResult); // Enter edit mode, prefill
                }
                setIsEditing((prev) => !prev);
              }}
              className="cursor-pointer hover:bg-slate-300  rounded-md px-2 py-0.5 transition-all duration-200"
            >
              {isEditing ? (
                <i className="ri-save-fill"></i>
              ) : (
                <i className="ri-edit-fill"></i>
              )}
            </button>

            <button
              onClick={() => {
                if (lastProcessedData) {
                  getResponse(lastProcessedData);
                }
              }}
              disabled={!lastProcessedData}
              className="cursor-pointer hover:bg-slate-300  rounded-md px-2 py-0.5 transition-all duration-200"
            >
              <i className="ri-restart-line"></i>
            </button>
            </div>
          </div>

          {isEditing ? (
            <textarea
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="h-200 w-full resize-none mt-4"
            ></textarea>
          ) : (
            <p className="whitespace-pre-line mt-4">{displayedResult}</p>
          )}
        </div>
      
    </div>
  )
}

export default Result