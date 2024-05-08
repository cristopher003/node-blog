# Levantar el proyecto
## Dev

1. Clonar el .env.template y crear el .env
2. Ejecutar el comando ```docker compose up -d```
3. Reconstruir el prisma client ```npm run prisma:migrate:prod```
   
   ```
    "prisma:migrate:prod": "prisma migrate deploy",
   ```

los endpoints se encuentran especificados en el archivo endPoints.ms

## Cosas a Mejorar
* Menejo de error
* Arquitectura
* crear contrato de api
* Test

# Questionarie

### 1. You're building a high-throughput API for a cryptocurrency trading platform. For this platform, time is extremely important because microseconds count when processing high-volume trade orders. For communicating with the API, you want to choose the verb that is fastest for read-only operations.

**What verb should you choose for retrieving trade orders with the API
server?**

*SELECT ONLY ONE*
<ol type="a">
  <li><strong>GET</strong></li>
  <li>UPDATE</li>
  <li>DELETE</li>
  <li>POST</li>
</ol>


### 2. You work for a Customer Relationship Management (CRM) company. The company's clients gain CRM access through a RESTful API. The CRM allows clients to add contact information for customers, prospects, and related persons (e.g., virtual assistants or marketing directors). You want to choose an appropriate API request path so clients can easily retrieve information for a single contact while also being flexible for future software changes. 
**Which of the following API paths should you use?**

*SELECT ONLY ONE*
<ol type="a">
  <li>/customers/{customer_id}</li>
  <li><strong>/contacts/{contact_id}</strong></li>
  <li>/contacts/{contact_type}/all</li>
  <li>/customers/all</li>
</ol>

### 3. You work for a large social media network, and you've been tasked witherror handling for the API. You're trying to decide on an appropriate errorcode for authentication failures based on non-existent users and incorrect passwords. You want to balance security against brute force attacks with providing descriptive and true error codes. 
**Which HTTP error code(s) should you use to keep the system secure and still report that an error occurred?**

*SELECT ONLY ONE*

<ol type="a">
<li>404 if the user doesn't exist, and 403 if the password is wrong. </li>
<li><strong>403 if the user doesn't exist, and 401 if the password is wrong. </strong></li>
<li>500 if the user doesn't exist or if the password is wrong. </li>
<li>401 if the user doesn't exist or if the password is wrong.</li>
</ol>


### 4. You're writing documentation for requesting information about a given user in your system. Your system uses UUIDS (universally unique identifiers) as user identifiers. In your documentation, you want to show an example. 
**True or false: You should put a fake UUID into the example code (instead of just the text "UUID") as a placeholder.**

*SELECT ONLY ONE*
<ol type="a"> 
<li><strong>TRUE</strong></li>
<li>FALSE </li>
</ol>


### 5. You're building code to handle errors issued from a remote API server. The response may or may not have an error. 
**How much work should your method, handleErrors(response), handle?**

*SELECT ONLY ONE*
<ol type="a"> 
<li>Check for the presence of an error. If it exists, then set a class property to the
error.</li>
<li><strong>Check for the presence of an error. If it exists, throw an exception with the
error.</strong> </li>
<li>Check for the presence of an error. If it exists, set a class property to the error,
then throw an exception.. </li>
</ol>


### 6. You have two classes: a database driver and an email driver. Both classes need to set errors so that your front-end interface displays any errors that transpire on your platform. 
**Which way should you implement this error handling?**

*SELECT ONLY ONE*

<ol type="a"> 
<li>Write the error handling the same way in both classes, but keep it to one line
of code.</li>
<li><strong>Make a trait to handle errors so it'll collect errors in any class that uses it.</strong> </li>
<li>Make a driver-based error provider to handle errors in all classes that can
issue errors. </li>
</ol>


### 7. You need to name the private method in your class that handles loopingthrough eCommerce products to collect and parse data. That data gets stored in an array and set as a class property. **Which of the following should you use to name your method?**

*SELECT ONLY ONE*

<ol type="a"> 
<li>loopThroughProductsAndParseData()</li>
<li><strong>loopProductsAndParse() </strong></li>
<li>parseDataForProducts() </li>
<li>parseDataForProductsAndSetArray() </li>
</ol>


### 8. There are multiple places in your codebase that need to access the database. To access the database, you need to supply credentials. You want to balance security with useability. 
**What strategy should you use to store and access these credentials?**

*SELECT ONLY ONE*

<ol type="a"> 
<li>Put them in the code that connects to the database for each place that needs
database access.</li>
<li>Put them in a configuration file, then include that file in the code everywhere
that needs to access the database. </li>
<li>Put the credentials into a configuration file, then load them with a database
service provider. </li>
<li><strong>Put them in a .env file, load data from it into a configuration system, then
request the credentials from a database service provider.</strong> </li>
</ol>

### Scenario Analysis Question: Given a distributed system that experiences latencies and occasional  failures in one of its microservices, how would you optimize it? Describe your approach to identifying the problem, possible solutions, and how you would ensure high availability and resilience

en primer lugar ir a la base de todo, el código y la arquitectura, en estas puede fácilmente identificar problemas de optimización. Si se profundiza, debemos identificar la funcionalidad especifica del dominio al que esta apuntando este microservicio, de esto identificar si hay características que no le competen al contexto del dominio y si esas podrían ser las causas de la latencia, si se precisa una alta disponibilidad se podría analizar la implementación de una nueva arquitectura, basada en la emisión de eventos, así implementar un sistema de colas, con el cual implementando las respectivas arquitecturas para la  tolerancia a fallos se tendría una arquitectura robusta con alta disponibilidad, ya basándonos en su despliegue se podría analizar en caso de que no este usando, la factibilidad de escalarlo a un sistema distribuido con kubernetes, y si se precisa se podrían implementar balanceadores de carga.