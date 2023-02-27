import axios from "axios"
const mockedData = false;

/**
 * Retrieves info from backend or saved in app
 * @param {number} id 
 * @returns {{id:number, keyData: object, todayScore: number, userInfos:{firstName:string, lastName: string, age: number} }}
 */
async function getUser(id) {
    if (!mockedData) {
        const myUser = (await axios.get('http://localhost:3000/user/' + id)).data;
        return myUser;
    } else {
        return {
            "data": {
                "id": 2,
                "userInfos": {
                    "firstName": "Matilda",
                    "lastName": "Quinn",
                    "age": 33
                },
                "todayScore": 0.42,
                "keyData": {
                    "calorieCount": 2930,
                    "proteinCount": 150,
                    "carbohydrateCount": 200,
                    "lipidCount": 55
                }

            }
        }

    }
}

/**
 * Retrieves info from backend or saved in app
 * @param {number} id 
 * @returns {{userId:number, sessions:[{day:string, kilogram:number, calories:number}]}}
 */
async function getActivity(id) {
    if (!mockedData) {
        const myActivity = (await axios.get('http://localhost:3000/user/' + id + '/activity')).data;
        return myActivity;
    } else {
        return {

            "data": {
                "userId": 18,
                "sessions": [
                    {
                        "day": "2021-05-01",
                        "kilogram": 68,
                        "calories": 240
                    },
                    {
                        "day": "2020-05-02",
                        "kilogram": 69,
                        "calories": 220
                    },
                    {
                        "day": "2020-05-03",
                        "kilogram": 70,
                        "calories": 280
                    },
                    {
                        "day": "2020-05-04",
                        "kilogram": 69,
                        "calories": 400
                    },
                    {
                        "day": "2020-05-05",
                        "kilogram": 69,
                        "calories": 150
                    },
                    {
                        "day": "2020-05-06",
                        "kilogram": 70,
                        "calories": 142
                    },
                    {
                        "day": "2020-05-07",
                        "kilogram": 69,
                        "calories": 300
                    }
                ]
            }
        }

    }
}

/**
 * Retrieves info from backend or saved in app
 * @param {number} id 
 * @returns {{userId:number, sessions:[{day:number, sessionLength:number}]}}
 */
async function getSession(id) {
    if (!mockedData) {
        const mySession = (await axios.get('http://localhost:3000/user/' + id + '/average-sessions')).data;
        // console.log('sess',mySession);
        return mySession;
    } else {
        return {
            "data": {
                "userId": 18,
                "sessions": [
                    {
                        "day": 1,
                        "sessionLength": 20
                    },
                    {
                        "day": 2,
                        "sessionLength": 30
                    },
                    {
                        "day": 3,
                        "sessionLength": 50
                    },
                    {
                        "day": 4,
                        "sessionLength": 40
                    },
                    {
                        "day": 5,
                        "sessionLength": 30
                    },
                    {
                        "day": 6,
                        "sessionLength": 40
                    },
                    {
                        "day": 7,
                        "sessionLength": 50
                    }
                ]
            }
        }

    }
}

/**
 * Retrieves info from backend or saved in app
 * @param {number} id 
 * @returns {{userId:number, kind:{string,string},data:[{value:number,kind:number}]}}
 */
async function getPerformance(id) {
    if (!mockedData) {
        const myPerformance = (await axios.get('http://localhost:3000/user/' + id + '/performance')).data;

        return myPerformance;
    } else {
        return {

            "data": {
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
                        "value": 20,
                        "kind": 1
                    },
                    {
                        "value": 140,
                        "kind": 2
                    },
                    {
                        "value": 180,
                        "kind": 3
                    },
                    {
                        "value": 50,
                        "kind": 4
                    },
                    {
                        "value": 90,
                        "kind": 5
                    },
                    {
                        "value": 50,
                        "kind": 6
                    }
                ]
            }

        }

    }
}


export { getUser, getActivity, getSession, getPerformance };






