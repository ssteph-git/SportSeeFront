class FormatData{
    /**
     * 
     * @param {*} e 
     * @returns 
     */
    Bar(e){
        e.map(x => {
            x.day = String(x.day[x.day.length-1])//récupération des jours dans la date: puis conversion en string
            x.kilogram =  parseInt(x.kilogram, 10)
            x.calories =  parseInt(x.calories, 10)
            return x;
        })
        return e;
    };

    Line(e){
        
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
                // default: x.day = "";
              }
            
            // x.day[i] = String(x.day)
            x.sessionLength =  parseInt(x.sessionLength, 10)
            return x;
        })
        return e;
    };

    radar(e){
        e.data.map((x) => {
            // x.value = parseInt(x.value, 10);
              switch (x.kind) {
                case 1:
                    x.kind = e.kind[1];
                  break;
                case 2:
                    // x.kind = "energy"
                    x.kind = e.kind[2];
                break;
                case 3:
                    // x.kind = "endurance"
                    x.kind = e.kind[3];
                break;
                case 4:
                    // x.kind = "strength"
                    x.kind = e.kind[4];
                break;
                case 5:
                    // x.kind = "speed"
                    x.kind = e.kind[5];
                break;
                case 6:
                    // x.kind = "intensity"
                    x.kind = e.kind[6];
                break;
                // default: 
                // x.kind = "";
              }
            
            // x.day[i] = String(x.day)
            // x.sessionLength =  parseInt(x.sessionLength, 10)
            return x;
        })
       return e;
    };

    pie(e){
       e.score = parseFloat(e.score);
       return e.score;
    };

    
}
export default FormatData;