import React from "react";
import "./App.css";

function App() {
	let category = "LOCAL PRIDE SNEAKER SNEAKER";
	let harga = "8xx.xxx";
	return (
		<div class="Parentbox">
			<div class="Foto">
				<img src="poison-street.jpg"></img>
			</div>
			<div class="Deskripsi">
				<p class="Cate">{category}</p>
				<h1 class="Title">Poison Street</h1>
				<p class="Price">IDR {harga}</p>
				<p class="Info">
					Menyita perhatian anak muda. Ini karena ada berbagai macam sneakers
					yang bertali atau slip on. Menariknya lagi, merk satu ini juga
					kebanyakan memiliki warna hitam dan putih yang tentu saja bisa dipakai
					oleh anak-anak sekolah.
				</p>
			</div>
		</div>
	);
}

export default App;
