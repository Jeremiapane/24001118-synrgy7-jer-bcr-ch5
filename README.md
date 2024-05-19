
# Synrgy Challenge 5

Repositori ini dibuat dengan tujuan menyelesaikan tantangan ke-5 dari Synrgy Academy, yang melibatkan pembuatan HTTP Server dan implementasi RESTful API.




## Run Locally

Clone the project

```bash
git clone https://github.com/Jeremiapane/24001118-synrgy7-jer-bcr-ch5.git
```

Go to the project directory

```bash
cd synrgy7-jer-bcr-ch5
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm run start
```


## API Endpoint

### Get all data cars

```http
GET /api/cars
```
cURL Request:
```http 
curl -L -X GET "http://localhost:8686/api/cars"
```

### Get data car with id
```http
GET /api/cars/:id
```

cURL Request:
```http 
curl -L -X GET "http://localhost:8686/api/cars/1"
```

### Create new data car
```http
POST /api/cars/create
```

cURL Request:
```http 
curl -L -X POST "http://localhost:8686/api/cars/create" -F "name=\"Calya\"" -F "harga=\"1500000\"" -F "foto=@\"/path/to/file\""
```
> Keterangan: Ubahlah "/path/to/file" menjadi lokasi di mana foto disimpan.

### Edit data car with id
```http
PUT /api/cars/edit/:id
```

cURL Request:
```http 
curl -L -X PUT "http://localhost:8686/api/cars/edit/1" -F "name=\"Innova\"" -F "harga=\"1500000\"" -F "foto=@\"/path/to/file\""
```
> Keterangan: Ubahlah "/path/to/file" menjadi lokasi di mana foto disimpan.

### Delete data car with id
```http
  DELETE /api/cars/delete/:id
```
Method: DELETE
cURL Request:
```http 
curl -L -X DELETE "http://localhost:8686/api/cars/delete/1"
```


## ERD 
![Logo](https://res.cloudinary.com/dcyojno0c/image/upload/v1716097257/Challenge_5_on4erw.png)

