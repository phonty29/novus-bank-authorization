import User from "./users";

interface ISuccessFields {
    userFields: User;
}

export const successFieldsInitialState: ISuccessFields = {
    userFields: {
        username: "",
        password: ""
    }
};

export const validateSuccessFields = (successState: ISuccessFields): boolean => {
    const validUsernameRegex: RegExp = /^[a-zA-Z0-9]+$/; //eslint-disable-line
    const validPasswordRegex: RegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; //eslint-disable-line
    return (
        validUsernameRegex.test(successState.userFields.username) &&
        validPasswordRegex.test(successState.userFields.password)
    );
}

export default ISuccessFields;
