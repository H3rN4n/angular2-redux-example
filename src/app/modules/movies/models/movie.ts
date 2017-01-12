export class Movie {
    _id: number;
    name: string;
    description: string;
    cast: {
        values: string[],
        type: string
    };

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    set id(param) {
        if (typeof param !== 'number') throw 'The movie id must be a number'
        this._id = param;
    }
    get id(){
        return this._id;
    }
}
