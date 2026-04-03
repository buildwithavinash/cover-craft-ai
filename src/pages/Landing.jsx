import { useNavigate } from "react-router-dom"


const Landing = () => {
    const navigate = useNavigate();

  return (
    <div className="max-w-6xl p-4 mx-auto">

    <div className="flex flex-col h-[80vh] gap-4 justify-center items-center">
        <h1 className="text-3xl text-center">
            AI Cover Letter Generator
        </h1>

        <p className="text-slate-700 text-center">
            Generate personalized cover letters in seconds
        </p>

        <button onClick={()=>navigate("/form")} className="bg-sky-400 text-slate-100 px-4 py-1 border border-slate-300 self-center rounded-xl font-medium cursor-pointer">
            Try Demo
        </button>
    </div>
    </div>
  )
}

export default Landing