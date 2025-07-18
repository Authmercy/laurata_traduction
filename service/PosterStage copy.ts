export  class PostInternship {

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


  constructor(
        publicationDate: Date,
        deadline: Date,
        startDate: Date,
        employer: string = "",
        employerDesc: string = "",
        reference: string = "",
        title: string = "",
        logo: File = new File([], ""),
        duration: string = "",
        durationUnit: string = "",
        apply: string = "",
        remuneration: string = "",

        employerType: string[] = [],
        level: string[] = [],
        city?: string,
        skills: string = "",
        tasks: string = "",
        role: string = "",
        website: string = "",

        adType: string[] = [],
        address?: string,
        firstname: string = "",
        lastname: string = "",
        email: string = "",
        phone: string = "",

        sector: string[] = [],

    ) {
        this._publicationDate = publicationDate;
        this._deadline = deadline;
        this._startDate = startDate;
        this._employer = employer;
        this._employerDesc = employerDesc;
        this._reference = reference;
        this._logo = logo;
        this._city = city;
        this._title = title;
        this._level = level;
        this._duration = duration;
        this._durationUnit = durationUnit;
        this._apply = apply;
        this._employerType = employerType;
        this._remuneration = remuneration;
        this._skills = skills;
        this._tasks = tasks;
        this._role = role;

        this._address = address;
        this._website = website;
        this._adType = adType;
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;

        this._phone = phone;
        this._sector = sector;
    }
  public getPublicationDate(): Date | undefined {
        return this._publicationDate;
    }

    public setPublicationDate(date: Date): void {
        this._publicationDate = date;
    }


    public getDeadline(): Date | undefined {
        return this._deadline;
    }

    public setDeadline(date: Date): void {
        this._deadline = date;
    }


    public getStartDate(): Date | undefined {
        return this._startDate;
    }

    public setStartDate(date: Date): void {
        this._startDate = date;
    }
    get employer():  string | undefined {
        return this._employer;
    }
    get title():  string | undefined {
        return this._title;
    }

    get employerDesc(): string | undefined {
        return this._employerDesc;
    }

    get city(): string | undefined {
        return this._city;
    }

    get reference():   string | undefined{
        return this._reference;
    }
    get level(): string[] | undefined {
        return this._level;
    }

    get logo(): File | undefined {
        return this._logo;
    }
    get duration(): string | undefined {
        return this._duration;
    }
    get remuneration(): string | undefined {
        return this._remuneration;
    }

    get durationUnit(): string  | undefined{
        return this._durationUnit;
    }

    get skills(): string  | undefined{
        return this._skills;
    }
    get website(): string | undefined {
        return this._website;
    }

    get tasks(): string | undefined {
        return this._tasks;
    }

    get address(): string | undefined {
        return this._address;
    }

    get role(): string | undefined {
        return this._role;
    }
    get adType(): string[] | undefined {
        return this._adType;
    }



    get apply(): string | undefined{
        return this._apply;
    }
    get employerType(): string[] | undefined {
        return this._employerType;
    }
    set duration(value: string) {
        this._duration = value;
    }
    set remuneration(value: string) {
        this._remuneration = value;
    }
    set durationUnit(value: string) {
        this._durationUnit = value;
    }


    set skills(value: string) {
        this._skills = value;
    }
    set website(value: string) {
        this._website = value;
    }
    set tasks(value: string) {
        this._tasks = value;
    }

    set address(value: string | undefined) {
        this._address = value;
    }

    set role(value: string) {
        this._role = value;
    }


    set adType(value: string[]) {
        this._adType = value;
    }


    set apply(value: string) {
        this._apply = value;
    }
    set employerType(value: string[]) {
        this._employerType = value;
    }
    set employer(value: string) {
        this._employer = value;
    }
    set title(value: string) {
        this._title = value;
    }
    set employerDesc(value: string) {
        this._employerDesc = value;
    }

    set city(value: string | undefined) {
        this._city = value;
    }

    set reference(value: string) {
        this._reference = value;
    }

    set logo(value: File) {
        this._logo = value;
    }
    set level(value: string[]) {
        this._level = value;
    }
    get firstname(): string  | undefined{
        return this._firstname;
    }
    get phone(): string | undefined{
        return this._phone;
    }

    get lastname(): string | undefined{
        return this._lastname;
    }



    get email(): string | undefined {
        return this._email;
    }
    get sector(): string[]| undefined {
        return this._sector;
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


    set email(value: string) {
        this._email = value;
    }


    set sector(value: string[]) {
        this._sector = value;
    }

    public toObject() {
        return {
            publicationDate: this._publicationDate,
            deadline: this._deadline,
            startDate: this._startDate,
            employer: this._employer,
            employerDesc: this._employerDesc,
            title: this._title,
            city: this._city,
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
            website: this._website,
            address: this._address,
            role: this._role,
            adType: this._adType,
            firstname: this._firstname,
            lastname: this._lastname,
            phone: this._phone,
            email: this._email,
            sector: this._sector
        };
    }
}