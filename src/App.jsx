import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Form from "./pages/Form";
import Result from "./pages/Result";
import History from "./pages/History";
import Detail from "./pages/Detail";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h2 className="text-4xl font-bold text-slate-700">404</h2>
      <p className="text-slate-500">Page not found.</p>
      <button
        onClick={() => navigate("/")}
        className="bg-emerald-400 text-slate-100 px-5 py-2 rounded-xl font-medium cursor-pointer hover:bg-emerald-500 transition-all duration-200"
      >
        Go Home
      </button>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/form" element={<Form />} />
          <Route path="/result" element={<Result />} />
          <Route path="/history" element={<History />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;