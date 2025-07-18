
interface PostInternshipProps {
  publicationDate?: Date;
  deadline?: Date;
  startDate?: Date;
  employer?: string;
  employerDesc?: string;
  city?: string;
  title?: string;
  reference?: string;
  logo?: File;
  level?: string[];
  duration?: string;
  durationUnit?: string;
  remuneration?: string;
  apply?: string;
  employerType?: string[];
  skills?: string;
  tasks?: string;
  address?: string;
  website?: string;
  role?: string;
  adType?: string[];
  firstname?: string;
  lastname?: string;
  phone?: string;
  email?: string;
  sector?: string[];
}

export class PostInternship {
    
  private _publicationDate?: Date;
  private _deadline?: Date;
  private _startDate?: Date;
  private _employer?: string;
  private _employerDesc?: string;
  private _city?: string;
  private _title?: string;
  private _reference?: string;
  private _logo?: File;
  private _level?: string[];
  private _duration?: string;
  private _durationUnit?: string;
  private _remuneration?: string;
  private _apply?: string;
  private _employerType?: string[];
  private _skills?: string;
  private _tasks?: string;
  private _address?: string;
  private _website?: string;
  private _role?: string;
  private _adType?: string[];
  private _firstname?: string;
  private _lastname?: string;
  private _phone?: string;
  private _email?: string;
  private _sector?: string[];
 
  constructor(data: Partial<PostInternshipProps> = {}) {
    Object.assign(this, {
      _publicationDate: data.publicationDate,
      _deadline: data.deadline,
      _startDate: data.startDate,
      _employer: data.employer,
      _employerDesc: data.employerDesc,
      _city: data.city,
      _title: data.title,
      _reference: data.reference,
      _logo: data.logo,
      _level: data.level,
      _duration: data.duration,
      _durationUnit: data.durationUnit,
      _remuneration: data.remuneration,
      _apply: data.apply,
      _employerType: data.employerType,
      _skills: data.skills,
      _tasks: data.tasks,
      _address: data.address,
      _website: data.website,
      _role: data.role,
      _adType: data.adType,
      _firstname: data.firstname,
      _lastname: data.lastname,
      _phone: data.phone,
      _email: data.email,
      _sector: data.sector,
    });
  }

get publicationDate(): Date | undefined {
  return this._publicationDate;
}
get deadline(): Date | undefined {
  return this._deadline;
}
get startDate(): Date | undefined {
  return this._startDate;
}
get employer(): string | undefined {
  return this._employer;
}
get employerDesc(): string | undefined {
  return this._employerDesc;
}
get city(): string | undefined {
  return this._city;
}
get title(): string | undefined {
  return this._title;
}
get reference(): string | undefined {
  return this._reference;
}
get logo(): File | undefined {
  return this._logo;
}
get level(): string[] | undefined {
  return this._level;
}
get duration(): string | undefined {
  return this._duration;
}
get durationUnit(): string | undefined {
  return this._durationUnit;
}
get remuneration(): string | undefined {
  return this._remuneration;
}
get apply(): string | undefined {
  return this._apply;
}
get employerType(): string[] | undefined {
  return this._employerType;
}
get skills(): string | undefined {
  return this._skills;
}
get tasks(): string | undefined {
  return this._tasks;
}
get address(): string | undefined {
  return this._address;
}
get website(): string | undefined {
  return this._website;
}
get role(): string | undefined {
  return this._role;
}
get adType(): string[] | undefined {
  return this._adType;
}
get firstname(): string | undefined {
  return this._firstname;
}
get lastname(): string | undefined {
  return this._lastname;
}
get phone(): string | undefined {
  return this._phone;
}
get email(): string | undefined {
  return this._email;
}
get sector(): string[] | undefined {
  return this._sector;
}

  public toObject(): PostInternshipProps {
    return {
      publicationDate: this._publicationDate,
      deadline: this._deadline,
      startDate: this._startDate,
      employer: this._employer,
      employerDesc: this._employerDesc,
      city: this._city,
      title: this._title,
      reference: this._reference,
      logo: this._logo,
      level: this._level,
      duration: this._duration,
      durationUnit: this._durationUnit,
      remuneration: this._remuneration,
      apply: this._apply,
      employerType: this._employerType,
      skills: this._skills,
      tasks: this._tasks,
      address: this._address,
      website: this._website,
      role: this._role,
      adType: this._adType,
      firstname: this._firstname,
      lastname: this._lastname,
      phone: this._phone,
      email: this._email,
      sector: this._sector,
    };
  }
}
