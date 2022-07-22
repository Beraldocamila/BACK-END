class Usuario{
    constructor (nombre, apellido){
        this.nombre=nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas=[];
    }


    //GETFULLNAME
    getFullName(){
        return `Name: ${this.nombre}. Surname: ${this.apellido}`;
    }

    //ADDMASCOTA
    addMascota(newPet){
        return this.mascotas.push(newPet);
    }

    //COUNTMASCOTAS
    countMascotas(){
        return this.mascotas.length;
    }

    //ADDBOOK
    AddBook(title, author){
        return this.libros.push({title, author});
    }

    //GETBOOKNAMES
    getBookNames(){
        return this.libros.map(e => e.title);
    }
}

//NEW USER
const user_1 = new Usuario ('Camila', 'Beraldo');
const user_2 = new Usuario ('Paula', 'Lopez');

//GET FULL NAME
const fullname = user_1.getFullName();
const fullname_2 = user_2.getFullName();

console.log(fullname);
console.log(fullname_2);

//ADD AND COUNT PETS

user_1.addMascota('Chilita');
user_1.addMascota('Mora');
user_1.addMascota('Nala');
user_2.addMascota('Paco');

const petsAmount = user_1.countMascotas();
const petsAmount_2 = user_2.countMascotas();

console.log(`Cantidad de mascotas para ${user_1.nombre} : ${petsAmount}`);
console.log(`Cantidad de mascotas para ${user_2.nombre} : ${petsAmount_2}`);

//ADD BOOK

user_1.AddBook('Rayuela', 'Julio Cortazar');
user_2.AddBook('Frankenstein', 'Mary Shelley');

//GET BOOKS NAME

const book = user_1.getBookNames();
const book_2 = user_2.getBookNames();

console.log(`El libro de ${user_1.nombre} : ${book}`);
console.log(`El libro de ${user_2.nombre} : ${book_2}`);
