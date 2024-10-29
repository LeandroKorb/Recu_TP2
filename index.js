import express from "express";
import ReservationsRoute from "./src/routes/reservations.route.js";

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", new ReservationsRoute().start());

app.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);

app.on("error", (err) => console.error("Server error:", err));
