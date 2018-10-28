const MongoClient = require('mongodb').MongoClient;

const MONGO_URL =
  'mongodb://kevin:tech123@ds143683.mlab.com:43683/mentors-mentees';

MongoClient.connect(
  MONGO_URL,
  (err, db) => {
    if (err) {
      return console.log(err);
    }

    // Do something with db here, like inserting a record
    db.collection('notes').insertOne(
      {
        title: 'Hello MongoDB',
        text: 'Hopefully this works!',
      },
      function(err, res) {
        if (err) {
          db.close();
          return console.log(err);
        }
        // Success
        db.close();
      }
    );
  }
);
