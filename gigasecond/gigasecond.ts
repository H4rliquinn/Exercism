export default class Gigasecond {

    constructor(private currentDate:Date){    
    }
    date(){
        console.log("TEST",this.currentDate,this.currentDate.getTime());
        return new Date(this.currentDate.getTime()+((10**9)*1000));//
    }
}