# Levantar el proyecto
## Dev

1. Clonar el .env.template y crear el .env
2. Ejecutar el comando ```docker compose up -d```
3. Reconstruir el prisma client ```npm run prisma:migrate:prod```
   
   ```
    npx prisma migrate dev --name init
   ```

los endpoints se encuentran especificados en el archivo endPoints.ms

## Cosas a Mejorar
* Menejo de error
* Arquitectura
* crear contrato de api
* Test
