const express = require('express');
const { listenerCount } = require('process');
const app = express();


require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true}));

const UserRoutes = require('./routes/user.routes');
UserRoutes(app);

const CartRoutes =  require('./routes/cart.routes');
CartRoutes(app);

const ItemRoutes = require('./routes/items.routes');
ItemRoutes(app)

app.listen(8000, () => console.log(`The server is ready on port ${port}`));