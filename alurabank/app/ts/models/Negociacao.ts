// app/js/models/Negociacao.js
class Negociacao{

    private _data;
    private _quantidade;
    private _valor;

    //Construtor
    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    //Get data
    get data(){
        return this._data;
    }

    //Get quantidade
    get quantidade(){
        return this._quantidade;
    }

    //Get valor
    get valor(){
        return this._valor;
    }

    //Get volume -> Quantidade * Valor
    get volume(){
        return this._quantidade * this._valor;
    }
}