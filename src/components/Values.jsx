import React, { useState } from 'react';
import classes from './Values.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchProductAction } from '../store/PlanetsReducer';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"
import MyLoader from "../components/UI/loader/MyLoader"
import bcg from "../images/bcg.png"
import Header from "../components/Header"
import values1 from "../images/values1.png"
import values2 from "../images/values2.png"
import values3 from "../images/values3.png"
import values4 from "../images/values4.png"
import values5 from "../images/values5.png"
import values6 from "../images/values6.png"
import values7 from "../images/values7.png"
import values8 from "../images/values8.png"
import values9 from "../images/values9.png"
import values10 from "../images/values10.png"
import values11 from "../images/values11.png"
import values12 from "../images/values12.png"
import values13 from "../images/values13.png"
import values14 from "../images/values14.png"
import values15 from "../images/values15.png"

const Values = () => {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [isVisible, setIsVisible] = useState(true);
    const [filteredItems, setFilteredItems] = useState([]);
    return(
        <div className={classes.aboutPage}>
            <Header className={classes.header} />
            <img className={classes.aboutPageImg} src={bcg} alt={bcg} />
            <h1 className={classes.abouth1}>Мы - команда Skillset!</h1>
            <div className={classes.divp}>
            <p className={classes.aboutp}>Наши ценности - наша сила!</p>
            <div className={classes.divg}>
                <p className={classes.divgp}>Каждая успешная команда строится не только на знаниях
                    и технологиях, но и на крепком фундаменте ценностей.
                    Мы верим, что робототехника — это не просто соревнования,
                    а путь к развитию, командной работе и решению реальных проблем</p>
                    <p className={classes.divgp2}>Вместе мы не только строим роботов,
                        но и учимся работать в команде,
                        принимать вызовы, искать нестандартные решения и,
                        конечно, поддерживать друг друга.</p>
                        <p className={classes.divgp3}>Наши ценности — это то, что делает нас сильнее.
                             Это то, что объединяет нас 
                             и помогает идти вперед, несмотря 
                             на любые трудности.</p>
            </div>
            </div>
            <div className={classes.divp2}>
                <p className={classes.divp3}>Наши командные ценности</p>
                <div className={classes.divg0}>
                    <p className={classes.divgp0}>Сотрудничество и поддержка</p>
                </div>
                <p className={classes.divp2p}>Мы — единое целое.
                     Только вместе мы достигаем настоящих успехов!</p>
                <div className={classes.imgs}>
                    <img className={classes.values1} src={values1} alt={values1} />
                    <img className={classes.values2} src={values2} alt={values2} />
                    <img className={classes.values3} src={values3} alt={values3} />
                </div>
                <p className={classes.divp2p0}>Мы верим, что команда — это не просто группа людей,<br />
                    а настоящий механизм, где каждый элемент важен.<br />
                    Мы помогаем друг другу, делимся знаниями,
                    учимся<br /> слушать и понимать друг друга.
                    Вместе мы сильнее,<br /> и вместе мы добиваемся лучших результатов.<br /></p>
                <p className={classes.divp2p1}>🐟 Мы ценим вклад каждого участника.</p>
                <p className={classes.divp2p2}>🐟 Мы работаем на общий результат, а не на личную выгоду.</p>
                <p className={classes.divp2p3}>🐟 Мы поддерживаем друг друга, даже когда что-то не получается.</p>
            </div>
            <div className={classes.div013p}>
                <div className={classes.divg1}>
                    <p className={classes.divgp1}>креативность и инновации</p>
                </div>
                <p className={classes.divp3p}>Каждая проблема — это вызов, а вызовы толкают нас вперед!</p>
                <div className={classes.imgs1}>
                    <img className={classes.values4} src={values4} alt={values4} />
                    <img className={classes.values5} src={values5} alt={values5} />
                    <img className={classes.values6} src={values6} alt={values6} />
                </div>
                <p className={classes.divp3p0}>Робототехника — это мир,
                     где невозможно двигаться по прямому<br /> пути.
                      Каждый день мы сталкиваемся с новыми задачами,
                       и только<br /> креативный подход помогает находить 
                       решения. Мы не боимся<br /> экспериментировать, пробовать
                    нестандартные идеи и создавать нечто уникальное.<br /></p>
                <p className={classes.divp3p1}>🐟 Мы любим искать новые решения.</p>
                <p className={classes.divp3p2}>🐟 Мы не боимся делать ошибки — они помогают нам расти.</p>
                <p className={classes.divp3p3}>🐟 Мы пробуем разные подходы, пока не найдем лучший.</p>
            </div>
            <div className={classes.div113p}>
                <div className={classes.divnew}>
                    <p className={classes.divnew2}>упорство и стремление к лучшему</p>
                </div>
                <p className={classes.divnewp}>Каждая ошибка — это шаг к успеху!</p>
                <div className={classes.imgsnew}>
                    <img className={classes.values7} src={values7} alt={values7} />
                    <img className={classes.values8} src={values8} alt={values8} />
                    <img className={classes.values9} src={values9} alt={values9} />
                </div>
                <p className={classes.div4pnew}>Ни одна великая идея не рождается
                без пробы и ошибок.<br /> Мы знаем, что на пути к победе будет много сложностей,
                но<br /> мы не сдаемся. Мы работаем, анализируем, улучшаем и<br /> движемся вперед.<br /></p>
                <p className={classes.divnew6p1}>🐟 Мы не опускаем руки после неудач.</p>
                <p className={classes.divnew6p2}>🐟 Мы учимся на своих ошибках.</p>
                <p className={classes.divnewp6p3}>🐟 Мы постоянно совершенствуемся, чтобы стать лучше.</p>
            </div>
            <div className={classes.div213p}>
                <div className={classes.divprelast}>
                    <p className={classes.divprelast2}>ответственность и уважение</p>
                </div>
                <p className={classes.divprelastp}>Мы ценим вклад каждого и уважаем других!</p>
                <div className={classes.imgsprelast}>
                    <img className={classes.values10} src={values10} alt={values10} />
                    <img className={classes.values11} src={values11} alt={values11} />
                    <img className={classes.values12} src={values12} alt={values12} />
                    <img className={classes.values13} src={values13} alt={values13} />
                </div>
                <p className={classes.div4prenew}>Настоящий успех невозможен
                без честности и уважения — к<br /> своей команде, к соперникам,
                к правилам и к окружающему<br /> миру. Мы играем честно, поддерживаем
                принципы FLL Challange<br /> и уважаем всех, кто стоит рядом.<br /></p>
                <p className={classes.divprenew6p1}>🐟 Мы честны друг с другом и с другими командами.</p>
                <p className={classes.divprenew6p2}>🐟 Мы ценим чужую работу так же, как свою.</p>
                <p className={classes.divprenewp6p3}>🐟 Мы понимаем, что каждый имеет право на мнение и идеи.</p>
            </div>
            <div className={classes.div313p}>
                <div className={classes.divlast}>
                    <p className={classes.divlast2}>веселье и дружба</p>
                </div>
                <p className={classes.divlastp}>Когда работа в радость — результат будет невероятным!</p>
                <div className={classes.imgslast}>
                    <img className={classes.values14} src={values14} alt={values14} />
                    <img className={classes.values15} src={values15} alt={values15} />
                </div>
                <p className={classes.div4last}>Мы любим то, чем занимаемся,
                    и это вдохновляет нас на новые<br /> достижения. Да,
                    соревнования важны, но не менее важно<br /> получать
                    удовольствие от процесса. Мы не просто команда —<br /> мы друзья,
                    и это делает нас по-настоящему сильными!<br /></p>
                <p className={classes.divlast6p1}>🐟 Мы честны друг с другом и с другими командами.</p>
                <p className={classes.divlast6p2}>🐟 Мы ценим чужую работу так же, как свою.</p>
                <p className={classes.divlastp6p3}>🐟 Мы понимаем, что каждый имеет право на мнение и идеи.</p>
            </div>
        </div>
    )
}

export default Values;