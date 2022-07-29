interface CustomErrorInterface {
  message: string;
  status: number;
  stack?: string;
}

class CustomError extends Error {
  status: number;

  constructor({ message, status }: CustomErrorInterface) {
    super(message);
    this.status = status;
  }
}

export default CustomError;