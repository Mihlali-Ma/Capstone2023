const db = require("../config")

class Products {
  // Create a new product
  createProduct(req, res) {
    const Movie = {
      MovieName: req.body.MovieName,
      MoviePoster: req.body.MoviePoster,
      Trailor: req.body.Trailor,
      agerating: req.body.agerating,
      Ticket_price: req.body.Ticket_price,
      MovieCast: req.body.MovieCast,
      MovieWriter: req.body.MovieWriter,
      MovieDirector: req.body.MovieDirector,
      MovieMusic: req.body.MovieMusic
    };

    const query = 'INSERT INTO Products SET ?';
    db.query(query, Movie, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'A new product was created.',
        productId: result.insertId,
      });
    });
  }

  // Retrieve all products
  fetchProducts(req, res) {
    const query = 'SELECT movieID, MovieName, MoviePoster, Trailor, agerating, Ticket_price, MovieCast, MovieWriter, MovieDirector, MovieMusic FROM Products';
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  // Retrieve a single product by ID
  fetchProduct(req, res) {
    const query = `SELECT movieID, MovieName, MoviePoster, Trailor, agerating, Ticket_price, MovieCast, MovieWriter, MovieDirector, MovieMusic  FROM Products WHERE movieID = ${req.params.id}`;
    db.query(query, (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        res.status(404).json({
          status: 404,
          msg: 'Product not found.',
        });
      } else {
        res.json({
          status: res.statusCode,
          result: result[0],
        });
      }
    });
  }

  // Update a Movies
  updateProduct(req, res) {
    const Movie = {
      MovieName: req.body.MovieName,
      MoviePoster: req.body.MoviePoster,
      Trailor: req.body.Trailor,
      agerating: req.body.agerating,
      Ticket_price: req.body.Ticket_price,
      MovieCast: req.body.MovieCast,
      MovieWriter: req.body.MovieWriter,
      MovieDirector: req.body.MovieDirector,
      MovieMusic: req.body.MovieMusic
    };

    const query = `UPDATE Products SET ? WHERE movieID = ${req.params.id}`;
    db.query(query, Movie, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'The Movie has been updated.',
      });
    });
  }

  // Delete a product by ID
  deleteProduct(req, res) {
    const query = `DELETE FROM Products WHERE movieID  = ${req.params.id}`;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'The selected movie has been removed from the list.',
      });
    });
  }
}

module.exports = Products;
