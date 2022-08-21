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

        this.productos.push(prod);
        
    }

    deleteProd(id){
        let finalProd = this.productos.filter(p=>p.id != Number(id))
        this.productos=finalProd;
        return this.productos;
    }

    putProd(id,prod){
        this.productos.forEach(p=>{
            if(p.id == Number(id)){
                

                p={...prod,id:id};
                this.productos[id]=p;
            }
        })
        return this.productos;
    }
}


const products= new Contenedor();

module.exports= products;