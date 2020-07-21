export default class Gigasecond {

    constructor(private currentDate:Date){    
    }
    date(){
        return new Date(this.currentDate.getTime()+((10**9)*1000));//
    }
}