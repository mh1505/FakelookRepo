const { dbConnect } = require("../connection/dbSql");
const sql = require("mssql/msnodesqlv8");

const commentsService = () => {
  const getCommentsByPostId = function(id, callback) {
    dbConnect();
    const result = new sql.Request()
      .input("Id", sql.Int, id)
      .execute("GetCommentsByPostId", function(err, data) {
        if (err) {
          console.log(err);
        } else {
          callback(data.recordset);
        }
      });
  };

  return {
    getCommentsByPostId
  };
};

module.exports = commentsService();
