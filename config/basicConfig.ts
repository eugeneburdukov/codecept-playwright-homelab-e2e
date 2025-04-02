const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;
const apiCasaOSPage = process.env.CASAOSPAGE;

export const environment = {
    LAN: {
        casaOSpage: apiKey
    },
    CREDENTIALS: {
        username: "eugeneb",
        password: "drandulet"
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