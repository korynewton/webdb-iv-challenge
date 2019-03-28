const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json())


server.listen(4000, () => {
    console.log('\n ** up and running on 4k**')
})