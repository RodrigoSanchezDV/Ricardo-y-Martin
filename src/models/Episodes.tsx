export interface Welcome6 {
    info:    Info;
    results: ResultEpisode[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface ResultEpisode {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: string[];
    url:        string;
    created:    Date;
}
