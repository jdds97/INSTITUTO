class BonoBus{
    _fecha;
    constructor(){
        this._fecha=new Date()
    }
    picarViaje(numLin,dia,mes,anio,hora,minutos){
        fecha=new Date(anio,mes-1,dia,hora,minutos);
        devolver=false;
        if (fecha>this._fecha)
            devolver=true;

    return devolver;
    }
}
class BonoDiezViajes extends BonoBus{
_numViajes=10;
picarViaje10(){
    if(this.picarViaje()==true){
        if(this._numViajes<10 && this._numViajes>0){
            this._numViajes--;
        }
        else{
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
}