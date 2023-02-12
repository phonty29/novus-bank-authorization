class AuthError extends Error {
    status: number;
    errors;

    constructor(status: number, message: string, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static unauthorized() {
        return new AuthError(401, 'Пользователь не авторизован')
    }

    static badRequest(message: string, errors = []) {
        return new AuthError(400, message, errors);
    }

    // static handle(error: Error) {
    //     console.error(error);
    //     if (error instanceof AuthError) {
    //         return res.status(err.status).json({message: err.message, errors: err.errors})
    //     }
    //     return res.status(500).json({message: 'Непредвиденная ошибка'})
    // }
};

export default AuthError;