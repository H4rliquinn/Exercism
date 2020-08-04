type Color = "black"|"brown"|"red"|"orange"|"yellow"|"green"|"blue"|"violet"|"grey"|"white";
export class ResistorColor {
  private colors: Color[];
  private lookup:Record<Color, number>={black:0,brown:1,red:2,orange:3,yellow:4,
      green:5,blue:6,violet:7,grey:8,white:9};

  constructor(colors: Color[]) {
    if (colors.length<2){
      throw "At least two colors need to be present";
    } 
    this.colors = colors;

  }
  value = (): number => {
      return (this.lookup[this.colors[0]]*10)+this.lookup[this.colors[1]];
  }
}
