export class ResistorColor {
  private colors: string[];
  private lookup:{[key:string]:string}={black:"0",brown:"1",red:"2",orange:"3",yellow:"4",
      green:"5",blue:"6",violet:"7",grey:"8",white:"9"};

  constructor(colors: string[]) {
    this.colors = colors;
  }
  value = (): number => {
    return parseInt(this.lookup[this.colors[0]]+this.lookup[this.colors[1]]);
  }
}
