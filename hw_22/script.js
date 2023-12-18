let header = {
  logo: {
    url: '/home',
    text: 'logo',
  },
  nav: {
    1: {
      url: '/home',
      text: 'Home',
    },
    2: {
      url: '/about',
      text: 'About',
    },
    3: {
      url: '/portfolio',
      text: 'Portfolio',
    },
    4: {
      url: '/contacts',
      text: 'Contacts',
    }
  },
  btn: ['LogIn', 'LogOut'],
}

let headerMain = document.createElement('header');
headerMain.style.cssText ='display: flex; justify-content: space-between; align-items: center; background-color: red'

let logoElement = document.createElement('a');
logoElement.href = header.logo.url;
logoElement.textContent = header.logo.text;
logoElement.style.cssText = 'border: 1px solid black; padding: 5px; color: white; background-color: blue;'
headerMain.append(logoElement);

let navMain = document.createElement('nav');
for (let item in header.nav) {
  let navElement = document.createElement('a');
  navElement.href = header.nav[item].url;
  navElement.textContent = header.nav[item].text;
  navMain.append(navElement);
  navElement.style.cssText = 'color: green; background-color: black; margin-left: 10px;';
}

headerMain.append(navMain);

navMain.style.cssText = 'display: flex;';

let btnMain = document.createElement('div');
for (let i = 0; i < 2; i++) {
  let btnElement = document.createElement('button');
  btnElement.textContent = header.btn[i];
  btnElement.style.cssText = 'margin-left: 5px;min-width: 60px; background-color: blue; color: white;';
  btnMain.append(btnElement);
}

headerMain.append(btnMain);

document.body.append(headerMain);