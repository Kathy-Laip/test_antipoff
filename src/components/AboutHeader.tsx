import React, { useEffect, useState } from "react";
import exit from '../pictures/exit.svg'
import { useNavigate } from "react-router-dom";

export const AboutHeader: React.FC = () => {
    const navigator = useNavigate()

    function exitClick(){
        sessionStorage.removeItem('user')
        navigator('/')
    }

    return (
        <header id='headerAbout'>
            <button className="btn1" onClick={exitClick}>Выход</button>
            <div id="exitMobile">
                <img src={exit} onClick={exitClick}/>
            </div>
            <h1>Наша команда</h1>
            <h2>Это опытные специалисты, хорошо разбирающиеся во всех задачах, 
                которые ложатся на их плечи, и умеющие находить выход из любых, 
                даже самых сложных ситуаций. </h2>
        </header>
    )
}