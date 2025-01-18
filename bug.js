```javascript
const MongoClient = require('mongodb').MongoClient;

async function main() {
  const uri = "mongodb+srv://<username>:<password>@<cluster-address>?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mydb');
    const collection = db.collection('mycollection');

    // Incorrect use of updateOne - missing upsert option
    const result = await collection.updateOne({ name: 'John Doe' }, { $set: { age: 30 } });
    console.log(result);
  } finally {
    await client.close();
  }
}

main().catch(console.dir);
```