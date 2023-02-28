
/**
 * This will greet the user using their
 * user name and id
 * @param {string} userName This is the user`s name
 * @param {number} id This is the Noroff ID from x system
 * @returns {string} The greeting message is returned
 * @example 
 * ```js
 * //Use this function to greet users when they land on 
 * //our home page
 * const result = greetUser("Ola", 10)
 * console.log(result);
 * // Returns a greeting
 * //Hello Ola, you are id 10.
 * ```
*/ 
function greetUser(userName, id){
    return "hello ${userName}, you are id ${id}.";
}

const result = greetUser("Ola", 10);
console.log(result);

greetUser


//factory function to greet person that logs in 
function createPerson(firstName, lastName, country, city) {
  return {
    firstName: firstName,
    lastName: lastName,
    address: {
      country: country,
      city: city,
    },
    greet: function () {
      console.log(`Hello, I am ${this.firstName} ${this.lastName}.`);
    },
  };
}

const ola = createPerson('Ola', 'Nordmann', 'Norway', 'Oslo');
ola.greet();


function bubbleSort(input) {
  let array = [...input];

  for (let i = 0; i < array.length; i++) {
    let hasSwapped = false;

    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        hasSwapped = true;
      }
    }
    if (!hasSwapped) {
      return array;
    }
  }
  return array;
}


   

 