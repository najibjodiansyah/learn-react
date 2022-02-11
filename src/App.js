import React from "react";
import "./App.css";

function App() {
	return (
		<div className="Parentbox">
			<FotoProduk />
			<ProdukInfo category="LOCAL PRIDE SNEAKER SNEAKER" harga="8xx.xxx" />
		</div>
	);
}

function FotoProduk() {
	return (
		<div className="Foto">
			<img src="poison-street.jpg" alt="Foto Sepatu" />
		</div>
	);
}

function ProdukInfo(props) {
	let { harga } = props;
	return (
		<div className="Deskripsi">
			<p className="Cate">{props.category}</p>
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
