interface molSpelJSON
{
    id: number;
    jaar: number;
    week: number;
}

export class MolSpel
{
    constructor(
        private _id: number,
        private _jaar: number,
        private _week: number
    ){}

    public static fromJson(json: molSpelJSON): MolSpel
    {
        return new MolSpel(json.id, json.jaar, json.week);
    }
    
    public get Id(): number
    {
        return this._id;
    }

    public get Jaar(): number
    {
        return this._jaar;
    }

    public get Week(): number
    {
        return this._week;
    }
}
