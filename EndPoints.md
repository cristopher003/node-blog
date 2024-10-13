  
## endPoints

Crear user - POST
  ```
     http://localhost:3000/user/
   ```
params:
```
{
  "email":"cristopher@homtail.com",
  "name":"cristopher",
  "password":"hola"
}
```

Login user - POST
  ```
     http://localhost:3000/user/login
   ```
params :
```
{
  "email":"cttt@homtail.com",
  "password":"hola"
}
```

----------------------------------
PRODUCT 

``` 
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlZHJvM0Bob210YWlsLmNvbSIsImlhdCI6MTcyODY5NDE5NiwiZXhwIjoxNzI4NzAxMzk2fQ.so-OjG6_7xDYYKfH0n_sYO56Ab-Nc6gkLbb20biwqAs 
```

list products - GET
  ```
http://localhost:3000/product
  ```

create product - POST
  ```
     http://localhost:3000/product
   ```
params :
```
{  "name":        "product33",
  "description": "description"  , 
  "stock" :      6,
  "price"  :     6.6,
  "categories": [
    "uno",
    "dos"
    ]
}
```

update product - PUT
  ```
     http://localhost:3000/product/{id}
   ```
params :
```
{  "name":        "product33",
  "description": "description"  , 
  "stock" :      6,
  "price"  :     6.6,
  "categories": [
    "uno",
    "dos"
    ]
}
```

delete product - DELETE
  ```
    http://localhost:3000/product/{id}
   ```

