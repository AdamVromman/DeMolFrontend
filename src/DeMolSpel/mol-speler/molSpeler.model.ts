interface MolSpelerJSON
{
    id: number;
    voornaam: string;
    eliminatieWeek: number;
    aantalStemmenMol: number;
    aantalStemmenEliminatie: number;
    winnaar: boolean;
    mol: boolean;
}

export class MolSpeler
{
    constructor(
        private _id: number,
        private _voornaam: string,
        private _eliminatieWeek: number,
        private _aantalStemmenMol: number,
        private _aantalStemmenEliminatie: number,
        private _mol: boolean,
        private _winnaar: boolean
    )
    {

    }

    public get Id(): number
    {
        return this._id;
    }

    public get Voornaam(): string
    {
        return this._voornaam;
    }

    public get EliminatieWeek(): number
    {
        return this._eliminatieWeek;
    }

    public get AantalStemmenMol(): number
    {
        return this._aantalStemmenMol;
    }

    public get AantalStemmenEliminatie(): number
    {
        return this._aantalStemmenEliminatie;
    }

    public get Mol(): boolean
    {
        return this._mol;
    }

    public get Winnaar(): boolean
    {
        return this._winnaar;
    }

    public static fromJson(speler: MolSpelerJSON): MolSpeler
    {
        return new MolSpeler(speler.id, speler.voornaam, speler.eliminatieWeek, speler.aantalStemmenMol, speler.aantalStemmenEliminatie, speler.mol, speler.winnaar);
    }

    

}