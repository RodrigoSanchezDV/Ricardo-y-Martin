

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  string;
}

 
export interface Location {
    name: string;
    url:  string;
}
export interface ResultCharacters {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export interface TipadoInformacion {
    info:    Info;
    results: ResultCharacters[];
}