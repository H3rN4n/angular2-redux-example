export class Movie {
    id: number;
    name: string;
    description: string;
    cast: {
        values: string[],
        type: string
    };

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
