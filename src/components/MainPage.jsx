import React, {useState} from 'react';
import kosmos from "../components/icons/kosmos.jpg"
import classes from "../components/MainPage.module.css"
import bcg from "../images/bcg.png"
import first from "../images/first.png"
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import PostService from '../API/PostService';
import MyLoader from '../components/UI/loader/MyLoader';
import About from "../components/About"
import {filteredProductAction, selectItemAction, selectItemAction2, getItemsAction} from "../store/PlanetsReducer"
import Footer from './Footer';

const MainPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "Что такое FIRST LEGO League?",
            answer: "FIRST LEGO League - это международная программа, которая объединяет молодых исследователей, инженеров и программистов для решения реальных мировых проблем."
        },
        {
            question: "Как присоединиться к команде?",
            answer: "Чтобы присоединиться к нашей команде, свяжитесь с нами через Instagram или напишите на электронную почту."
        },
        {
            question: "Какие проекты вы реализуете?",
            answer: "Мы работаем над различными проектами в области робототехники, экологии и инноваций. Наш текущий проект - TOLQYN, система мониторинга качества воды."
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={classes.mainPageParent}>
            <div className={classes.mainPage}>
                <img className={classes.mainPageImg} src={bcg} alt={bcg} />
                <div className={classes.bubble4}></div>
                <div className={classes.bubble5}></div>
                <div className={classes.bubble6}></div>
                <div className={classes.bubble7}></div>
                <div className={classes.h1Main}>
                    <h1 className={classes.h1Mainh}>
                        <span>Добро</span> 
                        <span>пожаловать!</span>
                    </h1>
                    <div className={classes.typingText}>Skillset Team Let's Go!</div>
                    <button className={classes.exploreButton} onClick={() => navigate('/about')}>
                        <span>Explore Our Team</span>
                    </button>
                </div>
                {/* Removed Highlights section */}
                {/* Removed FAQ section */}
                <Footer />
            </div>
        </div>
    );
}

export default MainPage;