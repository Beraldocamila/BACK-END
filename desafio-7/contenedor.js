class Contenedor{
    constructor (){
        this.productos=[];
    }

    newId=0;

    getAll(){
        return this.productos;
    }

    getProdId(id){
        let oneProd= this.productos.filter(p=> p.id== Number(id))
        return oneProd;
    }

    postProd(prod){
        prod.id = this.newId ++;
        prod.timestamp = Date.now();
        this.productos.push(prod);
    }

    deleteProd(id){
        let finalProd = this.productos.filter(p=>p.id != Number(id))
        this.productos=finalProd;
        return this.productos;
    }

    putProd(id,prod){
        this.productos = this.productos.map(p=>{
            if(p.id == id){
                if(prod.title){
                    p.title=prod.title;
                }
                if(prod.price){
                    p.price=prod.price;
                }
                if(prod.thumbnail){
                    p.thumbnail=prod.thumbnail;
                }
            }
            return p;
        })
        return prod;
    }
}


const products= new Contenedor();

module.exports= products;