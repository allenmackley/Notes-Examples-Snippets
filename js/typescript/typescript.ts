//we can create an interface to define types
interface Person {
  name: string;
  age: string;
}

class Greeter {
  name: string;
  sayHello() {
    console.log("Hello" + name);
  }
}
//"a" should be of type person array
function sortByName(a: Person[]) {
  var result = a.slice(0);
  result.sort((x, y) => {
    return x.name.localeCompare(y.name);
  });
  return result;
});

sortByName([]);