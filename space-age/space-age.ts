class SpaceAge{
    seconds:number;
    earthYears:number;
    constructor(seconds:number){
        this.seconds=seconds;
        this.earthYears=this.seconds/31557600;
    }

    computeSpaceAge(op:number):number{
        return Math.round((this.earthYears/op)*100)/100;
    }

    onEarth():number{
        return this.computeSpaceAge(1);
    }
    onMercury():number{
        return this.computeSpaceAge(0.2408467);
    }
    onVenus():number{
        return this.computeSpaceAge(0.61519726);
    }
    onMars():number{
        return this.computeSpaceAge(1.8808158);
    }
    onJupiter():number{
        return this.computeSpaceAge(11.862615);
    }
    onSaturn():number{
        return this.computeSpaceAge(29.447498);
    }
    onUranus():number{
        return this.computeSpaceAge(84.016846);
    }
    onNeptune():number{
        return this.computeSpaceAge(164.79132);
    }
}

export default SpaceAge