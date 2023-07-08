const BASE_URL = 'https://rickandmortyapi.com/api';

function buildUrl({
    path,
    id,
    page,
    search,
}: {
    path: string;
    id?: string;
    page?: number;
    search?: string;
}) {
    let url = !id ? `${BASE_URL}/${path}` : `${BASE_URL}/${path}/${id}`;

    if (page || search) {
        url += '?';
        if (page && page > 1) url += `page=${page}&`
        if (search) url += `name=${search}`;
    }
    console.log(url)
    return url;
}
interface Params {
    id?: string;
    page?: number;
    search?: string;
}

export const apiService = {
    search: async ({ query, path, page }: { query: string, path: string, page?: number }) => {
        const url = buildUrl({ search: query, path, page })
        try {
            const response = await fetch(url);
            if(response.ok == true) {
                return response.json()
            }else{
                return {results:[]}
            }
        } catch (error) {
            console.log(error);
        }
    },
    getLocations: async ({ id, page, search }: Params) => {
        const url = buildUrl({ id, page, path: 'location', search });
        try {
            const response = await fetch(url);
            if(response.ok == true) {
                return response.json()
            }else{
                return {results:[]}
            }
        } catch (error) {
            console.log(error);
        }
    },
    getCharacters: async ({ id, page, search }: Params) => {
        const url = buildUrl({ id, page, path: 'character', search });
        try {
            const response = await fetch(url);
            if(response.ok == true) {
                return response.json()
            }else{
                return {results:[]}
            }
        } catch (error) {
            console.log(error);
        }
    },
    getEpisodes: async ({ id, page, search }: Params) => {
        const url = buildUrl({ id, page, path: 'episode', search });
        try {
            const response = await fetch(url);
            if(response.ok == true) {
                return response.json()
            }else{
                return {results:[]}
            }
        } catch (error) {
            console.log(error);
        }
    },
    getResidente: async ({ url }: { url: string }) => {
        try {
            const response = await fetch(url);
            if(response.ok == true) {
                return response.json()
            }else{
                return {results:[]}
            }
        } catch (error) {
            console.log(error);
        }
    },
    getEpisode: async ({ url }: { url: string }) => {
        try {
            const response = await fetch(url);
            if(response.ok == true) {
                return response.json()
            }else{
                return {results:[]}
            }
        } catch (error) {
            console.log(error);
        }
    }
};