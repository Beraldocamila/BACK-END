class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascota = [];
    }

    //GETFULLNAME
    getFullName () {
        return `Name: ${this.nombre},  Surname: ${this.apellido}`
    }

    //ADDPET
    addMascota(newPet){
        return this.mascota.push(newPet);
    }

    //COUNT PETS
    countMascotas (){
        return this.mascota.length;
    }

    //ADDBOOKS
    addBook(name, author){
        this.libros.push({name, author});
        
    }

    //GETBOOKSNAME
    getBookNames(){
        return this.libros.map(element => element.name);
    }
}


// NEW USER
const user = new Usuario ('Camila', 'Beraldo');

// SHOW FULL NAME
const fullName= user.getFullName()
console.log(fullName)

// ADD PET
user.addMascota("Chilita");
user.addMascota("Pepino");
user.addMascota("Mistica");

//SHOW PETS AMOUNT
const petsAmount = user.countMascotas();
console.log("Cantidad de mascotas: " + petsAmount);

//ADD BOOKS
user.addBook("Rayuela", "Julio Cortazas");
user.addBook("Cien Años de Soledad", "Gabriel Garcia Marquez");

//SHOW 
const booksName = user.getBookNames();
console.log(`Los libros leidos por ${user.nombre}, son : ` + ` " ` +  booksName + ` " `);




