class FormatData{

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
            x.day = String(x.day)
            x.sessionLength =  parseInt(x.sessionLength, 10)
            return x;
        })
        return e;
    };
}
export default FormatData;