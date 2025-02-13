const jwt = require("jsonwebtoken");

// Permet d'envoyer des requêtes protégées par un token 

module.exports = (req, res, next) => {
  try {
    // Récupération du token dans le header Authorization de la requête entrante
    const token = req.headers.authorization.split(" ")[1]; // Vérifie la validité du token dans les headers 
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId; // Vérifie si l'userId de la requête correspond à celui du token
    req.auth = {
      userId: userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};
