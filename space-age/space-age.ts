

class SpaceAge{
    seconds=0;
    earthYear=31557600;
    constructor(seconds:number){
        this.seconds=seconds;
    }
    onEarth():number{
        return Math.round((this.seconds/this.earthYear*100))/100;
    }
    onMercury():number{
        
        return Math.round((this.seconds/this.earthYear/0.2408467*100))/100;
    }
    onVenus():number{
        return this.seconds;
    }
    onMars():number{
        return this.seconds;
    }
    onJupiter():number{
        return this.seconds;
    }
    onSaturn():number{
        return this.seconds;
    }
    onUranus():number{
        return this.seconds;
    }
    onNeptune():number{
        return this.seconds;
    }
}

export default SpaceAge