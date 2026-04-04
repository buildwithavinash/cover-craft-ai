import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const History = () => {
    const [data, setData] = useState([]);


    const navigate = useNavigate();


     useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("results")) || [];
    setData(stored);
  }, []);

  return (
    <div>
        <div>
            <h2>Your History</h2>

            {data.map((d)=>(
                <div key={d.id} onClick={()=> navigate(`/detail/${d.id}`)} className="border border-slate-300 p-2">
                    <p className="line-clamp-2">{new Date(d.createdAt).toLocaleString()}</p>

                    <p className="line-clamp-2">{d.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default History