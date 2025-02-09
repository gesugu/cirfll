import React, { useState } from 'react';
import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchProductAction } from '../store/PlanetsReducer';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../images/logo.png"
import MyLoader from "../components/UI/loader/MyLoader"

const Header = () => {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [isVisible, setIsVisible] = useState(true);
    const [filteredItems, setFilteredItems] = useState([]);
    const navigate = useNavigate()

    const goAbout = () => {
        navigate('/')
    }
    return(
      <div className={classes.headerPage}>
      <div className={classes.headerPage3}>
      </div>
      <div className={classes.headerPage2}>
          <div className={classes.headerPageParentDP}>
            <div className={classes.logoParent}>
            <img className={classes.logo} onClick={goAbout} src={logo} alt={logo}></img>
            </div>
            <div className={classes.navParent}>
            <div className={classes.nav1}>
            <h1>
              <Link className={classes.nav4l} to="/about">О нас</Link>
              </h1>
            </div>
            <div className={classes.nav2}>
            <h1>
              <Link className={classes.nav4l} to="/values">Командные ценности</Link>
              </h1>
            </div>
            <div className={classes.nav3}>
              <h1>
              <Link className={classes.nav4l} to="/robot">Робот</Link>
              </h1>
            </div>
            <div className={classes.nav4}>
              <h1>
              <Link className={classes.nav4l} to="/project">Проект</Link>
              </h1>
            </div>
            </div>
        </div>
      </div>
    </div>
    )
}

export default Header;