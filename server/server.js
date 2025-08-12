import express from "express";
import cors from "cors";
// import router from "./routes/router.dallE.js";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());
let folder = path.join(path.dirname(fileURLToPath(import.meta.url)));
app.use(express.static(path.join(folder, "client", "dist")));
// app.get("*", (req, res) => {
//   // res.sendFile(path.join(folder, "client", "dist", "index.html"));
// });
app.all("/{*any}", (req, res, next) => {
  res.sendFile(path.join(folder, "client", "dist", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
