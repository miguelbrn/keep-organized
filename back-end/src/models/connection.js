require('dotenv').config()
const { MongoClient } = require('mongodb');

const dbName = 'keepOrganized';
const cluster = 'cluster0.j307p.mongodb.net';
const username = process.env.USER_DB;
const password = process.env.PASSWORD_DB;
console.log({ username, password })

const uri = `mongodb+srv://${username}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority`;

// const uri = `mongodb+srv://miguelalb:Mm21101995@cluster0.j307p.mongodb.net/keepOrganized?retryWrites=true&w=majority`;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const connection = () => (
  db ? Promise.resolve(db)
    : MongoClient.connect(uri, OPTIONS)
      .then((conn) => {
        db = conn.db(dbName);
        return db
      }));

module.exports = connection;
