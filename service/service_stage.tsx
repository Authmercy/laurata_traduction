type Sector = {
  key: string ;
  text: string;
}; 
type Status = {
  key: string ;
  text: string;
}; 
type Level = {
  key: string ;
  text: string;
}; 
type Duration = {
  key: string ;
  text: string;
}; 
type Contrat = {
  key: string;
  text: string;
  items?: { key: string; text: string }[];
};

type Parution = {
  key: string ;
  text: string;
}; 
interface JobOffer {
    logo: string;
    id: number;
    title: string;
    companyName: string;
    duration: number;
    durationUnit: string;
    durationText: string;
    levels: string[];
    companyType: string;
    city: string;
    publicationDate: string;
    publishedOn: string;
    reference: string;
    type: string;
    offre: string;
    tasks: string[];
    degrees: string[];
    beginDate: string;
    deadline: string;

    salary: { amount: number; currency: string; period: string };
    description: string;
    contact: {
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        role: string;
    };
}
