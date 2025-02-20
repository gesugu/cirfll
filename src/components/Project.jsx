import React, { useState } from 'react';
import classes from './Project.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchProductAction } from '../store/PlanetsReducer';
import { Link } from 'react-router-dom';
import bcg from "../images/bcg.png"
import project1 from "../images/project1.png"
import project2 from "../images/project2.png"
import project3 from "../images/project3.png"
import project4 from "../images/project4.png"
import project5 from "../images/project5.png"
import project6 from "../images/project6.png"
import project7 from "../images/project7.png"
import project8 from "../images/project8.png"

const Project = () => {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [isVisible, setIsVisible] = useState(true);
    const [filteredItems, setFilteredItems] = useState([]);
    return(
        <div className={classes.projectPage}>
            <img className={classes.projectPageImg} src={bcg} alt={bcg} />
            <p className={classes.projectp}>Инновационный проект</p>
            <p className={classes.projectp1}>TOLQYN - Автономная станция мониторинга качества воды:<br /> будущее чистых водоемов</p>
            <div className={classes.projectsimgs}>
                <img className={classes.project1} src={project1} alt={project1} />
                <img className={classes.project2} src={project2} alt={project2} />
            </div>
            <p className={classes.projectp2}>Почему это важно?</p>
            <p className={classes.projectp3}>Чистая вода — основа жизни, но водоемы страдают<br /> от загрязнений. Мы разработали автономную<br /> станцию, которая:</p>
            <p className={classes.project0p1}>✔ Самостоятельно анализирует качество воды.</p>
            <p className={classes.project0p2}>✔ Передает данные в реальном времени.</p>
            <p className={classes.project0p3}>✔ Работает на возобновляемых источниках энергии.</p>
            <p className={classes.projectp4}>Как это работает?</p>
            <div className={classes.divprojects}>
            <div className={classes.projecthalf1}>
                <img className={classes.project3} src={project3} alt={project3} />
                <img className={classes.project4} src={project4} alt={project4} />
            </div>
            <div className={classes.projecthalf2}>
                <img className={classes.project5} src={project5} alt={project5} />
                <img className={classes.project6} src={project6} alt={project6} />
            </div>
            </div>
            <p className={classes.projectp5}>Проведенные исследования</p>
            <div className={classes.projectsimgs2}>
            <img className={classes.project7} src={project7} alt={project7} />
            <img className={classes.project8} src={project8} alt={project8} />
            </div>
            <p className={classes.projecto02}>Мы создаем не просто устройство, а<br /> инструмент для защиты экологии. <br />
            Наш проект поможет отслеживать загрязнения<br /> и предотвращать экологические катастрофы.<br /></p>
        </div>
    )
}

export default Project;