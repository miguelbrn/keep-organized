/* eslint-disable no-undef */
require('dotenv').config()
const { MongoClient } = require('mongodb');

const dbName = 'keepOrganized';
const cluster = process.env.CLUSTER_DB;
const username = process.env.USER_DB;
const password = process.env.PASSWORD_DB;

const uri = `mongodb+srv://${username}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority`;

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
