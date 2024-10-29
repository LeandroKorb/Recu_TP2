import Factory from "../models/Factory.js";

class ReservationsService {
  constructor() {
    this.model = Factory.get("");
  }

  createReservation = async (data) => {
    return await this.model.addReservation(data);
  };

  getTotalPeople = async () => {
    const reservations = await this.model.getReservations();
    const count = reservations.reduce(
      (sum, reservation) => sum + reservation.cantidadPersonas,
      0
    );
    const message = count < 20 ? "ALTA" : "BAJA";
    return { count, message };
  };

  getAllReservations = async () => {
    return await this.model.getReservations();
  };
}

export default ReservationsService;
