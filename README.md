# JWT_Passport_Authentication_App

Getting Started
project For correct behavior of the project, especially for async / await, set global node Js to version 8 or higher. You can follow the link https://nodejs.org/en/ to download the node.

First, install all of the dependencies required for your project.

> npm install
customer
Start development server

> npm run dev
Assemblies for Production

> npm Run Build
Run production assembly

> npm Run the service
Delete Production Assembly

> npm Clear Execution
server
Start the server

> Running the npm server
Project Description
Projects are built independently from scratch. This applies to both the client and server parts. Below - more.

Customer side description
The client is created with React + Redux.

Project file structure
The project file structure is mostly modular. In my opinion, it is not a fractal structure because it is more convenient to organize a project by function.

Bundle
The project is assembled via Webpack 3, divided into development and production assemblies, HMR is under development, and optimization / reduction is used in production assemblies. When you run the production assembly, you will be surprised that there is little weight. All parts are also cached. Once the page is reloaded, you can see it.

Caching
A new bundle is created with a new hash each time for the final client to correctly display the new code for production. This applies to styles, pictures and major bands.

Project dependency
The project contains the latest slave versions of the date (01.10.2017), in particular React 16 (Fiber) and React-Router 4.

Asynchronous operation
To handle asynchronous tasks, the project uses Redux-Saga. In general, the project saga is needed for preloader and privilege / log / logout work, an alternative to Redux-Thunk.

Getting data
The "Axios" library is used to request and receive data from the server. Two Axios entities are used, one for registration and authorization, and one for obtaining data from the protection routers on the server using the Authorization parameter in the GET request header.

Data preprocessing
The site's data is requested through a "reselect" library to commemorate with the selector without asking directly.

Protected path
There is a secure routing of the client. The sleep page can not be visited without the current token.

Styling
This project is based on Flexbox. Styles are created using the SASS preprocessor. This project makes all inline styles available through import styles 'styles.scss' and module styles via import styles in 'styles.module.scss'. More information can be found in the webpack configuration. The style of the assembly varies from development to production. When working with code in the authoring style, the authoring style is rendered in a separate style file, unlike the development of the assembly inside the bundle in order to process the HMR quickly.

Class Name Methodology
The class name of the BEM project.

Server Side Description
The server is written to the node Js + Express + JWT + Passport. This is because one of the conditions of the test operation is that the user has not used the database because it was created at runtime. Instead, all user data is stored in objects on the server. This applies not only to the nature of the user, but also to the category / product.

JWT + Passport + User Authentication
JWT is used as a passport strategy. When the user logs on, the password is "hashed" via "Bcrypt".

Protected path
The server implements secure routing. If the user does not have a token, the server can not fetch data.

Token Auth Refresh
The token is stored on the client of the cookie, so after the page is reloaded, the user must be seized, written to the page, and then accessible to the client's page. To do this, the server implements a way for the server to send a request to the client and obtain the user, with the correct token in the cookie.

XMLHttpRequest
Cross-domain requests are allowed because the client and server are in the same domain.
