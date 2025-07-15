const BASE_URL = process.env.NEXT_PUBLIC_Base_URL;

export const URLS = {

  INTERNSHIP_SEARCH: `${BASE_URL}/internships/query`,
  GET_INTERNSHIP_DETAIL: `${BASE_URL}/internships/v`,


  GET_INTERNSHIP_SECTOR: `${BASE_URL}/internships/foas`,
  GET_INTERNSHIP_STATUS: `${BASE_URL}/internships/orgtypes`,
  GET_INTERNSHIP_LEVEL: `${BASE_URL}/internships/studylevels`,
  GET_INTERNSHIP_DURATION: `${BASE_URL}/internships/durations`,
  GET_INTERNSHIP_CONTRACT: `${BASE_URL}/internships/adstypes`,
  GET_INTERNSHIP_DATE: `${BASE_URL}/internships/publishperiods`,


  PROGRAM_SEARCH: `${BASE_URL}/studyprogs/search`,
  GET_PROGRAM_DETAIL: `${BASE_URL}/studyprogs/v`,


  GET_PROGRAM_DOMAIN: `${BASE_URL}/studyprogs/studyfields`,
  GET_PROGRAM_TRAINING: `${BASE_URL}/studyprogs/trainingstypes`,
  GET_PROGRAM_DEGREE_LEVEL: `${BASE_URL}/studyprogs/degreelevels`,
  GET_PROGRAM_LANGUAGE: `${BASE_URL}/studyprogs/languages`,
  GET_PROGRAM_TRAINING_MODE: `${BASE_URL}/studyprogs/teachingsmode`,
  GET_PROGRAM_ADMISSION: `${BASE_URL}/studyprogs/admissiontypes`,
  GET_PROGRAM_FEES: `${BASE_URL}/studyprogs/fees`,
  GET_PROGRAM_DISABILITIES: `${BASE_URL}/studyprogs/disabilities`,
  GET_PROGRAM_STATUS: `${BASE_URL}/studyprogs/statusinst`,



  RANKING_ITEMS: `${BASE_URL}/rankings/items`,
  RANKING_REGIONS: `${BASE_URL}/rankings/regions`,
  RANKING_CATEGORIES: `${BASE_URL}/rankings/categories`,

  METIERS: `${BASE_URL}/careers`,
  JOBSHEET: `${BASE_URL}/jobsheets`,
  JOBSHEET_BY_ID: `${BASE_URL}/jobsheets/v/11`,


  ZOOM_ACTU: `${BASE_URL}/newsfeeds`,


  OPENDAYS: `${BASE_URL}/opendays`,
  OPENDAYS_SEARCH: `${BASE_URL}/opendays/search`,


  PUBLIC_UNIVERSITY: `${BASE_URL}/publicipes`,

  CV_UPLOAD: `${BASE_URL}/curricula/upload`,
  SECTOR: `${BASE_URL}/curricula/sectors`,

  SCHOLARSHIP_OVERVIEW: `${BASE_URL}/scholarships/overview`,
  SCHOLARSHIPS: `${BASE_URL}/scholarships`,


  REGISTRATION: `${BASE_URL}/users`,


  QUIZZES: `${BASE_URL}/quizzes`,
  QUIZZES_READ: `${BASE_URL}/quizzes`,

  SCHOOLS: `${BASE_URL}/showcases/schools`,

  GLOSSARY: `${BASE_URL}/glossary`,


  ONDISPLAY_SCHOOLS: `${BASE_URL}/ondisplay/schools`,
  ONDISPLAY_EMPLOYERS: `${BASE_URL}/ondisplay/employers`,
  ONDISPLAY_EXPERTS: `${BASE_URL}/ondisplay/experts`,

  ONDISPLAY_LADIES: `${BASE_URL}/ondisplay/ladies`,


   EXAMS: `${BASE_URL}/exams/ads`,

      MESSAGE: `${BASE_URL}/messages`,
};
