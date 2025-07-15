
interface JobOffer {
    logo: string;
    id: number;
    title: string;
    companyName: string;
    duration: number;
    durationUnit: string;
    durationText: string;
    orgTypeString: string;
    typeString: string;
    levels: string[];
    companyType: string;
    city: string;
    publicationDate: string;
    reference: string;
    type: string;
    offre: string;
    tasks: string[];
    degrees: string[];
    beginDate: string;
    deadline: string;
    application: string[];
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
