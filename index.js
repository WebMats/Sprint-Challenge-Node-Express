const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

const actionRouter = require('./routes/action');
const projectRouter = require('./routes/project');

app.use('/action', actionRouter);
app.use('/project', projectRouter);


app.listen(8000, () => {console.log('Listening on port 8000....')})