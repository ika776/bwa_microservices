const jwt = require("jsonwebtoken");

const JWT_SECRET = "bwamicro!23";

//cretae basic token dengan proses synchronous
// const token = jwt.sign({ data: { kelas: "bwamicro" } }, JWT_SECRET, {
//   expiresIn: 3600,
// });
// console.log(token);

//asychronous cretae token
// jwt.sign(
//   { data: { kelas: "bwamicro" } },
//   JWT_SECRET,
//   { expiresIn: "1m" },
//   (err, token) => {
//     console.log(token);
//   }
// );
//cara 1
const token1 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoiYndhbWljcm8ifSwiaWF0IjoxNjUyNDk3ODQ5LCJleHAiOjE2NTI0OTc5MDl9.c5RL50B0SEIBHG9jGFAreP715KJNes3YEMefDFpkS8A";

// // console.log("aaaaaa");
// jwt.verify(token1, JWT_SECRET, (err, decoded) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log(decoded);
// });

//cara2
try {
  const decoded = jwt.verify(token1, JWT_SECRET);
  console.log(decoded);
} catch (error) {
  console.log(error.messsage);
}
