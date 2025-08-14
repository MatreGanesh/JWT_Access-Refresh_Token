const jwt = require('jsonwebtoken');
const secretkey = require('../configuration/jwtConfig');


const authenticationToken = async (req, res, next) => {

    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized missing tokenm' })
    }

    const [bearer, token] = authHeader.split(" ");
    if (bearer !== "Bearer" || !token) {
        return res.status(401).json({ message: "Unauthorized: Invalid token format" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Forbiddent: Invalid token" })
        }
        req.user = user;
        next()
    })

}

module.exports = { authenticationToken };