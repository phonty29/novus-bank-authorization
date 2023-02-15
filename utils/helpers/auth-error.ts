import AuthMessages from "@utils/enums/AuthMessages";

class AuthError extends Error {
    status: number;

    constructor(status: number, message: AuthMessages, errors = []) {
        super(message);
        this.status = status;
    }

    static badRequest(message: AuthMessages, errors = []) {
        return new AuthError(400, message, errors);
    }

    static unauthorized() {
        return new AuthError(401, AuthMessages.AUTH_UNAUTHORIZED);
    }

    static conflict(message: AuthMessages) {
        return new AuthError(409, message);
    }

    static requestTimeout() {
        return new AuthError(408, AuthMessages.LINK_IS_EXPIRED);
    }
};

export default AuthError;