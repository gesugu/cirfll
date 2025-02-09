import React, { useState } from 'react';
import classes from './Robot.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchProductAction } from '../store/PlanetsReducer';
import { Link } from 'react-router-dom';
import bcg from "../images/bcg.png"
import Header from "../components/Header"
import values9 from "../images/values9.png"
import values10 from "../images/values10.png"
import values16 from "../images/values16.png"
import robot1 from "../images/robot1.png"
import robot2 from "../images/robot2.png"
import robot3 from "../images/robot3.png"

const Robot = () => {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [isVisible, setIsVisible] = useState(true);
    const [filteredItems, setFilteredItems] = useState([]);
    return(
        <div className={classes.robotPage}>
            <Header className={classes.header} />
            <img className={classes.robotPageImg} src={bcg} alt={bcg} />
            <p className={classes.robotp}>Наш робот</p>
            <p className={classes.robotp1}>Эволюция наших роботов:<br /> от прототипа к совершенству!</p>
            <p className={classes.robotp2}>Как мы разрабатывали, тестировали и улучшали нашего робота<br /> шаг за шагом</p>
            <div className={classes.robotimgs}>
            <img className={classes.robotvalues9} src={values10} alt={values10} />
            <img className={classes.robotvalues10} src={values9} alt={values9} />
            <img className={classes.robotvalues16} src={values16} alt={values16} />
            </div>
            <p className={classes.robotp3}>Робототехника — это постоянное развитие.
            Мы начали с идеи,<br /> прошли через множество испытаний,
            создали первый прототип,<br /> доработали его, протестировали
            различные насадки и, наконец,<br /> пришли к финальной версии робота.<br />
            На этой странице мы расскажем о нашем пути: от первых<br /> чертежей
            до полностью работающей модели, готовой к<br /> выполнению сложных задач.<br /></p>
            <p className={classes.robotp4}>Наш прототип робота</p>
            <div className={classes.divrobot0}>
                <img className={classes.divrobotimg} src={robot1} alt={robot1} />
                <div className={classes.divrobot1}>
                    <p className={classes.divrobot1p}>Каждый успешный проект начинается
                    с чернового варианта. Наш первый прототип
                    был простым, но<br /> уже тогда мы понимали, какие
                    ключевые задачи<br /> он должен выполнять.
                    Мы тестировали базовые<br /> функции, проверяли
                    механику, программировали<br /> первые алгоритмы.<br /></p>
                    <button className={classes.robotbtn}>
                        <p className={classes.robotbtnp}>Получить инструкцию</p>
                    </button>
                </div>
            </div>
            <p className={classes.robotp5}>Насадки</p>
            <div className={classes.divrobotpar}>
            <div className={classes.divrobot2}>
                <img className={classes.robot2img} src={robot2} alt={robot2} />
                <button className={classes.robotbtn2}>
                        <p className={classes.robotbtnp2}>Получить инструкцию</p>
                </button>
            </div>
            <div className={classes.divrobot3}>
                <img className={classes.robot3img} src={robot3} alt={robot3} />
                <button className={classes.robotbtn3}>
                        <p className={classes.robotbtnp3}>Получить инструкцию</p>
                </button>
            </div>
            <div className={classes.divrobot4}>
                <img className={classes.robot4img} src={robot3} alt={robot3} />
                <button className={classes.robotbtn4}>
                        <p className={classes.robotbtnp4}>Получить инструкцию</p>
                </button>
            </div>
            </div>
        </div>
    )
}

export default Robot;