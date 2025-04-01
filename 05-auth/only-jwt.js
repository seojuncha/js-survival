const jwt = require("jsonwebtoken");

const payload = {
  name: "seojun",
};
const secret = "abcd1234";

const token = jwt.sign(payload, secret);
console.log(`Genrated token: ${token}`);

const decoded = jwt.verify(token, secret);
console.log(`Decoded payload: ${decoded.name}`);
