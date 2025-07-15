export class Registration {
  private _username: string;
  private _password: string;
  private _email: string;


  constructor(
    username: string = "",
    email: string = "",
    password: string = "",

  ) {
    this._username = username;
    this._email = email;
    this._password = password;
  }
  get username(): string {
    return this._username;
  }
  get password(): string {
    return this._password;
  }


  get email(): string {
    return this._email;
  }




  set username(value: string) {
    this._username = value;
  }
  set password(value: string) {
    this._password = value;
  }

  set email(value: string) {
    this._email = value;
  }



  public toObject() {
    return {
      username: this._username,
      password: this._password,
      email: this._email,

    };
  }
}
