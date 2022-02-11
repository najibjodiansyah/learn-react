import React from "react";
import "./App.css";

function App() {
	return <div className="Parentbox"></div>;
}

const FotoProduk = () => {
	<div className="Foto">
		<img src="poison-street.jpg" alt="Foto Sepatu"></img>
	</div>;
};

function ProdukInfo() {
	let category = "LOCAL PRIDE SNEAKER SNEAKER";
	let harga = "8xx.xxx";
	return (
		<div className="Deskripsi">
			<p className="Cate">{category}</p>
			<h1 className="Title">Poison Street</h1>
			<p className="Price">IDR {harga}</p>
			<p className="Info">
				Menyita perhatian anak muda. Ini karena ada berbagai macam sneakers yang
				bertali atau slip on. Menariknya lagi, merk satu ini juga kebanyakan
				memiliki warna hitam dan putih yang tentu saja bisa dipakai oleh
				anak-anak sekolah.
			</p>
		</div>
	);
}

export default App;
