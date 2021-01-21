let Account = {
  init(email, password, firstName, lastName) {
    email = email;
    password = password;
    lastName = lastName;
    firstName = firstName;
    displyName = (function () {
      let id = "";
      let letters = Array(26).fill().map((_, index) => String.fromCharCode(index + 97));
      let numbers = Array(10).fill().map((_,index) => index);
  
      let mix = letters.concat(numbers);

      while(id.length < 16) {
         let randomIndex = Math.floor(Math.random() * mix.length);
         id += mix[randomIndex];
      
      }
      return id;
    })();
    return {
      getPassword() {
        return password;
      }
    };
  },
  reanonymize(password) {
    if(this.getPassword === password) {
      this.displyName = (function () {
        let id = "";
        let letters = Array(26).fill().map((_, index) => String.fromCharCode(index + 97));
        let numbers = Array(10).fill().map((_,index) => index);
    
        let mix = letters.concat(numbers);
  
        while(id.length < 16) {
           let randomIndex = Math.floor(Math.random() * mix.length);
           id += mix[randomIndex];
        
        }
        return id;
      })();
      return true;
    }else{
      return "Invalid Password";
    }
  },
  resetPassword(currentPassword, newPassword) {
    if(this.getPassword === currentPassword){
      this.password = newPassword;
      return true;
    }else{
      return "Invalid Password";
    }
  },
  firstName(password) {
    if(this.getPassword === password){
     return this.firstName;
    }else{
      return "Invalid Password";
    }
  },
  lastName(password) {
    if(this.getPassword === password){
     return this.lastName;
    }else{
      return "Invalid Password";
    }
  },
  email(password) {
    if(this.getPassword === password){
     return this.email;
    }else{
      return "Invalid Password";
    }
  },
  displyName() {
    return this.displyName;
  }
}

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
// function shuffel(array) {
//   for(let i = 0; i < array.length - 2; i++) {
//       let j = Math.floor(i + Math.random() * (array.length - i));
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//   }

//   console.log(array); 
// }

// function generateId() {
//   let id = "";
//   let letters = Array(26).fill().map((_, index) => String.fromCharCode(index + 97));
//   let numbers = Array(10).fill().map((_,index) => index);
  
//   let mix = letters.concat(numbers);

//   while(id.length < 16) {
//     let randomIndex = Math.floor(Math.random() * mix.length);
//     id += mix[randomIndex];
//   }

//   return id;
// }



// console.log(generateId());