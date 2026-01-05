export interface IProject{
    id:number;
    title:string;
    description:string;
    image:string;
    tags:string[];
    fullDescription:string;
    demoUrl:string;
    githubUrl:string;
    color:string;
    category:string;
}

export interface ISkill{
    name:string;
    level:number;
    category:string;
    icon:string;
}
export interface IEducation{
    title:string;
    institution:string;
    year:string;
    description:string;
    type:string;
}