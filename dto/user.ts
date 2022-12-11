class UserDTO {
    id: string;

    constructor(user: { _id: string; }) {
        this.id = user._id;
    }
}

export default UserDTO;