const mariadb = require('mariadb');



const pool = mariadb.createPool({
    host: "localhost",
    user: "pine",
    password: "pineapple",
    connectionLimit: "1"
})


class Database {
    constructor(host, user, password, connectionLimit){
        this.connection = mariadb.createPool({
            host: host,
            user: user,
            password: password,
            connectionLimit: connectionLimit != null ? connectionLimit : 2
        })
    
    


    }
}