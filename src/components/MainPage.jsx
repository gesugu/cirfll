import React, {useState, useEffect} from 'react';
import kosmos from "../components/icons/kosmos.jpg"
import classes from "../components/MainPage.module.css"
import bcg from "../images/bcg.png"
import first from "../images/first.png"
import logo from "../images/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import PostService from '../API/PostService';
import MyLoader from '../components/UI/loader/MyLoader';
import About from "../components/About"
import {filteredProductAction, selectItemAction, selectItemAction2, getItemsAction} from "../store/PlanetsReducer"

const MainPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const goAbout = () => {
        navigate('/about')
    }
    return (
        <div className={classes.mainPageParent}>
        <div className={classes.mainPage}>
            <img className={classes.mainPageImg} src={bcg} alt={bcg} />
            <img className={classes.logo} src={logo} alt={logo} />
            <div className={classes.h1Main}>
            <h1 className={classes.h1Mainh}><span>Добро</span> <span>пожаловать!</span></h1>
            </div>
            <div className={classes.divG61}>
            <div className={classes.divG}>
                <h2 className={classes.h2G}><Link className={classes.link} to="/about">О команде</Link></h2>
                <img className={classes.logoG} src={logo} alt={logo} />
            </div>
            <div className={classes.divG1}>
                <h2 className={classes.h2G1}><Link className={classes.link2} to="/firstpage">О FIRST</Link></h2>
                <img className={classes.logoG1} src={first} alt={first} />
            </div>
            </div>
            <div className={classes.parentsMain0}>
            <div className={classes.parents0}>
                <div className={classes.parentB1}></div>
            </div>
            <div className={classes.parents1}>
                <div className={classes.parentB2}></div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default MainPage;