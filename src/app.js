const fs = require('fs');
const path = requires('path');

const express = require('express');
const app = express();
app.set('views', path.join(_dirname, 'views'));
app.set('view engine', 'ejs');
