import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./layouts/Header"

const App = () =>{
    return(
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Layout/>}>
        //             <Route index element={<Home/>}/>
        //             <Route path="news" element={<News/>}/>
        //             <Route path="contact" element={<Contact />}/>
        //         </Route>
        //     </Routes>
        // </BrowserRouter>
        <Header />
    )
}
export default App