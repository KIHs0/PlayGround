
import express from "express";
import cors from "cors";
import router from "./routes/router.dallE.js";

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(router);

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
