import React, { useState } from 'react';
import classes from './About.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchProductAction } from '../store/PlanetsReducer';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"
import MyLoader from "../components/UI/loader/MyLoader"
import bcg from "../images/bcg.png"
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
import mentor1 from "../images/mentor1.png"

const About = () => {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [isVisible, setIsVisible] = useState(true);
    const [filteredItems, setFilteredItems] = useState([]);
    return(
        <div className={classes.aboutPage}>
            <img className={classes.aboutPageImg} src={bcg} alt="background" />
            <div className={classes.contentWrapper}>
                <h1 className={classes.abouth1}>Мы - команда Skillset!</h1>
                <p className={classes.aboutp}>
                    Команда энтузиастов, мечтателей и инженеров,
                    которые верят, что технологии могут изменить мир к лучшему.
                </p>
                <h1 className={classes.abouth2}>Участники</h1>
                <div>
                    <div className={classes.mentors}>
                        <div className={classes.mentor1}>
                        <img className={classes.mentor1Img} src={serik} alt={serik} />
                        </div>
                        <div className={classes.mentor2}>
                        <img className={classes.mentor2Img} src={ruslan} alt={ruslan} />
                        </div>
                        <div className={classes.mentor3}>
                        <img className={classes.mentor3Img} src={mentor1} alt={mentor1} />
                        </div>
                    </div>
                    <div className={classes.teamGrid}>
                        <div className={classes.part0}>
                            <img className={classes.part0Img} src={bakhtiar} alt={bakhtiar} />
                        </div>
                        <div className={classes.part7}>
                            <img className={classes.part7Img} src={marcel} alt={marcel} />
                        </div>
                    </div>
                    <div className={classes.parts}>
                        <div className={classes.part1}>
                        <img className={classes.part1Img} src={akhan} alt={akhan} />
                        </div>
                        <div className={classes.part2}>
                        <img className={classes.part2Img} src={me} alt={me} />
                        </div>
                        <div className={classes.part3}>
                        <img className={classes.part3Img} src={adiya} alt={adiya} />
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
        </div>
    )
}

export default About;