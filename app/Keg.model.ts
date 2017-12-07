export class Keg {
  public static kegs: Keg[] = [];
  static getAll() {
    return Keg.kegs;
  }

  vol: number;
  id: number
  constructor(public name: string, public brand: string, public price:number=10, public abv:number=12.7, public maxVol:number=124) {
    this.vol = maxVol;
  };

  save() {
    this.id = Keg.kegs.length;
    Keg.kegs.push(this);
  }
}

new Keg("Budweiser","Anheuser-Busch",4,6),
new Keg("Heineken","Heineken Holding",5,8),
new Keg("Blue Moon","MillerCoors",6,12)
