import React from "react";
import like from '../pictures/Vector.svg'
import {useNavigate} from 'react-router-dom'
import store from "../store/store";
import {actionChange} from '../store/store'


type Info = {
    info: any
}

export const Card: React.FC<Info> = (props) => {
    const navigate = useNavigate()

    const clickCard = () => {
        store.dispatch(actionChange(props.info))
        navigate('/personalPage')
    }

    return (
        <div className="cardPerson" onClick={clickCard}>
            <div className="text">
                <img src={props.info['avatar']}/> <br/>
                {props.info['first_name']} {props.info['last_name']}
            </div>
            <div className="like">   
                <img src={like}/>
            </div>
        </div>
    )
}