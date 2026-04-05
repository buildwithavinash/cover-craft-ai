import { useNavigate } from "react-router-dom"

const FloatingBar = () => {
    const navigate = useNavigate();
  return (

    <div className="fixed bottom-4 bg-emerald-50 rounded-xl px-3 py-2 text-2xl flex justify-center items-center gap-2 left-0 right-0 w-fit mx-auto shadow-2xl border border-slate-500">
        <button onClick={()=>navigate("/")} className="px-2 py-0.5 cursor-pointer hover:bg-slate-300 rounded-md transition-all duration-200"><i class="ri-home-6-line"></i></button>
        <button onClick={()=>navigate("/form")} className="px-2 py-0.5 cursor-pointer hover:bg-slate-300 rounded-md transition-all duration-200"><i class="ri-add-circle-line"></i></button>
    </div>
   
  )
}

export default FloatingBar