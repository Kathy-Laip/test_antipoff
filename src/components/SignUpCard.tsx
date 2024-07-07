import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'

export const SignUpCard: React.FC = () => {
    const navigator = useNavigate()

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [pass, setPas] = useState<string>('')
    const [passRep, setPassRep] = useState<string>('')

    const clickFirst = (num: number) => {
        let selectPas = num === 1 ? document.getElementById('firstPas')! : document.getElementById('secondPas')!
        if(selectPas.getAttribute('type') === 'password'){
            selectPas.setAttribute('type', 'text')
        } else{
            selectPas.setAttribute('type', 'password')
        }
    }

    const changeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.id === 'nameInput'){
            setName(event.target.value)
        }else if(event.target.id === 'emailInput'){
            setEmail(event.target.value)
        } else if(event.target.id === 'firstPas'){
            setPas(event.target.value)
        } else if(event.target.id === 'secondPas'){
            setPassRep(event.target.value)
        }
    }

    const reEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i

    const rePas = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/

    const nameRegex = /^[a-zA-Z\-]+$/;

    type DataPerson = {
        name: string, 
        email: string, 
        pass: string, 
        repeatPas: string
    }

    function signUp(data: DataPerson){

        let {name, email, pass, repeatPas} = data

        document.getElementById('warName')!.style.display = 'none'
        document.getElementById('warEmail')!.style.display = 'none'
        document.getElementById('warPas')!.style.display = 'none'
        document.getElementById('warPasR')!.style.display = 'none'


        if(!nameRegex.test(name)){
            document.getElementById('warName')!.style.display = 'block'
        }else if(!reEmail.test(email)){
            document.getElementById('warEmail')!.style.display = 'block'
            
        // }else if(rePas.test(pass)){
        //     document.getElementById('warPas')!.style.display = 'block'
        // }else if(pass !== repeatPas){
        //     document.getElementById('warPasR')!.style.display = 'block'
        } else{
            sessionStorage.setItem('user', JSON.stringify(data))
            navigator('/about')
        }
    }


    return (
        <div className="cardSignUp">
            <h2>Регистрация</h2>
            <form>
                <label>Имя</label> 
                <input id='nameInput' placeholder="Katya" onChange={changeInputs}/> 
                <span className="warning" id='warName'>Ошибка!</span>
                <label>Электронная почта</label> 
                <input id='emailInput' placeholder="example@gmail.com" type='email' onChange={changeInputs}/>
                <span className="warning" id='warEmail'>Ошибка!</span>
                <div className="pasBlock">
                    <label>Пароль</label>
                    <input type='password' id='firstPas' onChange={changeInputs}/>
                    <a href='#' className="password-control" onClick={() => clickFirst(1)}></a>
                    <span className="warning" id='warPas'>Ошибка!</span>
                </div>
                <div className="pasBlock">
                    <label>Подтвердите пароль</label> 
                    <input type='password' id='secondPas' onChange={changeInputs}/>
                    <a href='#' className="password-control" onClick={() => clickFirst(2)}></a>
                    <span className="warning" id='warPasR'>Ошибка!</span>
                </div>
                <button className="btn" onClick={() => signUp({name: name, email: email, pass: pass, repeatPas: passRep})}><h2>Зарегестрироваться!</h2></button>
            </form>
        </div>
    )
}