
import { useNavigate } from "react-router-dom";

const Header = ({onToggle, dark}) => {
 

  const navigate = useNavigate();
  return (
    <div className="border-b border-slate-200 sticky top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-3xl z-100 dark:bg-slate-950 dark:border-slate-900 dark:backdrop-blur-3xl">
      <div className="container max-w-6xl px-4 mx-auto flex justify-between py-2 items-center">
        <div>
          <h2
            onClick={() => navigate("/")}
            className="cursor-pointer text-2xl text-emerald-500 dark:text-emerald-400 font-semibold md:text-3xl"
          >
            CoverCraftAI
          </h2>
        </div>

        <div className="flex gap-4 text-2xl md:text-3xl">
          
          <button onClick={onToggle} className="cursor-pointer dark:text-slate-200">
           {dark ? (
            <i className="ri-sun-fill"></i>
           ) : (
            <i className="ri-moon-fill"></i>
           )} 
          </button>
          <button onClick={() => navigate("/history")} className="cursor-pointer  dark:text-yellow-400"><i className="ri-history-line"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Header;