const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
require("dotenv").config();

function createToken(user) {
  const secretKey = 'Mihlali@$97';
  const token = jwt.sign(user, secretKey);
  return token;
  return sign(
    {
      emailAdd: user.emailadd,
      userPass: user.userPass,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "100h",
    }
  );
}

function verifyAToken(req, res, next) {
  try {
    // Retrieve the token from req.headers
    const token = req.headers["Authorization"];

    // Check if the token exists
    if (!token) {
      return res.status(401).json({
        status: 401,
        msg: "Unauthorized: Token missing",
      });
    }

    // Verify the token
    jwt.verify(token, process.env.SECRETE_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          status: 401,
          msg: "Unauthorized: Invalid token",
        });
      }
      // If the token is valid, attach the user data to the request for further use
      req.user = decoded;
      next();
    });
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: e.message,
    });
  }
}

async function authenticateUser(req, res) {
  try {
    const { emailadd, userPass } = req.body;

    // Fetch the user's hashed password from your database based on their email
    const hashedPasswordFromDatabase = "";

    const passwordMatch = await bcrypt.compare(userPass, hashedPasswordFromDatabase);

    if (!passwordMatch) {
      return res.status(401).json({
        status: 401,
        msg: "Unauthorized: Invalid credentials",
      });
    }

    // User is authenticated, generate a JWT token
    const user = { emailadd };
    const token = createToken(user);

    // Send the token to the client
    res.json({
      status: 200,
      msg: "Authentication successful",
      token: token,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      msg: err.message,
    });
  }
}

module.exports = {
  createToken,
  verifyAToken,
  authenticateUser,
};
