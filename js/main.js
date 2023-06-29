let yearOfBirth = prompt('Введіть рік свого народження');
let calcYear = 2023 - yearOfBirth;
console.log(yearOfBirth);

let cityOfResidence = prompt('Введіть місто у якому проживаєте');
console.log(cityOfResidence);

let favSport = prompt('Введіть улюблений вид спорту');
console.log(favSport);

let capitalCity = 'Ви живете у місті: ';
let checkSport = 'Ваш улюблений спорт: ';

result = {
  age: calcYear,
  city: cityOfResidence,
  sport: favSport,
};

if (isNaN(yearOfBirth)) {
  alert('Використайте цифри для введення свого року народження')
  result.age = 'не встанволено'
} else if (yearOfBirth === null) {
  alert('шкода, що Ви не захотіли ввести свій вік народження')
  result.age = 'не вказано'
}

if (cityOfResidence === null) {
  alert('шкода, що Ви не захотіли ввести своє місто проживання')
  result.city = 'не вказано'
} else if (cityOfResidence === 'Київ') {
  capitalCity = 'Ти живеш у столиці України'
  result.city = '';
} else if (cityOfResidence === 'Вашингтон') {
  capitalCity = 'Ти живеш у столиці США'
  result.city = '';
} else if (cityOfResidence === 'Лондон') {
  capitalCity = 'Ти живеш у столиці Англії'
  result.city = '';
};

if (favSport === null) {
  alert('шкода, що Ви не захотіли ввести свій улюблений вид спорту')
  result.sport = 'не вказано'
}

switch (favSport) {
  case 'бокс':
    checkSport = 'Круто! Хочешь стати Майком Тайсоном?';
    alert('Ваш вік: ' + result.age + '\n' + capitalCity + result.city + "\n" + checkSport);
    break;
  case 'плавання':
    checkSport = 'Круто! Хочешь стати Майклом Фелпсом?';
    alert('Ваш вік: ' + result.age + '\n' + capitalCity + result.city + "\n" + checkSport);
    break;
  case 'гольф':
    checkSport = 'Круто! Хочешь стати Тайгером Вудсом?';
    alert('Ваш вік: ' + result.age + '\n' + capitalCity + result.city + "\n" + checkSport);
    break;
  default:
    alert('Ваш вік: ' + result.age + '\n' + capitalCity + result.city + "\n" + checkSport + result.sport);
};