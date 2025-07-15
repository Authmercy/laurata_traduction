export class InternshipFilter {

  keywords: string;
  city: string;
  adTypes?: { condition: string; values: string[] };
  page: number;
  size: number;
  enumDuration?: string;
  enumPublicationDate?: string;
  orgTypes?: { condition: string; values: string[] };
  degreeLevels?: { condition: string; values: string[] };
  foa?: { condition: string; values: string[] };
  sort?: { field: string; direction: string };
  

  constructor(
    keywords: string = "",
    city: string = "",
    enumDuration?: string,
    enumPublicationDate?: string,
    adTypes?: { condition: string; values: string[] },
    orgTypes?: { condition: string; values: string[] },
    degreeLevels?: { condition: string; values: string[] },
    foa?: { condition: string; values: string[] },
       page: number = 0, 
    size: number = 15,
    sort?: { field: string; direction: string },
    
  
  ) {
    this.keywords = keywords;
    this.city = city;
    this.adTypes = adTypes;
    this.orgTypes = orgTypes;
    this.degreeLevels = degreeLevels;
    this.page = page;
    this.size = size;
    this.foa = foa;
 this.page = page;
    this.size = size;
    this.sort = sort;

    this.enumDuration = enumDuration;
    this.enumPublicationDate = enumPublicationDate;
    this.city = city;
  }

  setKeyword(newKeyword: string) {
    this.keywords = newKeyword;
  }



  setCity(cityText: string) {
    this.city = cityText;
  }

  setEnumPublicationDate(enumPublicationDateText: string) {
    this.enumPublicationDate = enumPublicationDateText;
  }

  setEnumDuration(enumDurationText: string) {
    this.enumDuration = enumDurationText;
  }

  setContract(adTypesValue: string[], adTypesCondition = "anyOf") {
    this.adTypes = { condition: adTypesCondition, values: adTypesValue };
  }

  setOrgTypes(orgTypesCondition: "anyOf", orgTypesValue: string[]) {
    this.orgTypes = { condition: orgTypesCondition, values: orgTypesValue };
  }

  setDegreeLevels(studyCondition: "anyOf", degreeLevelsText: string[]) {
    this.degreeLevels = { condition: studyCondition, values: degreeLevelsText };
  }
    setFao(foaCondition: "anyOf", foaText: string[]) {
    this.foa = { condition: foaCondition, values: foaText };
  }


  setPagination(page: number, size: number) {
    this.page = page;
    this.size = size;
  }


toJSON() {
  const payload: Record<string, any> = {
    keywords: this.keywords ,
    city: this.city ,
    enumPublicationDate: this.enumPublicationDate ,
    enumDuration: this.enumDuration ,
    page: this.page,
    size: this.size,
  };


  if (this.adTypes) payload.adTypes = this.adTypes;
  if (this.orgTypes) payload.orgTypes = this.orgTypes;
  if (this.foa) payload.foa = this.foa;
  if (this.degreeLevels) payload.degreeLevels = this.degreeLevels;
  if (this.sort) payload.sort = this.sort;

  return payload;
}
}
