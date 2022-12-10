class UserDTO {
    id: string;

    constructor(user) {
        this.id = user._id;
    }
}

export default UserDTO;