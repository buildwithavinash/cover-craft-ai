import { useState } from "react";
import { generateContent } from "../utils/api";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const InputForm = () => {
  const initialForm = {
    jd: "",
    skills: "",
    experience: "",
    tone: "formal",
    output: "cover",
  };

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // form validation check
  const isFormValid =
    form.jd.trim() && form.skills.trim() && form.experience.trim();

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    if (loading) return;

    const skillsArray = form.skills
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill !== "");

    const processedData = {
      ...form,
      skills: skillsArray,
    };

    getResponse(processedData);
  };

  // fetch data
  const getResponse = async (processedData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await generateContent(processedData);

      const newItem = {
        id: crypto.randomUUID(),
        text: response,
        createdAt: new Date().toISOString(),
      };

      const prev = JSON.parse(localStorage.getItem("results")) || [];
      const updated = [newItem, ...prev].slice(0, 10);
      localStorage.setItem("results", JSON.stringify(updated));

      navigate("/result", {
        state: {
          result: response,
          resultId: newItem.id,
          processedData,
        },
      });

      setForm(initialForm);
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl px-4 mx-auto relative pb-8">
      {/* Tagline Section */}
      <div className="text-center pt-8 mb-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
          Land your dream job with a personalized cover letter
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
          Let AI craft a professional, tailored introduction for you in seconds.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="p-4 flex flex-col gap-4 md:w-[60%] mx-auto relative pb-20"
      >
        <textarea
          name="jd"
          value={form.jd}
          onChange={handleChange}
          placeholder="Enter Job Description"
          className="h-40 p-2 w-full border border-slate-300 focus:border-emerald-400 placeholder:text-slate-700 rounded resize-none outline-none transition-all duration-200  text-slate-900 dark:placeholder:text-slate-400 dark:text-slate-200 dark:bg-slate-900 dark:border-slate-600"
        />
        <input
          type="text"
          name="skills"
          value={form.skills}
          onChange={handleChange}
          placeholder="Enter Skills (comma separated)"
          className="w-full p-2 border border-slate-300 focus:border-emerald-400 rounded outline-none placeholder:text-slate-700 transition-all duration-200 dark:placeholder:text-slate-400 text-slate-900 dark:text-slate-200 dark:bg-slate-900 dark:border-slate-600"
        />
        <textarea
          name="experience"
          value={form.experience}
          onChange={handleChange}
          placeholder="Enter Experience"
          className="h-20 p-2 w-full border border-slate-300 placeholder:text-slate-700 focus:border-emerald-400 rounded resize-none outline-none transition-all duration-200 dark:placeholder:text-slate-400 text-slate-900 dark:text-slate-200 dark:bg-slate-900 dark:border-slate-600"
        />

        <div className="flex items-center gap-2">
          <label
            htmlFor="tone"
            className="font-medium dark:text-slate-200 text-slate-900"
          >
            Tone:{" "}
          </label>
          <select
            name="tone"
            value={form.tone}
            onChange={handleChange}
            className="w-full border outline-none border-slate-300 focus:border-emerald-400 p-1 rounded-md dark:text-slate-200 dark:bg-slate-900"
          >
            <option value="formal">Formal</option>
            <option value="friendly">Friendly</option>
            <option value="startup">Startup</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label
            htmlFor="output"
            className="font-medium dark:text-slate-200 text-slate-900"
          >
            Output:{" "}
          </label>
          <select
            name="output"
            value={form.output}
            onChange={handleChange}
            className="w-full border outline-none border-slate-300 focus:border-emerald-400 p-1 rounded-md text-slate-900 dark:text-slate-200 dark:bg-slate-900"
          >
            <option value="cover">Cover Letter</option>
            <option value="email">Cold Email</option>
            <option value="both">Both</option>
          </select>
        </div>

        {!isFormValid && (
          <span className="border flex justify-center gap-1 items-baseline text-xs border-yellow-300 rounded-md p-1 bg-yellow-100 text-yellow-700">
            <i className="ri-error-warning-line"></i> Fill all the fields
          </span>
        )}

        <div className="flex justify-center items-center">
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className="border border-slate-400 px-4 py-2 rounded-xl bg-emerald-400 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed font-medium text-slate-200 w-50"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>

        {loading && (
          <div className="flex rounded-xl flex-col justify-center items-center absolute backdrop-blur-sm inset-0 bg-slate-200 z-50">
            <Loader />
          </div>
        )}

        {error && (
          <div className="flex rounded-xl flex-col justify-center items-center absolute backdrop-blur-sm inset-0 bg-slate-200 z-50">
            <p className="text-center text-red-500 mt-2">{error}</p>
            <button
              type="submit"
              disabled={!isFormValid || loading}
              className="border border-slate-400 px-4 py-2 rounded-xl bg-emerald-400 cursor-pointer font-medium text-slate-200 mt-4 hover:bg-emerald-600 transition-all duration-200"
            >
              Try Again
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setError(null)
                navigate("/form");
              }}
              className="border border-slate-400 px-4 py-2 rounded-xl bg-emerald-400 cursor-pointer font-medium text-slate-200 mt-4 hover:bg-emerald-600 transition-all duration-200"
            >
              Back to Form
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default InputForm;
