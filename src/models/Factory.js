import ReservationsMemModel from "./DAO/reservations.model.mem.js";

class Factory {
  static get(persistence = "MEM") {
    switch (persistence) {
      case "MEM":
      default:
        console.warn("Persistencia en memoria.");
        return new ReservationsMemModel();
    }
  }
}

export default Factory;
