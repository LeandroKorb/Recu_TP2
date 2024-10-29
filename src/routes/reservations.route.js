import express from "express";
import ReservationsController from "../controllers/reservations.controller.js";

class ReservationsRoute {
  constructor() {
    this.router = express.Router();
    this.controller = new ReservationsController();
  }

  start() {
    this.router.post("/reservations", this.controller.createReservation);
    this.router.get("/total-people", this.controller.getTotalPeople);
    this.router.get("/all-reservations", this.controller.getAllReservations);

    return this.router;
  }
}

export default ReservationsRoute;
