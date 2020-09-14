// // const request  = require("express");
// const ARTICLES = require("./mock-book");

// module.exports = function(app) {

//     app.get('/book', function(request, response) {
//         response.send(ARTICLES);
//     })



//     app.get("/book/:id", function(request, response) {
//         response.send(
//             ARTICLES.filter(book => book.id === request.params.id)[0]
//         )
//     })

//     app.route('/book/:id').get((req, res) => {
//         const requestedCatName = req.params['id']
//         res.send({ name: requestedCatName })
//       })


// }