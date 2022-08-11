const {promises:fs}= require('fs');


class Contenedor{
    constructor (ruta){
        this.ruta=ruta;
    }

    async getAll(){
        try {
            let products = await fs.readFile(this.ruta);
            return products;
        } catch (error) {
            return[];
        }
    }

    async getRandom(){
        try {
            let products = await this.getAll();
            let productsJSON = JSON.parse(products)
            let random= Math.floor(Math.random()*productsJSON.length)
            return productsJSON[random]
        } catch (error) {
            return []
        }
    }

}

let products = new Contenedor('./productos.txt');


module.exports= products;