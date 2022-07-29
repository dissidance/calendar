import CustomError from "./CustomError";

class BussinessError extends CustomError {
  constructor(message: string) {
    super({ message, status: 409 });
  }
}
export default BussinessError;