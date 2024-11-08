
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import {Home,About,Contact } from './Components';
function Routing() {
    return (
       
        <BrowserRouter>
          
            <nav >
                <ul style={{ display: "flex", flexDirection:"row" }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
        
    );
}

export default Routing;