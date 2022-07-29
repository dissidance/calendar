import CustomError from "./CustomError";

class NotFoundError extends CustomError {
  constructor(message: string) {
    super({ message, status: 404 });
  }
}
export default NotFoundError;