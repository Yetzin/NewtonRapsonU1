// Clase para la lectura del error
class CError{
    constructor(_valorInicial){
        this._valorInicial = _valorInicial;
        this.real = function(_valorAproximado){
            return (this._valorInicial - _valorAproximado);
        };
        this.relativo = function(_valorActual){
            var resultado = _valorActual - this._valorInicial;
            this._valorInicial = _valorActual;
            return resultado;
        };
        this.relativoPorcentual = function(_valorActual){
            var resultado = 100*(_valorActual - this._valorInicial)/_valorActual;
            this._valorInicial = _valorActual;
            return resultado;
        };
    }
}
