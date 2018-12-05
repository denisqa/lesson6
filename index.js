require('dotenv').config();
const mysql = require('mysql');
const util = require('util');
const Car = require('./car');
const User = require('./user');

global.db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

global.db.query = util.promisify(global.db.query);



// Открыть с БД и вывести в консоль сузествующего пользователя с машинами
let car = new Car();
car.load(1);
car.loadAll();

let user = new User();
user.load(1);
user.loadAll();

// Создать нового пользователя
let user1 = new User();
user1.first_name='John7999';
user1.last_name='John777';
user1.age=25;
user1.gender='M';
user1.save();

// Изменить имя пользователю
let user2 = new User();
user2.id=5;
user2.first_name='Andrew';
user2.save();

// Удалить пользователя
user.delete(14);

// Добавить пользователю новую машину
carFields = {'user_id': 15, 'model': 'Tesla', 'year': 2018};
let car1 = new Car();
car1.user_id=15;
car1.model='Tesla222';
car1.year=2019;
car1.save();