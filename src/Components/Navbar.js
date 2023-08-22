import React, { useState, useContext } from 'react'
import icon from '../icon/PsyLight.png';
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Cartcontext from '../Context/Cartcontext';

const Navbar = () => {
  const [screenwidth, setscreenwidth] = useState(window.screen.width);
  const [addclass, setaddclass] = useState("");
  const [addicon, setaddicon] = useState("<AiOutlineMenu/>");
  const { total_item } = useContext(Cartcontext);

  window.addEventListener("resize", () => {
    setscreenwidth(window.screen.width);
  })

  function handleClick() {
    if (addclass === "") {
      setaddclass("active");
      setaddicon("<AiOutlineClose/>");
    }
    else {
      setaddclass("");
      setaddicon("<AiOutlineMenu/>");
    }
  }

  function handleShow() {
    setaddclass("");
    setaddicon("<AiOutlineMenu/>");
  }

  return (
    <nav>
      <Link to='/'><img src={icon} alt='LOGO NOT AVAILABLE' /></Link>
      {screenwidth <= 800 &&
        <ul>
          {addicon === "<AiOutlineMenu/>" ?
            <li id='responsivemenu' onClick={handleClick}><AiOutlineMenu /></li>
            : <li id='responsivemenu' onClick={handleClick}><AiOutlineClose /></li>
          }
        </ul>
      }
      <ul id='collapse' className={addclass}>
        <Link to='/about' ><li onClick={handleShow}>About</li></Link>
        <Link to='/products' ><li onClick={handleShow}>Products</li></Link>
        <Link to='/contact' ><li onClick={handleShow}>Contact</li></Link>
        <Link to='/login'><li id='active' onClick={handleShow}>Login</li></Link>
        <Link to='/cart' >
          <li onClick={handleShow}>
            <AiOutlineShoppingCart id="carticon" />
            <label htmlFor='#carticon' id='cartnum'>{total_item}</label>
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar