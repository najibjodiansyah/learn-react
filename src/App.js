import React from "react";
import "./App.css";

function App() {
	return (
		<div className="Parentbox">
			<FotoProduk />
			<ProdukInfo
				name="Poison Street"
				category="LOCAL PRIDE SNEAKER SNEAKER"
				harga="8xx.xxx"
			/>
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
			<h1 className="Title">{props.name}</h1>
			<p className="Price">IDR {harga}</p>
			<p className="Info">
				Menyita perhatian anak muda. Ini karena ada berbagai macam sneakers yang
				bertali atau slip on. Menariknya lagi, merk satu ini juga kebanyakan
				memiliki warna hitam dan putih yang tentu saja bisa dipakai oleh
				anak-anak sekolah.
			</p>
			<a onClick={(e) => TambahCart(props.name, e)} href={props.category}>
				Add to Cart
			</a>
		</div>
	);
}

function TambahCart(e) {
	return alert(`Membeli Product ${e}`);
}

export default App;
