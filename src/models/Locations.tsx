export interface Welcome9 {
    info:    Info;
    results: ResultLocation[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface ResultLocation {
    id:        number;
    name:      string;
    type:      string;
    dimension: string;
    residents: string[];
    url:       string;
    created:   Date;
}