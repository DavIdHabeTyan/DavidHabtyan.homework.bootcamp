// 06. Create a TV class with properties like brand, channel and volume.

class TV {
   constructor(brand, channel = 1, volume = 50) {
      this.brand = brand;
      this.channel = channel;
      this.volume = volume;

   }

   increaseVolume =  () =>{
      if (this.volume > 0 && this.volume < 100) {
         return this.volume++
      } else {
         return "volume or minimum 0 or maximum 100"
      }

   }
   decreaseVolume = () => {
      if (this.volume >= 0 && this.volume <= 100) {
         return this.volume--
      } else {
         return "volume or minimum 0 or maximum 100"
      }
   }

   setChannel = (set) => {
      return this.channel = set
   }


   reset = () => {
      this.channel = 50;
      this.volume = 1;
   }

   status = () => {
      return `${this.brand} at channel ${this.channel}, volume ${this.volume}`
   }
}

let tv = new TV("Samsung", 10, 5);
console.log(tv.setChannel(60))

console.log(tv.decreaseVolume())
console.log(tv.decreaseVolume())
console.log(tv.decreaseVolume())

console.log(tv.status())
console.log(tv.reset())
console.log(tv.status())


//// undefined method kancheluc.