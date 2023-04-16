<!DOCTYPE html>
<html>
<head>
    <title>Kondisi Toilet</title>
    <!-- Tambahkan Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Tambahkan CSS kustom -->
    <style>
        body {
            background-color: #f5f5f5;
        }
        table {
            background-color: #fff;
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            padding: 8px;
            text-align: center;
        }
        th {
            background-color: #007bff;
            color: #fff;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        .center-img {
            display: flex;
            justify-content: center;
        }
    </style>
</head>
<body>

<div class="container">
    <h1 class="my-4">KONDISI TOILET</h1>
    <?php
    // Buat koneksi ke database
    $servername = "localhost"; // Nama server
    $username = "root"; // Nama pengguna database
    $password = ""; // Kata sandi database
    $dbname = "toilet"; // Nama database
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Periksa koneksi
    if (!$conn) {
        die("Koneksi gagal: " . mysqli_connect_error());
    }

    // Query untuk mengambil data dari tabel
    $sql = "SELECT * FROM kondisi";
    $result = mysqli_query($conn, $sql);

    // Tampilkan data dalam bentuk tabel HTML
    if (mysqli_num_rows($result) > 0) {
        echo "<table>";
        echo "<thead><tr><th>ID Toilet</th><th>Kamar Toilet</th><th>Status Toilet <br>(0=tersedia, 1=tidak tersedia)</th></tr></thead>";
        echo "<tbody>";
        // Loop melalui setiap baris hasil query
        while($row = mysqli_fetch_assoc($result)) {
            echo "<tr><td>" . $row["id"] . "</td><td>" . $row["name"] . "</td><td>" . $row["status"] . "</td></tr>";
        }
        echo "</tbody></table><br>";
        echo "<div class='center-img'><img src='petacontoh.jpg' alt='Lokasi Toilet SMA Kanaan Tangerang' width='500' height='400'></div>";
    } else {
        echo "Tidak ada data yang ditemukan.";
    }

    // Tutup koneksi ke database
    mysqli_close($conn);
    ?>
</div>

<!-- Tambahkan Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper-core.min.js"
        integrity="sha384-jVayHD5KjHvY8W5nB9yL7pJUV1dKhs8W5C1ONhnbw/hGqJS3l/KdKudhCrkXaPb5"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn