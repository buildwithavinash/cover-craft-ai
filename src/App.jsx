import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Landing from "./pages/Landing"
import Form from "./pages/Form"
import Result from "./pages/Result"
import History from "./pages/History"
import Detail from "./pages/Detail"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    <Routes>
    <Route path="/" element={<Landing />}/>
    <Route path="/form" element={<Form />} />
    <Route path="/result" element={<Result />}/>
    <Route path="/history" element={<History />}/>
    <Route path="/detail/:id" element={<Detail />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App