/*let room = {
  height: 3 ,
  tv: 'samsung' ,
  big: true ,
}
console.log(room);
alert (typeof room.big)*/

/*let user = {
  name: "John",
  age: 30
};
if (user) {
  console.log(user)
};
if (user.age) {
  console.log(user.age);
};*/

/*let users = {
  user_1: {
    name: "John",
    age: 30
  },
  user_2: {
    name: "Bob",
    age: 21
  },
  user_3: {
    name: "Anna",
    age: 19
  }
};*/

/*let val = Object.assign({}, users.user_2);
console.log(val);

delete users.user_3;
console.log(users);*/

/*const obj = {
  id: 5,
  token: 12343423
};*/

let auto = {
  manufacturer: 'BMW',
  model: 'X5',
  'year of manufacture': 2021,
  'average speed': 90,
  'fuel tank volume': 22,
  'average fuel consumption per 100 km.': 10,
  drivers: {
    first: 'Олег'
  },
  liters: function (i=800) {
    return (i * (auto["average fuel consumption per 100 km."]/100))
  },
  time: function(i=100) {
    let a , b;
    a = i / auto["average speed"];
    b = a;
    for (a; a>4; a-=4) {
      b++;
    }
    return(b)
  },
};

alert (JSON.stringify(auto));

auto.drivers = {
  first: 'Олег',
  second: 'Віктор',
  };

alert (JSON.stringify(auto));

alert(auto.liters());
alert(auto.time());