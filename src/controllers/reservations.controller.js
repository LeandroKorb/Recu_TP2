import ReservationsService from "../services/reservations.service.js";

class ReservationsController {
  constructor() {
    this.service = new ReservationsService();
  }

  createReservation = async (req, res) => {
    try {
      const reservation = await this.service.createReservation(req.body);
      res.status(201).json(reservation);
    } catch (error) {
      console.error("Error al crear la reserva:", error);
      res.status(500).json({ message: "Error al crear la reserva." });
    }
  };

  getTotalPeople = async (req, res) => {
    try {
      const { count, message } = await this.service.getTotalPeople();
      res.json({ cantidadPersonas: count, disponibilidad: message });
    } catch (error) {
      console.error("Error al obtener el total de personas:", error);
      res
        .status(500)
        .json({ message: "Error al obtener el total de personas." });
    }
  };

  getAllReservations = async (req, res) => {
    try {
      const reservations = await this.service.getAllReservations();
      res.json(reservations);
    } catch (error) {
      console.error("Error al obtener las reservas:", error);
      res.status(500).json({ message: "Error al obtener las reservas." });
    }
  };
}

export default ReservationsController;
