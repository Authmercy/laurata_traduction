export class CV_Class {
  private _firstname: string;
  private _lastname: string;
  private _job?: string;
  private _phone: string;
  private _email: string;
  private _cv: File;
  private _sector: string[];


  constructor(
    firstname: string = "",
    lastname: string = "",
    email: string = "",
    phone: string = "",
    cv: File = new File([], ""),
       sector: string[] = [],
    job?: string
  ) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._email = email;
    this._cv = cv;
    this._job = job;
    this._phone = phone;
    this._sector = sector;
  }
  get firstname(): string {
    return this._firstname;
  }
  get phone(): string {
    return this._phone;
  }

  get lastname(): string {
    return this._lastname;
  }

  get job(): string | undefined {
    return this._job;
  }

  get email(): string {
    return this._email;
  }
  get sector(): string[] {
    return this._sector;
  }

  get cv(): File {
    return this._cv;
  }


  set firstname(value: string) {
    this._firstname = value;
  }
  set phone(value: string) {
    this._phone = value;
  }
  set lastname(value: string) {
    this._lastname = value;
  }

  set job(value: string | undefined) {
    this._job = value;
  }

  set email(value: string) {
    this._email = value;
  }

  set cv(value: File) {
    this._cv = value;
  }
  set sector(value: string[]) {
    this._sector = value;
  }

  public toObject() {
    return {
      firstname: this._firstname,
      lastname: this._lastname,
      phone: this._phone,
      job: this._job,
      email: this._email,
      cv: this._cv,
      sector: this._sector
    };
  }
}
