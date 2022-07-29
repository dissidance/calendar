import CustomError from "./CustomError";
class ForbiddenError extends CustomError {
  constructor(message: string) {
    super({ message, status: 403 });
  }
}
export default ForbiddenError;
