interface molSpelJSON
{
    id: number;
    jaar: number;
    week: number;
}

export class MolSpel
{
    constructor(
        private id: number,
        private jaar: number,
        private week: number
    ){}

    public static fromJson(json: molSpelJSON): MolSpel
    {
        return new MolSpel(json.id, json.jaar, json.week);
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

    public weekPlusEen()
    {
        this.week++;
    }
}
