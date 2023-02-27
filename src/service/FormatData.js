class FormatData {

    /**
     *  Convert data to strings
     * @param {{id:number, keyData: object, todayScore: number, userInfos:{firstName:string, lastName: string, age: number} }} data 
     * @returns string
     */
    infos(data) {
        return String(data.userInfos.firstName)
    }

    /**
     * Convert data to strings and number
     * @param {{day:string, kilogram:number, calories: number}} data 
     * @returns object
     */
    bar(data) {

        data.map(item => {
            item.day = String(item.day[item.day.length - 1])//We retrieve the days in the date: then convert to a string
            item.kilogram = parseInt(item.kilogram, 10)
            item.calories = parseInt(item.calories, 10)
            return item;
        })
        return data;
    };

    /**
     * Change data to string, and convert data to number
     * @param {[{day:number, sessionLength:number}]} data 
     * @returns [Object]
     */
    line(data) {
        data.map(item => {

            //Change numbers to week letters
            switch (item.day) {
                case 1:
                    item.day = "L"
                    break;
                case 2:
                    item.day = "M"
                    break;
                case 3:
                    item.day = "M"
                    break;
                case 4:
                    item.day = "J"
                    break;
                case 5:
                    item.day = "V"
                    break;
                case 6:
                    item.day = "S"
                    break;
                case 7:
                    item.day = "D"
                    break;
                default: return "";
            }

            item.sessionLength = parseInt(item.sessionLength, 10)
            return item;
        })
        return data;
    };

    /**
     * Translate into French and assign the data to the "data" array
     * @param {{data:[{value:number, kind:string}],kind:{number,string},userId:number}} data 
     * @returns object
     */
    radar(data) {

        function translateFrench(item) {
            switch (item) {
                case 'cardio': return "Cardio";
                case 'energy': return "Energie";
                case 'endurance': return "Endurance";
                case 'strength': return "Force";
                case 'speed': return "Vitesse";
                case 'intensity': return "Intensité";
                default: return "";
            }
        }

        let saveCategoryItem = [];
        let saveValueItem = [];
        //Save starting items
        for (let i = 1; i <= 6; i++) {
            saveCategoryItem[i] = translateFrench(data.kind[i]);
            saveValueItem[i-1] = data.data[i-1].value; //the array starts at 0, but the loop at 1
        }
        //Save: the new position of the items
        orderItem(6, 5, 4, 3, 2, 1); //Order items on display (clockwise)
        function orderItem(a, b, c, d, e, f) {
            data.data.map((item) => {
                switch (item.kind) {
                    case 1:
                        item.kind = saveCategoryItem[a];
                        item.value = saveValueItem[a];
                        break;
                    case 2:
                        item.kind = saveCategoryItem[b];
                        item.value = saveValueItem[b];
                        break;
                    case 3:
                        item.kind = saveCategoryItem[c];
                        item.value = saveValueItem[c];
                        break;
                    case 4:
                        item.kind = saveCategoryItem[d];
                        item.value = saveValueItem[d];
                        break;
                    case 5:
                        item.kind = saveCategoryItem[e];
                        item.value = saveValueItem[e];
                        break;
                    case 6:
                        item.kind = saveCategoryItem[f];
                        item.value = saveValueItem[f];
                        break;
                    default: return "";
                }


                return item;
            })
        }

        return data;
    };

    /**
     * Get data (todayScore or score) and convert it
     * @param {{id:number, keyData: object, todayScore: number, userInfos:{firstName:string, lastName: string, age: number} }} data 
     * @returns number
     */
    pie(data) {
        if (isNaN(data.score)) {
            data.todayScore = parseFloat(data.todayScore);
            return data.todayScore;
        } else {
            data.score = parseFloat(data.score);
            return data.score;
        }
    };

    /**
     * Retrieves, converts and modifies the display of the score
     * @param {{id:number, keyData: object, todayScore: number, userInfos:{firstName:string, lastName: string, age: number} }} data 
     * @param {string} type 
     * @returns string
     */
    success(data, type) {
        switch (type) {
            case 'Calories': return (data.keyData.calorieCount = parseInt(data.keyData.calorieCount, 10) + "kCal");
            case 'Proteines': return (data.keyData.proteinCount = parseInt(data.keyData.proteinCount, 10) + "g");
            case 'Glucides': return (data.keyData.carbohydrateCount = parseInt(data.keyData.carbohydrateCount, 10) + "g");
            case 'Lipides': return (data.keyData.lipidCount = parseInt(data.keyData.lipidCount, 10) + "g");
            default: return "";
        }

    }

}
export default FormatData;