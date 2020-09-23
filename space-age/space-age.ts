import { Agent } from "http";


class SpaceAge{
    seconds=0;
    earthYear=31557600;
    earthYearsInt=0;
    constructor(seconds:number){
        this.seconds=seconds;
        this.earthYearsInt=this.seconds/this.earthYear*100;
    }

    computeSpaceAge(op:number):number{
        return Math.round((this.earthYearsInt)/op)/100;
    }

    onEarth():number{
        return this.computeSpaceAge(1);
    }
    onMercury():number{
        
        return this.computeSpaceAge(0.2408467);
    }
    onVenus():number{
        return Math.round((this.earthYearsInt/0.2408467))/100;
    }
    onMars():number{
        return Math.round((this.earthYearsInt/0.2408467))/100;
    }
    onJupiter():number{
        return Math.round((this.earthYearsInt/0.2408467))/100;
    }
    onSaturn():number{
        return Math.round((this.earthYearsInt/0.2408467))/100;
    }
    onUranus():number{
        return Math.round((this.earthYearsInt/0.2408467))/100;
    }
    onNeptune():number{
        return Math.round((this.earthYearsInt/0.2408467))/100;
    }
}

export default SpaceAge