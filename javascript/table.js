//Akan running ketika menekan tombol 'Tambhkan' pada Table Manusia

let inputManusia = () =>{
    let arrManusia = []
    // console.log('Hello from the other side')
    //Ambil data dari form
    let nama = document.getElementById('nama').value
    let umur = document.getElementById('umur').value
    let gender = document.querySelector('input[name=gender]:checked').value
    let pekerjaan = document.getElementById('pekerjaan').value
    
    //Tambahkan data ke array
    arrManusia.push(
        {
            nama, umur, gender, pekerjaan
        }
    )
    
    //Render List
    let list = arrManusia.map(manusia=> {
        return(
            `
            <tr>
                <td>${manusia.nama}</td>
                <td>${manusia.umur}</td>
                <td>${manusia.gender}</td>
                <td>${manusia.pekerjaan}</td>
            <tr>
            `
        )
    })
    
    document.getElementById('list-manusia').innerHTML += list

    
}