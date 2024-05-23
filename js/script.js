// ini js
let iskelilingvisble = false; //keliling is Hide
function hideOrShow(){
    if (iskelilingvisble == false) {
        iskelilingvisble = true;
        document.getElementById('luas-section').style.display ='none';
        document.getElementById('keliling-section').style.display ='block';
    } else {
        iskelilingvisble = false;
        document.getElementById('luas-section').style.display ='block';
        document.getElementById('keliling-section').style.display ='hide';
    }
    
}

console.log ('Test Hitung')
function luas() {
    let alas = document.getElementById("alas").value;
    let tinggi = document.getElementById("tinggi").value;
    if (alas !='' && tinggi !=''){
        console.log ('Sukses Hitung');
    } else {
        alert('Inputan Kosong')
    }
    let luas = parseInt(alas) * parseInt(tinggi)/2;
    document.getElementById('luas').innerHTML = luas ;
}

function keliling() {
    let sisi_a = document.getElementById("sisi_a").value;
    let sisi_b = document.getElementById("sisi_b").value;
    let sisi_c = document.getElementById("sisi_c").value;
    if (sisi_a!='' && sisi_b!='' && sisi_c!=''){
        console.log ('Sukses Hitung');
    } else {
        alert('Inputan Kosong')
    }
    let keliling = parseInt(sisi_a) + parseInt(sisi_b) + parseInt(sisi_c);

    document.getElementById('keliling').innerHTML = keliling;
}

