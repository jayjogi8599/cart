import {BrowserRouter,Route,Routes} from "react-router-dom"
import "./styles/app.scss"
import Home from "./components/Home";
import Cart from "./components/Cart";
import Header from "./components/Header"
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
   </Routes>
   <Toaster/>
   </BrowserRouter>
  )
}

export default App