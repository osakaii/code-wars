import React, { useState, useEffect} from 'react';
import './UserRaw.css'
import { getChallenge, getUserInfo } from '../../axios';

function UserRaw({data}) {
    const [ userData, setUserData] = useState({})

    const getData = async () =>{
        const responseUser = await getUserInfo(data.userName)
        const responseChallenge = await getChallenge(responseUser.data[0].id)
        setUserData(responseUser)
    }
    useEffect(()=>{
        getData()
    },[])

    return (
        <div className='grid__raw'>
            <div className='grid__rawItem'>
                 {data.name}
            </div>
            <div className='grid__rawItem'>
                 {userData?.totalItems}
            </div>
            <div className='grid__rawItem'>
                 {0}
            </div>
        </div>
    );
}

export default UserRaw;