interface molSpelJSON
{
    id: number;
    jaar: number;
    week: number;
    actiefSpel: boolean;
    molSpelerIds: number[]
}

export class MolSpel
{
    constructor(
        private id: number,
        private jaar: number,
        private week: number,
        private actiefSpel: boolean,
        private molSpelerIds: number[]
    ){}

    public static fromJson(json: molSpelJSON): MolSpel
    {
        return new MolSpel(json.id, json.jaar, json.week, json.actiefSpel, json.molSpelerIds);
    }
    
    public get Id(): number
    {
        return this.id;
    }

    public get Jaar(): number
    {
        return this.jaar;
    }

    public get Week(): number
    {
        return this.week;
    }

    public get ActiefSpel(): boolean
    {
        return this.ActiefSpel;
    }

    public get MolSpelerIds(): number[]
    {
        return this.MolSpelerIds;
    }
}
