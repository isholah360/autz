const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {

  const token = req.cookies.token; 

  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });
    req.userId = decoded.id;
    next();
  });
};