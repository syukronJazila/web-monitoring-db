// Ambil tabel
const curah = document.getElementById("curah").getElementsByTagName('tbody')[0];
const curahjam = document.getElementById("curahjam").getElementsByTagName('tbody')[0];
const curahrt = document.getElementById("curahrt").getElementsByTagName('tbody')[0];
const ketinggian = document.getElementById("ketinggian").getElementsByTagName('tbody')[0];
const ketinggianmenit = document.getElementById("ketinggianmenit").getElementsByTagName('tbody')[0];
const ketinggianrt = document.getElementById("ketinggianrt").getElementsByTagName('tbody')[0];
const prediksi = document.getElementById("prediksi").getElementsByTagName('tbody')[0];
const prediksiSurut = document.getElementById("prediksiSurut").getElementsByTagName('tbody')[0];

function hapusData(){
    // Mengambil semua elemen <table> dalam dokumen
    var tables = document.querySelectorAll('table');

    // Loop melalui setiap tabel dan hapus isi dari setiap tabel
    tables.forEach(function(table) {
        // Mengambil elemen <tbody> dari setiap tabel
        var tbody = table.querySelector('tbody');

        // Hapus semua elemen <tr> dari <tbody>
        tbody.innerHTML = '';
    });

}

function ambilData(){

    hapusData();

    // Fetch data dari API
    fetch('http://ummuhafidzah.sch.id/kehadiran/aquawatch/token.php')
        .then(response => response.json())
        .then(data => {
            
            data.curah.forEach(item => {
                
                var row = curah.insertRow();
            
                // Masukkan data ke dalam sel-sel baru
                Object.keys(item).forEach(key => {
                    var cell = row.insertCell();
                    cell.textContent = item[key];
                });
            });
            
            data.curahjam.forEach(item => {
                
                var row = curahjam.insertRow();
            
                // Masukkan data ke dalam sel-sel baru
                Object.keys(item).forEach(key => {
                    var cell = row.insertCell();
                    cell.textContent = item[key];
                });
            });
        
            data.curahrt.forEach(item => {
                
                var row = curahrt.insertRow();
            
                // Masukkan data ke dalam sel-sel baru
                Object.keys(item).forEach(key => {
                    var cell = row.insertCell();
                    cell.textContent = item[key];
                });
            });
        
            data.ketinggian.forEach(item => {
                
                var row = ketinggian.insertRow();
            
                // Masukkan data ke dalam sel-sel baru
                Object.keys(item).forEach(key => {
                    var cell = row.insertCell();
                    cell.textContent = item[key];
                });
            });
            
            data.ketinggianmenit.forEach(item => {
                
                var row = ketinggianmenit.insertRow();
            
                // Masukkan data ke dalam sel-sel baru
                Object.keys(item).forEach(key => {
                    var cell = row.insertCell();
                    cell.textContent = item[key];
                });
            });
        
            data.ketinggianrt.forEach(item => {
                
                var row = ketinggianrt.insertRow();
            
                // Masukkan data ke dalam sel-sel baru
                Object.keys(item).forEach(key => {
                    var cell = row.insertCell();
                    cell.textContent = item[key];
                });
            });
        
            data.prediksi.forEach(item => {
                
                var row = prediksi.insertRow();
            
                // Masukkan data ke dalam sel-sel baru
                Object.keys(item).forEach(key => {
                    var cell = row.insertCell();
                    cell.textContent = item[key];
                });
            });
        
            data.prediksiSurut.forEach(item => {
                
                var row = prediksiSurut.insertRow();
            
                // Masukkan data ke dalam sel-sel baru
                Object.keys(item).forEach(key => {
                    var cell = row.insertCell();
                    cell.textContent = item[key];
                });
            });
        
        })
        .catch(error => console.error('Error:', error));
}
    
document.getElementById("ambil-data").addEventListener("click", ambilData);
