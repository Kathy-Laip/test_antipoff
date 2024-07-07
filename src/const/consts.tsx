import {useNavigate} from 'react-router-dom'
const reEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i

const rePas = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/

const nameRegex = /^[a-zA-Z\-]+$/;

type DataPerson = {
    name: string, 
    email: string, 
    pass: string, 
    repeatPas: string
}

