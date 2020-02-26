const { dbConnect } = require('../connection/dbSql')
const sql = require('mssql/msnodesqlv8')



const usersService = () => {
    const getAllUsers = function (callback) {
        dbConnect();
        const result = new sql.Request()
            .query('select * from Users',
                function (err, users) {
                    if (err) {
                        console.log(err)
                    }
                    else {                     
                        callback(users.recordset);
                    }
                });

    };

    return {
        getAllUsers
    
    }
}

module.exports = usersService();