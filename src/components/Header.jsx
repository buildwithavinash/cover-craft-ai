import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="border-b border-slate-200 sticky top-0 right-0 left-0 container max-w-6xl px-4 mx-auto backdrop-blur-2xl">
      <div className=" flex justify-between  py-2 items-center">
        <div>
          <h2 onClick={()=>navigate("/")} className="cursor-pointer text-2xl">CoverCraftAI</h2>
        </div>

        <div className="flex gap-2">
          <button onClick={()=>navigate("/history")}>
            History
          </button>
          <button>
            <i className="ri-moon-fill"></i>
          </button>
          <button>
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
