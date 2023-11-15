class BonoBus{
    _fecha;
    constructor(){
        this._fecha=new Date()
    }
    picarViaje(){};
}
class BonoDiezViajes extends BonoBus{
_numViajes=10;
dia;
mes;
año;
hora;
minutos;
picarViaje10(){
    fecha=new Date(anio,mes-1,dia,hora,minutos);
        devolver=false;
        if (fecha>this._fecha)
            devolver=true;
            if(this._numViajes<10 && this._numViajes>0){
                this._numViajes--;
            }
            else
    return devolver;
    if(this.picarViaje()==true){
        {
            console.log("No te quedan más viajes");
        }
    }
    else{
    console.log("No puedes picar el bono ")

}
}

picarViaje(){
    if(super.picarViaje=true){
        numViajes--;
    }
    if(this._numViajes>0){
        this._numViajes--;
        return true;
    }
    else{
        return false;
    }

}
get _numViajes(){
return this._numViajes;
}
set _numViajes(numViajes){
this._numViajes=numViajes;
}
}
class BonoTarifaPlana extends BonoBus{

}
class BonoDiezViajesConTrasbordo extends BonoDiezViajes{
    _horaTrasbordo;
    _numLineaUltBus;
    //controlar fecha  y hora despues de que se pique el viaje
}