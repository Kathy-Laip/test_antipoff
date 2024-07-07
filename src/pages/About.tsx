import React, {useState, useEffect} from "react";
import { AboutHeader } from "../components/AboutHeader";
import { Card } from "../components/CardPerson";

export const About: React.FC = () => {
    let [users, setUsers] = useState(Array<Object>)

    useEffect(() => {
        const d = async () => {
            const result = await fetch('https://reqres.in/api/users?page=2').then(ans => ans.json())
            setUsers(result.data)
        }
        d()
    }, [])


    // {id: 7, email: 'michael.lawson@reqres.in', first_name: 'Michael', last_name: 'Lawson', avatar: 'https://reqres.in/img/faces/7-image.jpg'}
    return (
        <>
            <AboutHeader/>
            <div id="cards">
                {users.map(user => (<Card info={user}/>))}
            </div>
        </>
    )
}