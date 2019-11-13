//  Clase para la lectura y evaluación de polinomios.
class CPolinomio
{
    /*
    *   Esta clase lee un polinomio de la forma:
    *       a_n*X^n + a_(n-1)*X^(n-1) + a_(n-2)*X^(n-2) + ... + a_2*X^2 + a_1*X^1 + a_0n
    *
    *   Evalúa que la sintaxis sea correcta y permite obtener el
    *   grado del polinomio así como un array con los coeficientes.
    */
    constructor(_polinomio){
        this._polinomio = _polinomio;
        this._grado = 0;
        this._coeficientes = new Array(0);
        this._valido = true;
        this._estado = '';

        //  La siguiente variable se utiliza para almacenar
        //  el código numérico del caracter a examinar.
        this._caracter = 0;
        this._0 = '0'.charCodeAt();
        this._1 = '1'.charCodeAt();
        this._2 = '2'.charCodeAt();
        this._3 = '3'.charCodeAt();
        this._4 = '4'.charCodeAt();
        this._5 = '5'.charCodeAt();
        this._6 = '6'.charCodeAt();
        this._7 = '7'.charCodeAt();
        this._8 = '8'.charCodeAt();
        this._9 = '9'.charCodeAt();
        /*
        this._a = 'a'.charCodeAt();
        this._A = 'A'.charCodeAt();
        this._a = 'b'.charCodeAt();
        this._A = 'B'.charCodeAt();
        this._a = 'c'.charCodeAt();
        this._A = 'C'.charCodeAt();
        this._d = 'd'.charCodeAt();
        this._D = 'D'.charCodeAt();
        */
        this._x = 'x'.charCodeAt();
        this._X = 'X'.charCodeAt();
        this._exponente = '^'.charCodeAt();
        this._subindice = '_'.charCodeAt();
        this._multiplicacion = '*'.charCodeAt();
        this._suma = '+'.charCodeAt();
        this._resta = '-'.charCodeAt();
        this._division = '/'.charCodeAt();
        this._parentesis = '('.charCodeAt();
        this._parentesis2 = ')'.charCodeAt();

        //  Este método verifica mediante un autómata sí la
        //  sintáxis del polinomio es correcta.
        this.verificar = function(){
            if(this._polinomio.length > 0){
                var count = 0;
                while(count < this._polinomio.length){
                    this._caracter = str[count].charCodeAt();
                    switch(this._caracter){
                        case this._0:
                        case this._1:
                        case this._2:
                        case this._3:
                        case this._4:
                        case this._5:
                        case this._6:
                        case this._7:
                        case this._8:
                        case this._9:
                            break;
                        case this._x:
                        case this._X:
                            break;
                        case this._exponente:
                            break;
                        case this._subindice:
                            break;
                        case this._multiplicacion:
                            break;
                        case this._suma:
                            break;
                        case this._resta:
                            break;
                        case this._division:
                            break;
                        case this._parentesis:
                            break;
                        case this._parentesis2:
                            break;
                        default:
                            break;
                    }
                    count++;
                }
            } else {
                this._valido = false;
                this._estado = 'no_polinomio';
            }
            return this._valido;
        };

        //  Este método se encarga de ordenar los terminos
        //  de acuerdo al exponente de mayor a menor y de
        //  derecha a izquierda.
        this.ordenar = function(){};

        //  Este método se encarga de obtener el grado del
        //  polinomio y de un array con sus coeficientes.
        //  Los datos mencionados se pueden obtener con los
        //  métodos grado() y coeficientes() respectivamente
        //  respectivamente.
        this.obtenerDatos = function(){};

        //  Dentro del constructor se realizan los métodos
        //  antes mencionados para que al momento de llamar
        //  los métodos getter ya estén sisponibles los
        //  datos del polinomio.
        if(this.verificar()){
            this.ordenar();
            this.obtenerDatos();
        } else {
            console.log(this._estado);
        }
    }
    get grado(){
        return this._grado;
    }
    get coeficientes(){
        return this._coeficientes;
    }
}
