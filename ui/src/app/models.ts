export class Resource {
    id: string;
}

export class questionsData{
    public name: string;
    public description: string;
    public filepath: string

    constructor(name: string, des: string, filep: string){
        this.name = name;
        this.description = des;
        this.filepath = filep;
    }
}

export class User extends Resource {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    id: string;
    constructor(cfg: Partial<User> = {})
    {
        super();
        Object.entries(cfg).map(e => this[e[0]] = e[1]);
    }

    get fullName(): string {
        return (this.firstName ? this.firstName : '') + ' ' +
            (this.lastName ? this.lastName : '');
    }

}
