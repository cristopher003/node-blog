  
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
POST 
list posts - GET
  ```
http://localhost:3000/post
  ```

create Post - POST
  ```
     http://localhost:3000/post
   ```
params :
```
{
  "title":"nuevo",
  "content":"nuevo6",
  "published":true,
  "tags":["uno","dos"],
  "categories":["uno","dos"],
  "authorId":1
}
```

update Post - PUT
  ```
     http://localhost:3000/post/{id}
   ```
params :
```
{
  "id":2,
  "title":"cambio",
  "content":"nuevo6",
  "published":true,
  "categories":["uno","dos"],
  "tags":["uno","dos"]
}
```

delete Post - DELETE
  ```
     http://localhost:3000/post/{id}
   ```
----------------------------------
FILTER

filter tag - GET
  ```
    http://localhost:3000/post/tags/{tag}
   ```
filter categories - GET
  ```
    http://localhost:3000/post/categories{categiria}
   ```

----------------------------------
COMMENTS

create comment - POST
  ```
http://localhost:3000/post/comment
  ```
  params:
```
{
  "postId":1,
  "authorId":1,
  "content":"esto es un comentario"
}
  ```

update comment - PUT
  ```
http://localhost:3000/post/comment/2
  ```
  params:

```
{
  "postId":3,
  "content":"esto es un nuevo comentario"
}
  ```
list commets - GET
  ```
http://localhost:3000/post/comment
  ```

  delete comment - DELETE
  ```
     http://localhost:3000/post/comment/{id}
   ```