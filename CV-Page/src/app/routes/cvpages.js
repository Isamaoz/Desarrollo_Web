// const dbConnection = require('../../config/dbConnection');
//
// module.exports = app => {
//
// const connection = dbConnection();
//
//   app.get('/', (req, res) => {
//     connection.query('SELECT * FROM links', (err, result) => {
//       console.log(result);
//       res.render('cv/mainpage', {
//         links: result
//       });
//     });
//   });
// };



var dbConnection = require('../../config/dbConnection');
//console.log(dbConnection);

module.exports = app => {
  var connection = dbConnection();

  app.get('/', (req, res) => {
    connection.query('SELECT * FROM links', (err, result) => {
      console.log(result);
      res.render('cv/mainpage', {
        links: result
      });
    });
  });
}
