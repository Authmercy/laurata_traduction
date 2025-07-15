export class SchoolFilter {

  school: string;
  city: string;
  enumLanguage?: string;
  page: number;
  size: number;
  diploma?: string;
  enumFees?: string;
  schoolType?: { condition: string; values: string[] };;
  training?: { condition: string; values: string[] };
  disabilities?: { condition: string; values: string[] };
  degreeLevels?: { condition: string; values: string[] };
  admission?: { condition: string; values: string[] };
  sort?: { field: string; direction: string };
  studyFields?: { condition: string; values: string[] };

  trainingMode?: { condition: string; values: string[] };

  constructor(
    school: string = "",
    city: string = "",
    enumFees?: string,
    schoolType?: { condition: string; values: string[] },
    training?: { condition: string; values: string[] },
    studyFields?: { condition: string; values: string[] },
    trainingMode?: { condition: string; values: string[] },
    enumLanguage?: string,
    disabilities?: { condition: string; values: string[] },
    degreeLevels?: { condition: string; values: string[] },
    admission?: { condition: string; values: string[] },
    page: number = 0,
    diploma?: string,
    size: number = 25,
    sort?: { field: string; direction: string },


  ) {
    this.school = school;
    this.city = city;
    this.enumFees = enumFees;
    this.schoolType = schoolType;
    this.training = training;
    this.studyFields = studyFields;
    this.trainingMode = trainingMode;
    this.enumLanguage = enumLanguage;
    this.disabilities = disabilities;
    this.degreeLevels = degreeLevels;
    this.admission = admission;
    this.page = page;
    this.diploma = diploma;
    this.size = size;
    this.sort = sort;




  }

  setSchool(newSchool: string) {
    this.school = newSchool;
  }



  setCity(cityText: string) {
    this.city = cityText;
  }

  setschoolType(schoolType: "anyOf", schoolTypeValue: string[]) {
    this.schoolType = { condition: schoolType, values: schoolTypeValue };
  }
  setenumFees(enumFeesText: string) {
    this.enumFees = enumFeesText;
  }
  setdiploma(diplomaText: string) {
    this.diploma = diplomaText;
  }
  setContract(enumLanguage: string) {
    this.enumLanguage = enumLanguage;
  }
  setstudyFields(studyFieldsCondition: "anyOf", studyFieldsValue: string[]) {
    this.studyFields = { condition: studyFieldsCondition, values: studyFieldsValue };
  }
  settrainingModeFields(trainingModeCondition: "anyOf", trainingModeValue: string[]) {
    this.trainingMode = { condition: trainingModeCondition, values: trainingModeValue };
  }
  setdisabilities(disabilitiesCondition: "anyOf", disabilitiesValue: string[]) {
    this.disabilities = { condition: disabilitiesCondition, values: disabilitiesValue };
  }

  setDegreeLevels(studyCondition: "anyOf", degreeLevelsText: string[]) {
    this.degreeLevels = { condition: studyCondition, values: degreeLevelsText };
  }
  setFao(admissionCondition: "anyOf", admissionText: string[]) {
    this.admission = { condition: admissionCondition, values: admissionText };
  }
  settraining(trainingCondition: "anyOf", trainingValue: string[]) {
    this.training = { condition: trainingCondition, values: trainingValue };
  }

  setPagination(page: number, size: number) {
    this.page = page;
    this.size = size;
  }


  toJSON() {
    const payload: Record<string, any> = {
      school: this.school,
      city: this.city,

      enumLanguage: this.enumLanguage,
      enumFees: this.enumFees,
      page: this.page,
      diploma: this.diploma,
      size: this.size,

    };

    if (this.studyFields) payload.studyFields = this.studyFields;
    if (this.schoolType) payload.schoolType = this.schoolType;

    if (this.disabilities) payload.disabilities = this.disabilities;
    if (this.admission) payload.admission = this.admission;
    if (this.degreeLevels) payload.degreeLevels = this.degreeLevels;
    if (this.sort) payload.sort = this.sort;
    if (this.training) payload.training = this.training;
    if (this.trainingMode) payload.trainingMode = this.trainingMode;
    return payload;
  }
}
