<script>
// Inisialisasi keranjang sebagai array kosong
let cart = [];

// Fungsi untuk menambah item ke keranjang
function addToCart(product, price) {
    cart.push({ product, price });
    alert(product + " telah ditambahkan ke keranjang.");
    console.log("Keranjang: ", cart);  // Untuk melihat apa yang ada di keranjang
}

// Event listener untuk tombol "Tambah ke Keranjang"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.getAttribute('data-product');
        const price = this.getAttribute('data-price');
        addToCart(product, price);
    });
});

// Fungsi untuk Checkout
function checkout() {
    if (cart.length === 0) {
        alert("Keranjang Anda kosong! Silakan tambahkan item sebelum checkout.");
    } else {
        // Simpan keranjang di local storage agar bisa diakses di halaman checkout
        localStorage.setItem('cart', JSON.stringify(cart));

        // Arahkan ke halaman checkout (misalnya checkout.html)
        window.location.href = 'checkout.html';
    }
}

// Event listener untuk tombol "Checkout"
document.getElementById('checkout-btn').addEventListener('click', checkout);
</script>
