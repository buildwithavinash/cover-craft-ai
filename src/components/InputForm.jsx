import { useEffect, useState } from "react";
import { generateContent } from "../utils/api";

const initialForm = {
  jd: "",
  skills: "",
  experience: "",
  tone: "formal",
  output: "cover",
};

const InputForm = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState("");
  const count = Number(localStorage.getItem("count")) || 0;
  const [dots, setDots] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + ". "));
    }, 400);

    return () => clearInterval(interval);
  }, [loading]);

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
    setForm(initialForm);
    if (!isFormValid) return;
    if (loading) return;

    if (count >= 3) {
      setError("Limit Reached. Try later.");
      return;
    }

    const skillsArray = form.skills
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill !== "");
    console.log(skillsArray);

    const processedData = {
      ...form,
      skills: skillsArray,
    };

    try {
      setLoading(true);
      setError(null);

      const response = await generateContent(processedData);
      setResult(response);
      localStorage.setItem("count", count + 1);
    } catch (error) {
      console.error(error);
      setError("Soemthing went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error("Copy Failed", err);
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="border border-slate-300 p-4 flex flex-col gap-4"
      >
        <textarea
          name="jd"
          value={form.jd}
          onChange={handleChange}
          placeholder="Enter Job Description"
          className="h-40 p-2 w-full border border-slate-300 focus:border-sky-400 rounded resize-none outline-none transition-all duration-200"
        />
        <input
          type="text"
          name="skills"
          value={form.skills}
          onChange={handleChange}
          placeholder="Enter Skills"
          className="w-full p-2 border border-slate-300 focus:border-sky-400 rounded outline-none transition-all duration-200"
        />
        <textarea
          name="experience"
          value={form.experience}
          onChange={handleChange}
          placeholder="Enter Experience"
          className="h-20 p-2 w-full border border-slate-300 focus:border-sky-400 rounded resize-none outline-none transition-all duration-200"
        />

        <div className="flex items-center gap-2">
          <label htmlFor="tone" className="font-medium">
            Tone:{" "}
          </label>
          <select
            name="tone"
            value={form.tone}
            onChange={handleChange}
            className="w-full border outline-none border-slate-300 focus:border-sky-400 p-1 rounded-md"
          >
            <option value="formal">Formal</option>
            <option value="friendly">Friendly</option>
            <option value="startup">Startup</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="output" className="font-medium">
            Output:{" "}
          </label>
          <select name="output" value={form.output} onChange={handleChange} className="w-full border outline-none border-slate-300 focus:border-sky-400 p-1 rounded-md">
            <option value="cover">Cover Letter</option>
            <option value="email">Cold Email</option>
            <option value="both">Both</option>
          </select>
        </div>

        {!isFormValid && (
          
            <span className="border flex justify-center gap-1 items-baseline text-xs border-yellow-300 rounded-md p-1 bg-yellow-100 text-yellow-700"><i class="ri-error-warning-line"></i> Fill all the fields</span>
         
        )}

        <div className="flex justify-between items-center">
            <p className="font-medium">Generations Left: {3 - count}</p>
            <button
          type="submit"
          disabled={!isFormValid || loading}
          className="border border-slate-400 px-4 py-2 rounded-xl bg-sky-400 cursor-pointer disabled:bg-sky-600 font-medium text-slate-200"
        >
          {loading ? "Generating" : "Generate"}
        </button>
        </div>
        
      </form>

      {loading && <p>Crafting your Letter{dots}</p>}

      {error && <p>{error}</p>}

      {result && (
        <div className="border border-slate-300 rounded-xl shadow-md bg-white p-5">
          <div className="flex justify-between text-xl items-center">
            <h2>Generated Output</h2>

            {copied && <span>Copied!</span>}
            <button
              onClick={handleCopy}
              className="cursor-pointer hover:bg-slate-300  rounded-md px-2 py-0.5 transition-all duration-200"
            >
              <i class="ri-file-copy-line"></i>
            </button>
          </div>

          <p className="whitespace-pre-line mt-4">{result}</p>
        </div>
      )}
    </div>
  );
};

export default InputForm;
