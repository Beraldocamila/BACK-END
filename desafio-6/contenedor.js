class Contenedor{
    constructor (){
        this.productos=[];
    }

    newId=1;

    getAll(){
        return this.productos;
    }

    getProdId(id){
        let oneProd= this.productos.filter(p=> p.id== Number(id))
        return oneProd;
    }

    postProd(prod){
        prod.id = this.newId ++;

        this.productos.push(prod);
        
    }
}


const products= new Contenedor();

module.exports= products;