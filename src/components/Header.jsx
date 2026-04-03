const Header = () => {
  return (
    <div className="container max-w-6xl px-4 mx-auto">
      <div className="flex justify-between border-b border-slate-200 py-2 items-center">
        <div>
          <h2>CoverCraftAI</h2>
        </div>

        <div className="flex gap-2">
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
