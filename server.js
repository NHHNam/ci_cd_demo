const app = require('./src/app')



const {PORT} = process.env;




const server = app.listen( PORT || 8080, () => {
    console.log(`WSV start with port ${PORT || 8080}`);
})

process.on('SIGINT', () => {
    server.close( () => console.log(`exits server express version 1`))
})