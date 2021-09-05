
export interface DataInterface {
    title:       string;
    subtitle:    string;
    department:  string;
    description: Description;
    authors:     Authors;
    reviewers:   Reviewers;
    footer:      string;
}
export interface Reviewers {
    fullNames: FullName[];
}
export interface Authors {
    personsDescription: string;
    fullNames: FullName[];
}

export interface Description {
    title:  string;
    about:  string;
    option: string;
}

export interface FullName {
    person: string;
}


