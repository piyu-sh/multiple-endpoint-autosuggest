Welcome.
 
Prerequisites
---
mongodb must be installed

Setup
---

Install the dependencies and runs production build on postintall
```
npm install
```
 
Usage
---


Start database:

```

for windows
---
npm run db 
npm run db-data

for linux
---
sudo service mongod start
npm run db-data

```

Start the server with this command:
 
```
npm start
```

Access the application at
 
```
http://localhost:3000
```


Additional Commands
---


Development

Runs tests and if successfull, prepares development build

```
npm run build-dev
```

Production

Prepares production build

```
npm run build-prod
```

Run test cases:
 
```
npm test
```

Node API 

```
Post man can be used to list, create, update, delete and find hotels

GET at localhost:3000/hotels list all hotels
POST at localhost:3000/hotels, click body and select “x-www-form-urlencoded”, fill "name" and "location" as keys, and send 
GET at localhost:3000/hotels/hotelName gets hotels containing hotelName in "name" of hotels
PUT at localhost:3000/hotels/hotelId and select “x-www-form-urlencoded”, fill "name" and "location" as keys, and send to update hotel 
DELETE at localhost:3000/hotels/hotelId deletes hotel with hotelId
```
