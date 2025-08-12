import express from "express";
import cors from "cors";
import router from "./routes/router.dallE.js";
import path from "path";
import { fileURLToPath } from "url";

const folder = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(router);

app.use(express.static(path.join(folder, "client", "dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(folder, "client", "dist", "index.html"));
});
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
