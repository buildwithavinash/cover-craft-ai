import { useEffect, useState } from "react"
import { generateContent } from "../utils/api";


const initialForm = {
        jd: "",
        skills: "",
        experience: "",
        tone: "formal",
        output: "cover",
    }


const InputForm = () => {

    const [form, setForm] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState("");
    const count = Number(localStorage.getItem("count")) || 0;
    const [dots, setDots] = useState("");
    const [copied, setCopied] = useState(false);

    useEffect(()=>{
        if(!loading) return;

        const interval = setInterval(()=>{
            setDots((prev)=> prev.length >= 3 ? "" : prev + ". ")
        }, 400)

        return ()=> clearInterval(interval)
    }, [loading])

    const handleChange = (e) => {
    const {name, value} = e.target;
     
    setForm((prev)=>({
        ...prev, [name]:value
    }));
}

// form validation check
const isFormValid = form.jd.trim() && form.skills.trim() && form.experience.trim()
    

// handle submit
const handleSubmit = async (e) => {
    e.preventDefault();
    setForm(initialForm)
    if(!isFormValid) return;
    if(loading) return

    if(count >= 3){
        setError("Limit Reached. Try later.")
        return
    }


    const skillsArray = form.skills.split(",").map((skill) => skill.trim()).filter((skill)=>skill !== "");
console.log(skillsArray);

    const processedData = {
        ...form, skills: skillsArray
    }

    try {
        setLoading(true);
        setError(null);

        const response = await generateContent(processedData);
        setResult(response)
        localStorage.setItem("count", count + 1)
    }catch(error){
        console.error(error)
        setError("Soemthing went wrong. Try again.")
    }finally {
        setLoading(false)
    }

}

const handleCopy = async () => {
    try {
        await navigator.clipboard.writeText(result);
        setCopied(true);

        setTimeout(() => {
            setCopied(false)
        }, 1500);
    }catch(err){
        console.error("Copy Failed", err)
    }
}


  return (
    <div className="">
        <form onSubmit={handleSubmit} autoComplete="off">
            <textarea name="jd" value={form.jd} onChange={handleChange} placeholder="Enter Job Description" />
            <input type="text" name="skills" value={form.skills} onChange={handleChange} placeholder="Enter Skills" />
            <textarea name="experience" value={form.experience} onChange={handleChange} placeholder="Enter Experience" />

            <div>
            <label htmlFor="tone">Tone: </label>
            <select name="tone" value={form.tone} onChange={handleChange}>
                <option value="formal">Formal</option>
                <option value="friendly">Friendly</option>
                <option value="startup">Startup</option>
            </select>
            </div>
            
            <div>
            <label htmlFor="output">Output: </label>
            <select name="output" value={form.output} onChange={handleChange}>
                <option value="cover">Cover Letter</option>
                <option value="email">Cold Email</option>
                <option value="both">Both</option>
            </select>
            </div>

            {!isFormValid && (
              <div>
                <p>Fill all the fields</p>
            </div>  
            )}
            
            <button type="submit" disabled={!isFormValid || loading} className="border border-slate-400 px-4 py-2 rounded-xl bg-sky-500 cursor-pointer disabled:bg-sky-700">{loading ? "Generating" : "Generate"}</button>
            <p>Generations Left: {3-count}</p>
        </form>

        {loading && (
        <p>Crafting your Letter{dots}</p>
    )}

    {error && (
        <p>{error}</p>
    )}

    {result && (
        <div className="border border-slate-300 rounded-xl shadow-md bg-white p-5">
            <div className="flex justify-between text-xl items-center">
                <h2>Generated Output</h2>

                {copied && (
                    <span>Copied!</span>
                )}
                <button onClick={handleCopy} className="cursor-pointer hover:bg-slate-300  rounded-md px-2 py-0.5 transition-all duration-200"><i class="ri-file-copy-line"></i></button>

            </div>

            <p className="whitespace-pre-line mt-4">
            {result}
            </p>
        </div>
    )}
    </div>

    
  )
}

export default InputForm