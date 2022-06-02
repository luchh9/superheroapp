# Bienvenido a SuperheroApp

Esta es una app en la que puedes encontrar cualquier superheroe/villano y formar equipos a tu gusto!

Aplicacion hecha para el challenge React de [Alkemy labs](https://www.alkemy.org/)

Aplicacion hecha en *React* ⚛ 
Librerias :
 - Axios para peticiones HTTTP
 - Formik para validaciones de formulario
 - Bootstrap para estilos

👉 Consume los endpoints de la siguiente API : "https://superheroapi.com/"

👉 Las diferentes secciones de la app estan protegidas verificando que el
usuario autenticado disponga de un token que se almacenará en localStorage. El mismo, se obtendrá
de una API con datos de muestra. Si un usuario intenta ingresar a cualquier ruta sin estar autenticado,
sera redirigido al login.

👉 Responsive

# Login 

Al hacer click en “Enviar”, se valida que ambos campos no estén vacíos, y muestra un mensaje
al usuario si lo estuviesen. Caso contrario, se realiza una petición POST, con
los campos email y password para obtener un token.

Los datos válidos para obtener un token son:
● Email: challenge@alkemy.org
● Password: react

En el caso de obtener un error de la API, se muestra una alerta, mientras que si es satisfactorio
se redirige al Home y almacena el token obtenido en localStorage.

# Uso

- Clonar el proyecto
- Instalar dependecias: npm install
- ejecutar: npm start!

