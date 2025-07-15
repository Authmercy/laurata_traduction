export class CV_Class {
  private _fullname: string;
  private _text: string;
  private _subject: string;
  private _email: string;
  private _phone: string;

 constructor(
    fullname: string = "",
    text: string = "",
    email: string = "",
    subject: string = "",
    phone: string = "",
  ) {
    this._fullname = fullname;
    this._text = text;
    this._email = email;
    this._phone = phone;
      this._subject = subject;
  }
  get fullname(): string {
    return this._fullname;
  }
   get subject(): string {
    return this._subject;
  }

  get text(): string {
    return this._text;
  }
  get email(): string {
    return this._email;
  }
 get phone(): string {
    return this._phone;
  }



  set fullname(value: string) {
    this._fullname = value;
  }
  set subject(value: string) {
    this._subject = value;
  }
  set text(value: string) {
    this._text = value;
  }

  set email(value: string) {
    this._email = value;
  }

  set phone(value: string) {
    this._phone = value;
  }


  public toObject() {
    return {
      fullname: this._fullname,
      text: this._text,
        subject: this._subject,

      email: this._email,
      phone: this._phone
    };
  }
}
