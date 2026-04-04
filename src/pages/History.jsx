import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const History = () => {
    const [data, setData] = useState([]);


    const navigate = useNavigate();


     useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("results")) || [];
    setData(stored);
  }, []);


  const handleDelete = (id) => {
    const updated = data.filter((item)=> item.id !== id);
    setData(updated);
    localStorage.setItem("results", JSON.stringify(updated));
  }
  return (
    <div>
        <div>
            <h2>Your History</h2>

            <button onClick={()=>{localStorage.removeItem("results"); setData([])}}>Clear All</button>

            {data.map((d)=>(
                <div key={d.id} onClick={()=> navigate(`/detail/${d.id}`)} className="border border-slate-300 p-2">

                    <button onClick={(e)=>{e.stopPropagation(); handleDelete(d.id); }}>
                        <i class="ri-delete-bin-6-line"></i>
                    </button>
                    <p className="line-clamp-2">{new Date(d.createdAt).toLocaleString()}</p>

                    <p className="line-clamp-2">{d.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default History