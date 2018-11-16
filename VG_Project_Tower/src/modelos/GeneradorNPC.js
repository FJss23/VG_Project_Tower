class GeneradorNPC extends Modelo {

    constructor(imagen, x,y, vxNpc, vyNpc){
        super(imagen, x, y);

        this.vxNpc = vxNpc;
        this.vyNpc = vyNpc;

        this.addPositionX = 0;
        this.addPositionY = 0;

        if(vxNpc > 0){
            this.addPositionX = 20;
        }
        else if(vxNpc < 0){
            this.addPositionX = -30;
        }
        else if(vyNpc > 0){
            this.addPositionY = 30;
        }
        else if(vyNpc < 0){
            this.addPositionY = - 30;
        }

        // Tiempo de generación de personajes
        this.cadenciaGeneracionEnemigo = 300;
        this.tiempoGeneracionEnemigo = 0;

        this.cadenciaGeneracionAliado = 400;
        this.tiempoGeneracionAliado = 0;
    }

    actualizar(){
        if(this.tiempoGeneracionAliado > 0){
            this.tiempoGeneracionAliado--;
        }
        if(this.tiempoGeneracionEnemigo > 0){
            this.tiempoGeneracionEnemigo--;
        }
    }

    generarAliado(){
        if(this.tiempoGeneracionAliado == 0){
            this.tiempoGeneracionAliado = this.cadenciaGeneracionAliado;
            return new Aliado(this.x + this.addPositionX,
                this.y + this.addPositionY, this.vxNpc, this.vyNpc);
        }
        return null;
    }

    generarEnemigo(){
        if(this.tiempoGeneracionEnemigo == 0) {
            this.tiempoGeneracionEnemigo = this.cadenciaGeneracionEnemigo;
            return new Enemigo(this.x + this.addPositionX,
                this.y + this.addPositionY, this.vxNpc, this.vyNpc);
        }
        return null;
    }
}