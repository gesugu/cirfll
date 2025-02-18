import React, {useState, useEffect} from 'react';
import kosmos from "../components/icons/kosmos.jpg"
import classes from "../components/FirstPage.module.css"
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import first2 from "../images/first2.png"
import first3 from "../images/first3.png"
import first4 from "../images/first4.png"
import bcg from "../images/bcg.png"
import logo from "../images/logo.png"

const FirstPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const goAbout = () => {
        navigate('/')
    }
    return (
        <div className={classes.firstpage}>
            <img className={classes.firstPageImg} src={bcg} alt={bcg} />
            <div className={classes.logoParent}>
            <img className={classes.logo} onClick={goAbout} src={logo} alt={logo}></img>
            </div>
            <img className={classes.logo2} src={first2} alt={first2} />
            <div className={classes.firstparent}>
                <img className={classes.first3} src={first3} alt={first3} />
                <p className={classes.p1}><span className={classes.f}>FIRST</span><span className={classes.fr}>(For Inspiration and Recognition of Science and Technology)</span> - — 
                    это глобальная некоммерческая организация, которая
                     готовит молодых людей к будущему с помощью набора
                      изменяющих жизнь молодежных программ робототехники,
                       которые развивают навыки, уверенность и устойчивость.
                        Основана в 1989 году изобретателем Дином Кейменом, FIRST®</p>
            </div>
            <div className={classes.firstparent2}>
                <p className={classes.p1}>Широта карьерных возможностей, которые может предоставить
                     образование в области <span className={classes.f}>STEM</span> <span className={classes.fr}>(наука, технология, инженерия и математика)</span>,
                      шире, чем когда-либо.<span className={classes.f}> FIRST</span> вдохновляет сегодняшних студентов строить
                       будущее с учетом их уникальных талантов и интересов.</p>
                       <img className={classes.first4} src={first4} alt={first4} />
            </div>
            <button className={classes.btn}><a className={classes.firsta} href="https://www.firstlegoleague.org/">Узнать подробнее</a></button>
        </div>
    );
}

export default FirstPage;