import { Project } from './index';

export interface ProjectData extends Project {
    challenges?: string[];
    solutions?: string[];
    results?: string[];
    techStack: {
        frontend?: string[];
        backend?: string[];
        ai?: string[];
        infrastructure?: string[];
    };
}