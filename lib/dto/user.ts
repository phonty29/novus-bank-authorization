class UserDTO {
  id: string;

  constructor(user: any) {
    this.id = user._id;
  }
}

export default UserDTO;
