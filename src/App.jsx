import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Landing from "./pages/Landing"
import Form from "./pages/Form"
import Result from "./pages/Result"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    <Routes>
    <Route path="/" element={<Landing />}/>
    <Route path="/form" element={<Form />} />
    <Route path="/result" element={<Result />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App