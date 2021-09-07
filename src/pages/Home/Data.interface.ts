export interface Title {
    text: string;
    color: string;
}

export interface Subtitle {
    text: string;
    color: string;
}

export interface Department {
    text: string;
    color: string;
}

export interface Title {
    text: string;
    color: string;
}

export interface About {
    text: string;
    color: string;
}

export interface Option {
    text: string;
    color: string;
}

export interface Description {
    title: Title;
    about: About;
    option: Option;
}

export interface PersonsDescription {
    text: string;
    color: string;
}

export interface Person {
    text: string;
    color: string;
}

export interface FullName {
    person: Person;
}

export interface PersonAction {
    text: string;
    color: string;
}

export interface Authors {
    authorsAction : PersonAction,
    personsDescription: PersonsDescription;
    fullNames: FullName[];
}


export interface Reviewers {
    reviewersAction : PersonAction;
    fullNames: FullName[];
}

export interface Footer {
    text: string;
    color: string;
}

export interface DataInterface {
    title: Title;
    subtitle: Subtitle;
    department: Department;
    description: Description;
    authors: Authors;
    reviewers: Reviewers;
    footer: Footer;
}


