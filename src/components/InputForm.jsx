import { useState } from "react"


const initialForm = {
        jd: "",
        skills: "",
        experience: "",
        tone: "formal",
        output: "cover",
    }


const InputForm = () => {

    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
    const {name, value} = e.target;
     
    setForm((prev)=>({
        ...prev, [name]:value
    }));
}

// form validation check
const isFormValid = form.jd.trim() && form.skills.trim() && form.experience.trim()
    

// handle submit
const handleSubmit = (e) => {
    e.preventDefault();
    if(!isFormValid) return;

    
    const skillsArray = form.skills.split(",").map((skill) => skill.trim()).filter((skill)=>skill !== "");
console.log(skillsArray);

    const processedData = {
        ...form, skills: skillsArray
    }

}



  return (
    <div className="">
        <form onSubmit={handleSubmit}>
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
            
            <button type="submit" disabled={!isFormValid} className="border border-slate-400 px-4 py-2 rounded-xl bg-sky-500 cursor-pointer disabled:bg-sky-700">Generate</button>
            <pre>{JSON.stringify(form, null, 2)}</pre>
        </form>
    </div>
  )
}

export default InputForm