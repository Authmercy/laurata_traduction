type FilterCondition = {
  condition: string;
  values: string[];
}

type SortOptions = {
  field: string;
  direction: string;
}
type Contact = {
    id: number;
    location: number;
    phones: string;
    mail: string;
    website: string;
}
type FormationFilters = {
  id: number;
  degreeName: string;
  studyLevel: string;
  schoolName: string;
  studyField: string;
  trainingsType: string;
  totalElements: number;
  deliveryMethods: string[];
  languages: string[];
  requirements: {
    text: string | null;
    admissionTypes: string[];
    degrees: string[];
  };
  fees: {
    text: string | null;
    categories: string[];
  };
  schoolType: string;
  contacts: {
    pobox: string;
    website: string;
    phone: string;
    localisation: string;
    email: string;
  };
  city: string;
  state: {
    countryCode: string;
    country: string;
    name: string;
  };
}