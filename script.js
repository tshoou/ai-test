    // Menangani pengiriman form
    document.getElementById('ppdbForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Mengambil data dari form
        const nama = document.getElementById('nama').value;
        const nisn = document.getElementById('nisn').value;
        const kelas = document.getElementById('kelas').value;
        const jurusan = document.getElementById('jurusan').value;
        
        // Membuat elemen list baru untuk menampilkan data siswa
        const listItem = document.createElement('li');
        listItem.textContent = `Nama: ${nama}, NISN: ${nisn}, Kelas: ${kelas}, Jurusan: ${jurusan}`;
        
        // Menambahkan item ke dalam list
        document.getElementById('dataSiswaList').appendChild(listItem);
        
        // Mengosongkan form setelah data tersimpan
        document.getElementById('ppdbForm').reset();
    });
    