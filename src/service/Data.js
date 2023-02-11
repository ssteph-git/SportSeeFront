import axios from "axios"
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
const mockedData = false;

async function getUser(id) {
    if(!mockedData) {
    const myUser = (await axios.get('http://localhost:3000/user/'+id)).data;
    return myUser;
    }else {
        return { 
            "data": {
                "id": 2,
                "userInfos": {
                    "firstName": "K",
                    "lastName": "Dovineau",
                    "age": 31
                },
                "todayScore": 0.12,
                "keyData": {
                    "calorieCount": 1930,
                    "proteinCount": 155,
                    "carbohydrateCount": 290,
                    "lipidCount": 50
                }
            
        }
    }
    
    }
}


export default getUser;