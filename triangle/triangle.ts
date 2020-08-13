export default class Triangle {

    sides: number[]

    constructor(...sides: number[]) {
        this.sides = sides
    }

    kind():string {
        if (this.sides.length>3){
            return "Error";
        }
        let a,b,c:number;
        a=this.sides[0];
        b=this.sides[1];
        c=this.sides[2];

        if (a==b && b==c){
            return "equilateral";
        } else if(a==b || b==c || a==c){
            return "isosceles"
        }else {
            return ""
        }
    }
}