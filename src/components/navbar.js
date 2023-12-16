
import React, { useState, useEffect } from "react";
import '../styles/header.css';
import { Link } from 'react-router-dom'
import { NumberOfItems} from '../pages/product'

const Header = () => {
    const [numberItems, setNumberOfItems] = useState(0);

  const updateNumberOfItems = () => {
    const count = NumberOfItems();
    setNumberOfItems(count);
  };

  useEffect(() => {
    // Initial update
    updateNumberOfItems();

    // Add event listener
    window.addEventListener("storage", updateNumberOfItems);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("storage", updateNumberOfItems);
    };
  }, []);
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a id="brand" class="navbar-brand text-danger"  >Mosiacmagic</a>

                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active mr-5 ml-5">
                            <a class="nav-link" ><Link id='link' to="/Sunacchii-react" className='header-link'>Home</Link></a>
                        </li>
                        <li class="nav-item mr-5 ml-5">
                            <a class="nav-link" ><Link id='link' to="/Sunacchii-react/costume" className='header-link'>Costume</Link></a>
                        </li>
                        <li class="nav-item mr-5 ml-5">
                            <a class="nav-link" ><Link id='link' to="/Sunacchii-react/contact us" className='header-link'>Contact us</Link></a>
                        </li>
                        <li id="mobilebtn" class="nav-item mr-5 ml-5">
                            <i className="fas fa-search fa-lg" id="icons"></i>
                        </li>
                        <li id="mobilebtn" class="nav-item mr-5 ml-5">
                            <a id="icons" >
                                <i className="fas fa-shopping-cart fa-lg" id="icons"></i>
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{ numberItems}</span>
                            </a>
                        </li>
                        <li id="mobilebtn" class="nav-item mr-5 ml-5">
                            <a id="icons" >
                                <i className="fas fa-user fa-lg" id="icons"></i>
                            </a>
                        </li>


                    </ul>
                </div>
                <div class="navbar-nav">
                    <ul className="navbar-nav d-none d-lg-inline-flex">
                        <li className="nav-item mx-2">
                            <i className="fas fa-search fa-lg" id="icons"></i>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-none d-lg-inline-flex">
                        <li className="nav-item mx-2">
                        <a id="icons" >
                        <Link id='link' to="/Sunacchii-react/shopping-cart" className='header-link'><i className="fas fa-shopping-cart fa-lg" id="icons"></i></Link>
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{ numberItems}</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-none d-lg-inline-flex">
                        <li className="nav-item mx-2">
                            <a id="icons" >
                            <Link id='link' to="/Sunacchii-react/account" className='header-link'><i className="fas fa-user fa-lg" id="icons"></i></Link>
                            </a>
                        </li>
                    </ul>

                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>

    )
}

export default Header;