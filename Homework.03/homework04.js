// 4. Using the constructor function, create an object and methods to support the following functionality

function ProfileInfo() {
   this.setUserName = ((setName) => {
      this.setName = setName;
   })

   this.getUserName = (() => {
      return this.setName;
   })

   this.setEmail = ((setMail) => {
      this.setEmail = setMail
   })
   this.getEmail = (() => {
      return this.setEmail
   })

   this.setAddress = ((address) => {
      this.address = address
   })
   this.getAddress = (() => {
      return this.address;
   })
}

const profileInfo = new ProfileInfo();
profileInfo.setUserName("David");
profileInfo.setEmail("Davidhabetyanm@gmail.com");
profileInfo.setAddress("Armenia/Yerevan")
console.log(profileInfo.getUserName());
console.log(profileInfo.getEmail());
console.log(profileInfo.getAddress());


function User() {
   this.setName = ((name) => {
      this.name = name;
   })

   this.getName = (() => {
      return this.name;
   })

   this.setAge = ((age) => {
      this.age = age;
   })

   this.getAge = (() => {
      return this.age;
   })

   this.setProfileInfo = ((profileInfo) => {
      this.profileInfo = profileInfo;
   })

   this.getProfileInfo = (() => {
      return this.profileInfo
   })
}

const user = new User();

user.setName("John");
console.log(user.getName())
user.setAge(63);
console.log(user.getAge());
user.setProfileInfo(new ProfileInfo());
console.log(user.getProfileInfo())
