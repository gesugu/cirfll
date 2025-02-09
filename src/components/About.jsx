import React, { useState } from 'react';
import classes from './About.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchProductAction } from '../store/PlanetsReducer';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"
import MyLoader from "../components/UI/loader/MyLoader"
import bcg from "../images/bcg.png"
import Header from "../components/Header"
import serik from "../images/serik.png"
import ruslan from "../images/ruslan.png"
import akhan from "../images/akhan.png"
import adiya from "../images/adiya.png"
import me from "../images/me.png"
import tair from "../images/tair.png"
import aslan from "../images/aslan.png"
import abylai from "../images/abylai.png"
import bakhtiar from "../images/bakhtiar.png"
import marcel from "../images/marcel.png"

const About = () => {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [isVisible, setIsVisible] = useState(true);
    const [filteredItems, setFilteredItems] = useState([]);
    return(
        <div className={classes.aboutPage}>
            <Header className={classes.header} />
            <img className={classes.aboutPageImg} src={bcg} alt={bcg} />
            <h1 className={classes.abouth1}>Мы - команда Skillset!</h1>
            <p className={classes.aboutp}>Команда энтузиастов,
                 мечтателей и<br /> инженеров,
                  которые верят, что технологии<br />
                   могут изменить мир к лучшему.<br /></p>
            <h1 className={classes.abouth2}>Участники</h1>
            <div>
                <div className={classes.mentors}>
                    <div className={classes.mentor1}>
                    <img className={classes.mentor1Img} src={serik} alt={serik} />
                    </div>
                    <div className={classes.mentor2}>
                    <img className={classes.mentor2Img} src={ruslan} alt={ruslan} />
                    </div>
                </div>
                <div className={classes.part0}>
                <img className={classes.part0Img} src={bakhtiar} alt={bakhtiar} />
                </div>
                <div className={classes.part7}>
                <img className={classes.part7Img} src={marcel} alt={marcel} />
                </div>
                <div className={classes.parts}>
                    <div className={classes.part1}>
                    <img className={classes.part1Img} src={akhan} alt={akhan} />
                    </div>
                    <div className={classes.part2}>
                    <img className={classes.part2Img} src={adiya} alt={adiya} />
                    </div>
                    <div className={classes.part3}>
                    <img className={classes.part3Img} src={me} alt={me} />
                    </div>
                    <div className={classes.part4}>
                    <img className={classes.part4Img} src={tair} alt={tair} />
                    </div>
                    <div className={classes.part5}>
                    <img className={classes.part5Img} src={aslan} alt={aslan} />
                    </div>
                    <div className={classes.part6}>
                    <img className={classes.part6Img} src={abylai} alt={abylai} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;