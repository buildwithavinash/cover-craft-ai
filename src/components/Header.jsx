import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="border-b border-slate-200 sticky top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-3xl z-50">
      <div className="container max-w-6xl px-4 mx-auto flex justify-between py-2 items-center">
        <div>
          <h2
            onClick={() => navigate("/")}
            className="cursor-pointer text-2xl"
          >
            CoverCraftAI
          </h2>
        </div>

        <div className="flex gap-2">
          <button onClick={() => navigate("/history")}>History</button>
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