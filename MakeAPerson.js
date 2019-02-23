/*Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.
*/

var Person = function(firstAndLast) {
    let fullName = firstAndLast;
    
    this.getFirstName = () => {
      return fullName.split(' ')[0];
    };

    this.getLastName = () => {
      return fullName.split(' ')[1];
    };

    this.getFullName = () => {
      return fullName;
    };

    this.setFirstName = (first) => {
      fullName = `${first} ${fullName.split(' ')[1]}`;
    };

    this.setLastName = (last) => {
      fullName = `${fullName.split(' ')[0]} ${last}`;
    };

    this.setFullName = (firstAndLast) => {
      fullName = firstAndLast;
    };
    
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFirstName();