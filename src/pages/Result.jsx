import { useState } from "react";
import { useLocation } from "react-router-dom";
import { generateContent } from "../utils/api";
import Loader from "../components/Loader";

const Result = () => {
  const { state } = useLocation();
  const [displayedResult, setDisplayedResult] = useState(state?.result || "");
  const [editedText, setEditedText] = useState("");
  const [lastProcessedData, setLastProcessedData] = useState(
    state?.processedData || null
  );
  const [resultId] = useState(state?.resultId || null);
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [regenLoading, setRegenLoading] = useState(false);
  const [regenError, setRegenError] = useState(null);

  if (!displayedResult) {
    return (
      <p className="text-center mt-16 text-slate-500">No result found.</p>
    );
  }

  // Helper: update the text in localStorage by resultId
  const updateInStorage = (id, newText) => {
    if (!id) return;
    const prev = JSON.parse(localStorage.getItem("results")) || [];
    const updated = prev.map((item) =>
      item.id === id ? { ...item, text: newText } : item
    );
    localStorage.setItem("results", JSON.stringify(updated));
  };

  const getResponse = async (processedData) => {
    try {
      setRegenLoading(true);
      setRegenError(null);

      const response = await generateContent(processedData);
      setDisplayedResult(response);
      setEditedText("");
      setLastProcessedData(processedData);

      // Save regenerated result back to localStorage
      updateInStorage(resultId, response);
    } catch (error) {
      console.error("Regenerate failed", error);
      setRegenError("Regeneration failed. Please try again.");
    } finally {
      setRegenLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayedResult);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy Failed", err);
    }
  };

  const handleEditSave = () => {
    if (isEditing) {
      // Save edited text to state and localStorage
      setDisplayedResult(editedText);
      updateInStorage(resultId, editedText);
    } else {
      setEditedText(displayedResult);
    }
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="max-w-6xl p-4 mx-auto md:w-[60%]">
      <div className="border border-slate-300 rounded-xl shadow-md bg-white p-4">
        <div className="flex justify-between text-xl items-center border-b pb-2 border-slate-200">
          <h2 className="text-base font-medium">Generated Output</h2>

          <div className="relative flex gap-1 text-base">
            {copied && (
              <span className="absolute text-xs -top-8 right-0 border border-sky-400 bg-sky-100 text-sky-400 px-2 py-1 rounded-full whitespace-nowrap">
                Copied!
              </span>
            )}

            {/* Copy */}
            <button
              onClick={handleCopy}
              title="Copy"
              className="cursor-pointer hover:bg-slate-300 rounded-md px-2 py-0.5 transition-all duration-200"
            >
              <i className="ri-file-copy-line"></i>
            </button>

            {/* Edit / Save */}
            <button
              onClick={handleEditSave}
              title={isEditing ? "Save" : "Edit"}
              className="cursor-pointer hover:bg-slate-300 rounded-md px-2 py-0.5 transition-all duration-200"
            >
              {isEditing ? (
                <i className="ri-save-fill"></i>
              ) : (
                <i className="ri-edit-line"></i>
              )}
            </button>

            {/* Regenerate */}
            <button
              onClick={() => {
                if (lastProcessedData) getResponse(lastProcessedData);
              }}
              disabled={!lastProcessedData || regenLoading}
              title="Regenerate"
              className="cursor-pointer hover:bg-slate-300 rounded-md px-2 py-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {regenLoading ? (
                <i className="ri-loader-4-line animate-spin"></i>
              ) : (
                <i className="ri-restart-line"></i>
              )}
            </button>
          </div>
        </div>

        {regenError && (
          <p className="text-red-500 text-sm mt-2">{regenError}</p>
        )}

        {regenLoading ? (
          <div className="flex justify-center items-center mt-8 mb-4">
            <Loader />
          </div>
        ) : isEditing ? (
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="h-96 w-full resize-none mt-4 border border-slate-300 rounded p-2 outline-none focus:border-emerald-400 transition-all duration-200"
          />
        ) : (
          <p className="whitespace-pre-line mt-4">{displayedResult}</p>
        )}
      </div>
    </div>
  );
};

export default Result;