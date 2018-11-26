const express = require ('express')
const app = express()
const Client = require('bitcoin-core');
//const client = new Client({ network: 'regtest' });
// const client_c = new Client({ port: 8332 });
// //127.0.0.1
// const fs = require('fs');
const client = new Client({
    ssl: {
        host: '127.0.0.1',
      enabled: true,
      username:'bitcoinN0deAccess',
      password:'bitc0inRPCpass',
      port: 8332,
      strict: false
    }
  });
//   const client = new Client({ headers: true });
  client.getInfo().then(([body, headers]) => console.log(body, headers));

  app.listen(3000,()=> console.log("Server is running at http://localhost:3000"));
 