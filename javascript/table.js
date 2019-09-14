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

let inputHewan = ()=>{
    let arrHewan = []
    let nama_hewan = document.getElementById('nama_hewan').value
    let umur_hewan = document.getElementById('umur_hewan').value
    let gender_hewan = document.querySelector('input[name=gender_hewan]:checked').value
    let status_hewan = document.querySelector('input[name=status_hewan]:checked').value

    arrHewan.push(
        {
            nama_hewan, umur_hewan, gender_hewan, status_hewan
        }
    )

    let list_hewan = arrHewan.map(hewan =>{
        return(
            `
                <tr>
                    <td>${nama_hewan}</td>
                    <td>${umur_hewan}</td>
                    <td>${gender_hewan}</td>
                    <td>${status_hewan}</td>
                </tr>
            `
        )
    })
    document.getElementById('list-hewan').innerHTML += list_hewan
}