const express = require('express');

const app = express();

const userRoutes = require('./routers/userRoutes');
const loginRoute = require('./routers/loginRoute');
const categoriesRoutes = require('./routers/categoriesRoutes');
const postRoutes = require('./routers/postRoutes');
const error = require('./middlewares/error');

app.use(express.json());
app.use('/user', userRoutes);
app.use('/login', loginRoute);
app.use('/categories', categoriesRoutes);
app.use('/post', postRoutes);
app.use(error);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
