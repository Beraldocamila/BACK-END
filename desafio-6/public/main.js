const socket = io.connect();
const render=(data)=>{
    const html = data.messages.map((e,index)=>{
        return(
            `<div>
                <p>${e.author}</p>
                <p>[${e.date}]</p>
                <p>${e.text}</p>
            </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML =html;

    const prod = data.products.map((p)=>{
        return(
            `<tr>
                <th>${p.title}</th>
                <td>${p.price}</td>
                <td>
                    <img src=${p.thumbnail}>
                </td>
            </tr>`
        )
    }).join(" ")
    document.getElementById("tbody").innerHTML=prod;
}

const addMessage=(m)=>{
    let fecha = new Date().toLocaleDateString()+ ' ' + new Date().toTimeString();
    let fyh = fecha.split(' ');
    const mensaje= {
        author: document.getElementById('username').value,
        text: document.getElementById('text').value,
        date: fyh[0]
    }
    socket.emit('new-message', mensaje)
    return false;
}

const addProduct = (p)=>{
    // let title= document.getElementById('title').value;
    // let price= document.getElementById('price').value;
    // let thumbnail= document.getElementById('thumbail').value
    const prod ={
        title:document.getElementById("title").value,
        price:document.getElementById("price").value,
        thumbnail: document.getElementById("thumbnail").value
    }
    socket.emit('new-product', prod)
    return false;
}

socket.on('messages', (data)=>{render(data)})