import express from "express";
import cors from "cors";
// import router from "./routes/router.dallE.js";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(folder, "client")));
// app.get("*", (req, res) => {
//   // res.sendFile(path.join(folder, "client", "dist", "index.html"));
// });
const clientDistPath = path.resolve(__dirname, "../client/dist");
app.all("/{*any}", (req, res, next) => {
  res.sendFile(path.join(clientDistPath, "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
