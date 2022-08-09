const { Console } = require('console');
const {promises:fs} = require('fs');



class Contenedor{

    constructor(ruta){
        this.ruta= ruta;
    }

    async save(product){
        
        try {
            const products = await this.getAll();
            let newId;

            if(products.length == 0){   
                newId = 1;
            }else{
                newId=products[products.length-1].id +1; 
            }

            const newProduct = {id:newId,...product};
            products.push(newProduct)

            await fs.writeFile(this.ruta, JSON.stringify(products,null,2))
            return `New id: ${newId}`
        } catch (error) {
            throw new Error(`Error saving data ${error}`)
        }
    }

    async getById(id){
        let products = await this.getAll();
        let product = products.filter(o=>o.id == id);
        if (product.length == 0 ) {
            return `There's no product with id: ${id}`
        }
        return product;
    }

    async getAll(){
        try {
            const products = await fs.readFile(this.ruta);
            return JSON.parse(products);
        } catch (error) {
            return[];
        }
    }

    async deleteById(id){
        let products = await this.getAll();
        let product = products.filter(o=> o.id!=id);
        try {
            await fs.writeFile(this.ruta, JSON.stringify(product, null, 2))
        } catch (error) {
            return `There is no product to delete`
        }
    }

    async deleteAll(){
        try {
            await fs.writeFile(this.ruta, JSON.stringify([], null, 2))
        } catch (error) {
            return `Products can't be deleted`
        }
    }
}

async function main(){
    const products = new Contenedor('./products.json');

    console.log(await products.save({title: "Television", price: "$60.000", thumbnail: "http://medias.musimundo.com/medias/00431006-144267-144267-01-144267-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3OTI5NHxpbWFnZS9qcGVnfGhlZi9oNDQvMTAzODA5MzUyOTkxMDIvMDA0MzEwMDYtMTQ0MjY3LTE0NDI2N18wMS0xNDQyNjdfMDEuanBnX3NpemU1MTV8Y2JlZTFkMjZjZDFiMDUyNmUxZjNkZTQwZTEwZjZmODg4ZmJkZGVkMWIzOGI4ZDAyNzYwNGJkYWMwYWU1ZTAwMA"}))
    console.log(await products.save({title: "Computer", price: "$100.000", thumbnail: "https://ar-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/3/1/310G4LA-1_T1643307273.png"}))
    console.log(await products.save({title: "Watch", price: "$40.000", thumbnail: "https://stylewatch.vtexassets.com/arquivos/ids/210880-800-auto?width=800&height=auto&aspect=true"}))
}

main();

