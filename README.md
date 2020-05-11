# Terqueue

## Latar Belakang

Pada dasarnya repository ini dibuat karena kebingungan tentang apa itu event emitter pada NodeJS. Kegunaannya, dan kenapa harus ada. Setelah membaca berbagai referensi, tingkah laku javascript itu sendiri yang membuat fitur ini harus ada. Dilansir langsung dari [nodeJS](https://nodejs.org/api/events.html), disebutkan bahkan banyak API dari nodejs sendiri dibangun dengan arsitektur asynchronous. Dimana di setiap objek memiliki pancaran event sehingga mewajibkan ada sebuah fungsi yang dijadikan pendengar dari event yang dipancarkan.

## Ada Apa ?

Di dalam repository ini, akan diberikan beberapa contoh tentang penggunaan event emitter pada beberapa contoh kasus.

- Dummy

- Download

- Delegasi

Ketiga contoh di atas, akan dijelaskan di masing-masing direktori, latar belakang, proses dan tujuannya.

## Caranya

Untuk menjalankan repository ini, pastikan komputer yang kamu gunakan terinstall nodejs versi v12.xx. Karena untuk contoh ketiga, yaitu `delegasi` kita akan menggunakan API nodejs [`worker_threads`](https://nodejs.org/api/worker_threads.html). Untuk versi nodejs 10.xx kita harus menambahkan flag `--experimental-worker` saat menjalankan program ini.

## Kendala

Secara detail, API yang dimiliki event emitter masih banyak yang belum digunakan. Juga contoh kasus yang ada perlu ditambahkan. Agar lebih menggambarkan lebih jelas.