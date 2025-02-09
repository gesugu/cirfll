import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import PostService from "../API/PostService"
import {addUserAction, removeUserAction, getUserAction, selectItemAction2} from "../store/PlanetsReducer"
import MyLoader from "../components/UI/loader/MyLoader"
import classes from "../components/ItemOneScreenInfo.module.css"

const ItemOneScreenInfo = () => {
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
        <div className={classes.onePage}>
            <div className={classes.onePageParents}>
            {itemsStore.length > 0 ? (
                  itemsStore.filter(user => user.type === currentItem.type).map((item, index) => (
                    // <div key={index}>
                    //   <img onClick={() => getItemById(user.id)} className={classes.onePageImg} src={user.image} alt={user.image} />
                    //   <div onClick={() => getItemById(user.id)} className={classes.mainPageDivP}></div>
                    //   <p onClick={() => getItemById(user.id)} className={classes.onePageP}>{user.title}</p>
                    // </div>

                    <div key={index} className={classes.OnePageItems}>
                                <img onClick={() => getItemById(item.id)} className={classes.onePageImg} src={item.image} alt="image" />
                                <div onClick={() => getItemById(item.id)} className={classes.mainPageDivP}>
                                <p onClick={() => getItemById(item.id)} className={classes.onePageP}>{item.title}</p>
                                </div>
                            </div>
                  ))
                ) : (
                  <p>Отзывов нет</p>
                )}
            </div>
        </div>
    );
}

export default ItemOneScreenInfo;