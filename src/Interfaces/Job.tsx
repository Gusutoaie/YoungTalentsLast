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
    logoUrl: string | null; // Ensure this is a string
    date: string;
    user?: User; // Make user optional
    vechimeAnunt: string;
    tipOferta: string;
    experienta: string;
    remote: string;


  }
  export default Job;