// // import fs from "fs";
// import fs from "fs/promises";

// // fs.readFile("./file.txt", "utf-8", (err, data) => {
// //   if (err) {
// //     console.error("Error reading file:", err);
// //     return;
// //   }
// //   console.log("File content:", data);
// // });

// // fs.readFile("./file.txt", "utf-8")
// //   .then((data) => {
// //     console.log("File content:", data);
// //   })
// //   .catch((err) => {
// //     console.error("Error reading file:", err);
// //   });

// const filepath = "./file.txt";

// const func = async () => {
//   const result = await fs.appendFile(filepath, "\nPython the best");
//   console.log("File updated successfully");
//   console.log("File content:", result);
// };

// func();

// import yargs from "yargs";

// const { argv } = yargs(process.argv.slice(2));
// console.log("Command line arguments:", argv);

import express from "express";
import { movies } from "./movies.js";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.send("Welcome to the Movie API");
});

app.get("/movies", (req, res) => {
  // res.send(movies);
  res.status(200).json({
    status: 200,
    message: "Successfully patched a contact!",
    data: movies,
  });
});
