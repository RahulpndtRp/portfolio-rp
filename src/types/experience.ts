import { Experience } from './index';

export interface ExperienceData extends Experience {
    achievements: string[];
    keyProjects: string[];
}