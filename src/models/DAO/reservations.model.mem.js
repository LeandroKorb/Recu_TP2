class ReservationsMemModel {
  constructor() {
    this.reservations = [];
    this.currentId = 1;
  }

  addReservation = async (data) => {
    const newReservation = {
      id: this.currentId++,
      ...data,
    };
    this.reservations.push(newReservation);
    return newReservation;
  };

  getReservations = async () => {
    return this.reservations;
  };
}

export default ReservationsMemModel;
