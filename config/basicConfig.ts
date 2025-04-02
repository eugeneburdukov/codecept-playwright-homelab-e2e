const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;
const apiCasaOSPage = process.env.CASAOSPAGE;
const username = process.env.username;
const password = process.env.password;

export const environment = {
    LAN: {
        casaOSpage: apiKey
    },
    CREDENTIALS: {
        username: username,
        password: password
    },
    JELLYFIN: {
        API_URL: apiUrl,
        API_KEY: apiCasaOSPage
    }
}

export class JellyfinLibraryParser {
    static extractNamesAndLocations(data: any[]): { Name: string; Locations: string[] }[] {
        return data.map(lib => ({
            Name: lib.Name,
            Locations: lib.Locations
        }));
    }
}