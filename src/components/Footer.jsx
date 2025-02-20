import React from 'react';
import classes from './Footer.module.css';
import logo from '../images/logo.png';
import firstLogo from '../images/first.png';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerContent}>
                <div className={classes.logos}>
                    <a href="https://skillset.edu.kz/" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        <img src={logo} alt="Skillset" className={classes.logo} />
                    </a>
                    <a href="https://www.firstlegoleague.org/" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        <img src={firstLogo} alt="FIRST" className={classes.firstLogo} />
                    </a>
                </div>
                <div className={classes.links}>
                    <a href="https://www.instagram.com/skillset_fll" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className={classes.link}>
                        <i className="fab fa-instagram"></i>
                        Instagram
                    </a>
                    <a href="https://www.firstinspires.org/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className={classes.link}>
                        <i className="fas fa-robot"></i>
                        FIRST
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
