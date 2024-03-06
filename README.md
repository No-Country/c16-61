<div>
<!-- Banner del proyecto -->
  <div align='center'>
  <a href="https://github.com/No-Country/c16-61" target="_blank">
   <img src="./public/logoHeader.svg" alt="Banner" width="50%" />
  </a>
  
  <br>
<h1>Bienvenidos a Imomubiales</h1></div>
<div>
  <p>
    <strong>Diseñamos una página web de E-Commerce para una pequeña empresa</strong>. Nuestra plataforma de E-Commerce inmobiliario ofrece un entorno exclusivo para la compra y exploración de propiedades. Digitaliza la experiencia inmobiliaria, permitiendo a los compradores interesados navegar, evaluar y expresar su interés en propiedades desde la comodidad de su hogar.
  </p>
    <div align='center'>
    <a href="https://deploy-no-country-em1oeweb6-deiviiss.vercel.app/"
     target="_blank">
          <img  src="https://img.shields.io/badge/VER_DEMO-3378FF?style=for-the-badge&logo=vercel&logoColor=%23343B4E"/>
       </a>
       <a href="https://www.figma.com/file/hS5Uy7yI0Q9lfAj1ZKbyRW/" target="_blank">
          <img src="https://img.shields.io/badge/VER_DISE%C3%91O-3378FF?style=for-the-badge&logo=figma&logoColor=%23343B4E"/>
      </a>
      <a href="https://github.com/No-Country/c16-61/issues" 
      target="_blank">
          <img  src="https://img.shields.io/badge/REPORTAR_BUG-343B4E?style=for-the-badge"/>
      </a>
      </div>
</div>

<!-- Sobre el proyecto -->
<br>

# Acerca del Proyecto

Imomubiales

# Requisitos

Pasos para instalar el proyecto localmente:

1. Clonar el repositorio

   ```sh
   git clone https://github.com/No-Country/c16-61.git
   ```

2. Levantar la Base de datos (requiere tener Docker instalado)

   ```pwsh
   docker compose up -d
   ```

3. Configurar variables de entorno

   - Renombra el archivo `.env.example` a `.env`
   - Ingresa las variables de entorno

4. Instalar dependencias

   Ingresa a la carpeta:

   ```bash
   cd c16-61/
   ```

   Y ejecuta el comando:

   ```sh
   npm install
   ```

5. Ejecutar Prisma (ORM)

   ```sh
   npx prisma migrate dev
   ```

   ```sh
   npx prisma generate
   ```

6. Ejecutar el proyecto localmente

   ```sh
   npm run dev
   ```

7. Crear base de datos localmente [Click Aqui](http://localhost:3000/api/seed)

# Usuarios por defecto

<h3>Administrador:

<br>

`user:` admin@mail.com
`password:` admin123

</h3>
<h3>Usuario:

<br>

`user:` user1@mail.com
`password:` user01

</h3>
