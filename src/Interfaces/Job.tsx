import  User  from './User';
interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    description: string;
    responsibilities: string;
    mandatorySkills: string;
    niceToHaveSkills: string;
    logoUrl: File | null;
    date: string;
    user?: User; // Make user optional

  }
  export default Job;