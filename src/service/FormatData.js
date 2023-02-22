class FormatData {
    /**
     * 
     * @param {*} e 
     * @returns 
     */
    Bar(e) {
        e.map(x => {
            x.day = String(x.day[x.day.length - 1])//récupération des jours dans la date: puis conversion en string
            x.kilogram = parseInt(x.kilogram, 10)
            x.calories = parseInt(x.calories, 10)
            return x;
        })
        return e;
    };

    Line(e) {

        e.map(x => {
            switch (x.day) {
                case 1:
                    x.day = "L"
                    break;
                case 2:
                    x.day = "M"
                    break;
                case 3:
                    x.day = "M"
                    break;
                case 4:
                    x.day = "J"
                    break;
                case 5:
                    x.day = "V"
                    break;
                case 6:
                    x.day = "S"
                    break;
                case 7:
                    x.day = "D"
                    break;
                default: return "";
            }

            x.sessionLength = parseInt(x.sessionLength, 10)
            return x;
        })
        return e;
    };

    radar(e) {
        function translateFrench(e) {
            switch (e) {
                case 'cardio': return "Cardio";
                case 'energy': return "Energie";
                case 'endurance': return "Endurance";
                case 'strength': return "Force";
                case 'speed': return "Vitesse";
                case 'intensity': return "Intensité";
                default: return "";
            }
        }

        e.data.map((x) => {
            switch (x.kind) {
                case 1:
                    x.kind = translateFrench(e.kind[1]);
                    break;
                case 2:
                    x.kind = translateFrench(e.kind[2]);
                    break;
                case 3:
                    x.kind = translateFrench(e.kind[3]);
                    break;
                case 4:
                    x.kind = translateFrench(e.kind[4]);
                    break;
                case 5:
                    x.kind = translateFrench(e.kind[5]);
                    break;
                case 6:
                    x.kind = translateFrench(e.kind[6]);
                    break;
                default: return "";
            }


            return x;
        })
        return e;
    };

    pie(e) {
        if (isNaN(e.score)) {
            e.todayScore = parseFloat(e.todayScore);
            return e.todayScore;
        } else {
            e.score = parseFloat(e.score);
            return e.score;
        }
    };


}
export default FormatData;