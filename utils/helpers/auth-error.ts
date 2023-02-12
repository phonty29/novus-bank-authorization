class AuthError extends Error {
    status: number;

    constructor(status: number, message: string, errors = []) {
        super(message);
        this.status = status;
    }

    static badRequest(message: string, errors = []) {
        return new AuthError(400, message, errors);
    }

    static unauthorized() {
        return new AuthError(401, "Пользователь не авторизован");
    }

    static conflict(message: string) {
        return new AuthError(409, message);
    }

    static requestTimeout() {
        return new AuthError(408, "К сожалению срок вашей ссылки истек");
    }
};

export default AuthError;