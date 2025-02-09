import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import PostService from "../API/PostService"
import {addUserAction, removeUserAction, getUserAction, selectItemAction2} from "../store/PlanetsReducer"
import MyLoader from "../components/UI/loader/MyLoader"
import classes from "../components/Planets.module.css"

const Planets = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const itemsStore = useSelector(state =>state.planetsReducer.items)
    const {item_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    const currentItem = itemsStore.find(item => String(item.id) === String(item_id));

    function getItemById(item_id){
        navigate(`/item3/${item_id}`)
        console.log('success', item_id)
    }
    return (
        <div className={classes.planetsPage}>
            <div className={classes.planetsOnePage}>
            {
                 itemsStore.map((item, index) => (
                    <div key={index} className={classes.planetsPageItems}>
                                <img onClick={() => getItemById(item.id)} className={classes.planetsPageImgItems} src={item.image} alt="image" />
                                <div onClick={() => getItemById(item.id)} className={classes.planetsPageDivP}>
                                <p onClick={() => getItemById(item.id)} className={classes.planetsPageOneP}>{item.title}</p>
                                </div>
                            </div>
                  ))
            }
            </div>
        </div>
    );
}

export default Planets;