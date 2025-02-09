import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import PostService from "../API/PostService"
import {addUserAction, removeUserAction, getUserAction, selectItemAction2} from "../store/PlanetsReducer"
import MyLoader from "../components/UI/loader/MyLoader"
import classes from "../components/ItemOneScreenInfo2.module.css"

const ItemOneScreenInfo2 = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const itemsStore = useSelector(state =>state.planetsReducer.items)
    const {item_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    const currentItem = itemsStore.find(item => String(item.id) === String(item_id));
    return (
        <div className={classes.onePage}>
            <div className={classes.onePageParents}>
            {itemsStore.length > 0 ? (
                  itemsStore.filter(user => user.title === currentItem.title).map((user, index) => (
                    <div key={index} className={classes.onePageFlParent}>
                      <img className={classes.onePageImg} src={user.image} alt={user.image} />
                      <div className={classes.onePageParentGr}>
                      <p className={classes.onePageP1}>{user.title}</p>
                      <p className={classes.onePageP}>{user.description}</p>
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

export default ItemOneScreenInfo2;