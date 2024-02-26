export class User {
    id: string;
    avatarUrl: string;
    name: string;
    date: string;
    owner: number;
    description: string;
    ownerText: string;

    constructor(id: string, avatarUrl: string, name: string, date: string, owner: number, description: string, ownerText: string) {
        this.id = id;
        this.avatarUrl = avatarUrl;
        this.name = name;
        this.date = date;
        this.owner = owner;
        this.description = description;
        this.ownerText = ownerText;
        
    }
}
