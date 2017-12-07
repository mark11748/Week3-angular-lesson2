export class Keg {
  public static kegs: Keg[] = [];
  static GetAll() {
    return Keg.kegs;
  }

  vol: number;
  id: number
  constructor(public name: string, public brand: string, public price:number=10, public abv:number=12.7, public maxVol:number=124) {
    this.vol = maxVol;
    this.id = Keg.kegs.length;
    Keg.kegs.push(this);
  };
}
