const parseSchema = require("mongodb-schema");
const MongoClient = require("mongodb").MongoClient;
const dbName = "tanseeq";
const collectionName = "students";
const data = require("./schema.json");
/*
const run = () => {
  MongoClient.connect(
    `mongodb://localhost:27017/${dbName}`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      if (err) return console.error(err);

      const db = client.db(dbName);

      // here we are passing in a cursor as the first argument. You can
      // also pass in a stream or an array of documents directly.
      parseSchema(db.collection(`${collectionName}`).find(), (err, schema) => {
        if (err) return console.error(err);
        //   const result = JSON.stringify(schema);
        //   const picked =
        //   console.log(result);
        console.log(JSON.stringify(schema, null, 2));
        // return JSON.stringify(schema, null, 2);
        client.close();
      });
    }
  );
};

run();
*/

let table = `<table>`;
table += `<th>key</th><th>type</th>`;

data.fields.forEach((item) => {
  table += `<tr>`;
  if (item.name !== "__v" && item.name !== "_id") {
    table += `<td>${item.name}</td>
         <td>${item.types[0].name}</td>`;
  }
  table += `</tr>`;
});

table += `</table>`;
console.log(table);

//====================================
/*
const data = require("./schema.json");

console.log(data);

console.log(`key \t\t type`);
data.forEach((item) => console.log(`${item._id.key} \t\t ${item.value.types}`));
*/
//====================================
/*
const MongoClient = require("mongodb").MongoClient;
const dbName = "bloglist";
// Connection url
var url = `mongodb://localhost:27017/${dbName}`;
const client = new MongoClient(url, { useUnifiedTopology: true }); // { useUnifiedTopology: true } removes connection warnings;

client
  .connect()
  .then((client) => client.db(dbName).listCollections().toArray()) // Returns a promise that will resolve to the list of the collections
  .then((cols) => console.log("Collections", cols))
  .finally(() => client.close());
*/
