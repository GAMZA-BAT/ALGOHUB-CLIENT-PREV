interface ErrorResponse {
    status: number;
    error: string;
    message: string;
}

export class ApiError extends Error {
    public status: number;
    public error: string;
    public message: string;

    constructor(response : ErrorResponse) {
        super(response.message);
        this.status = response.status;
        this.error = response.error;
        this.message = response.message;
    }
}