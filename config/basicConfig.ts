export const environment = {
    LAN: {
        casaOSpage: "http://192.168.1.231"
    },
    CREDENTIALS: {
        username: "eugeneb",
        password: "drandulet"
    },
    JELLYFIN: {
        API_URL: "http://192.168.1.231:8097",
        API_KEY: "e125d61ac19c4dc69a398cb71405c9cc"
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