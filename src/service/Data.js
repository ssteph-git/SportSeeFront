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


async function getActivity(id) {
    if(!mockedData) {
    const myActivity = (await axios.get('http://localhost:3000/user/'+id+'/activity')).data;
    return myActivity;
    }else {
        return { 
                "data": {
                    "userId": 18,
                    "sessions": [
                        {
                            "day": "2020-07-01",
                            "kilogram": 70,
                            "calories": 240
                        },
                        {
                            "day": "2020-07-02",
                            "kilogram": 69,
                            "calories": 220
                        },
                        {
                            "day": "2020-07-03",
                            "kilogram": 70,
                            "calories": 280
                        },
                        {
                            "day": "2020-07-04",
                            "kilogram": 70,
                            "calories": 500
                        },
                        {
                            "day": "2020-07-05",
                            "kilogram": 69,
                            "calories": 160
                        },
                        {
                            "day": "2020-07-06",
                            "kilogram": 69,
                            "calories": 162
                        },
                        {
                            "day": "2020-07-07",
                            "kilogram": 69,
                            "calories": 390
                        }
                    ]
                }
    }
    
    }
}

async function getSession(id) {
    if(!mockedData) {
    const mySession = (await axios.get('http://localhost:3000/user/'+id+'/average-sessions')).data;
    // console.log('sess',mySession);
    return mySession;
    }else {
        return { 
                "data": {
                    "userId": 18,
                    "sessions": [
                        {
                            "day": "1",
                            "sessionLength": 30
                        },
                        {
                            "day": "2",
                            "sessionLength": 40
                        },
                        {
                            "day": "3",
                            "sessionLength": 50
                        },
                        {
                            "day": "4",
                            "sessionLength": 30
                        },
                        {
                            "day": "5",
                            "sessionLength": 30
                        },
                        {
                            "day": "6",
                            "sessionLength": 50
                        },
                        {
                            "day": "7",
                            "sessionLength": 50
                        }
                    ]
                } 
    }
    
    }
}

async function getPerformance(id) {
    if(!mockedData) {
    const myPerformance = (await axios.get('http://localhost:3000/user/'+id+'/performance')).data;

    return myPerformance;
    }else {
        return { 
            
                "userId": 18,
                "kind": {
                    "1": "cardio",
                    "2": "energy",
                    "3": "endurance",
                    "4": "strength",
                    "5": "speed",
                    "6": "intensity"
                },
                "data": [
                    {
                        "value": 200,
                        "kind": 1
                    },
                    {
                        "value": 240,
                        "kind": 2
                    },
                    {
                        "value": 80,
                        "kind": 3
                    },
                    {
                        "value": 80,
                        "kind": 4
                    },
                    {
                        "value": 220,
                        "kind": 5
                    },
                    {
                        "value": 110,
                        "kind": 6
                    }
                ]
            
    }
    
    }
}   


export {getUser, getActivity, getSession, getPerformance};






