import React, {useState} from "react";
import store from '../store/store'
import call from '../pictures/call.svg'
import mail from '../pictures/mail.svg'
import exit from '../pictures/exit.svg'
import back from '../pictures/back.svg'
import { useNavigate } from "react-router-dom";

export const PersonalPage: React.FC = () => {
    const [curUser, setCurUser] = useState(store.getState().obj.value)

    const navigator = useNavigate()

    function exitClick(){
        sessionStorage.removeItem('user')
        navigator('/')
    }

    function backClick(){
        navigator('/about')
    }

    return (
        <>
            <header id='personalHeader'>
                <nav id='desk'>
                    <button className="btn1" id='back' onClick={backClick}>Назад</button>
                    <button className="btn1" id='exit' onClick={exitClick}>Выход</button>
                </nav>
                <nav id='mobileNav'>
                    <img id="back" src={back} onClick={backClick}/>
                    <img id='exit' src={exit} onClick={exitClick}/>
                </nav>
                <div id='personBio'>
                    <img src={curUser.avatar}/>
                    <div>
                        <h1>{curUser.first_name} {curUser.last_name}</h1>
                        <h2>Партнер</h2>
                    </div>
                </div>
            </header>
            <div id='personalMain'>
                <div className="text">
                    <p>Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.</p>
                    <br/>
                    <p>В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".</p>
                    <br/>
                    <p>Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.</p>
                </div>
                <div>
                    <div className="infoBioPers">
                        <img src={call}/>
                        <span>+7 (954) 333-44-55</span>
                    </div>
                    <div className="infoBioPers">
                        <img src={mail}/>
                        <span>sykfafkar@gmail.com</span>
                    </div>
                </div>
            </div>
        </>
    )
}