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
				Discount="coming"
			/>
			<ReviewItems />
		</div>
	);
}

function ReviewItems() {
	// mempersiapkan data dummy JSON
	const users = [
		{
			id: 1,
			name: "Muhammad Najib",
			img: "https://avatars.githubusercontent.com/u/62690560?v=4",
			review: "Harganya Murah Kualitas Bukan Kaleng-Kaleng",
		},
		{
			id: 2,
			name: "Muhammad Hakim",
			review: "Harganya Mahal Kualitas Bukan Kaleng-Kaleng",
		},
		{
			id: 3,
			name: "Muhammad Ishaq",
			review: "Harganya Sedeng Kualitas Bukan Kaleng-Kaleng",
		},
	];
	const listReview = users.map((item) => (
		<div className="Item">
			<img src={item.img} alt="Foto Profile"></img>
			<div className="User">
				<h3>{item.name}</h3>
				<p>{item.review}</p>
			</div>
		</div>
	));
	return (
		<div className="Review-box">
			<h2>Review</h2>
			{listReview}
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

function CheckDiscount(props) {
	const { Discount } = props;
	if (Discount === "yes") {
		return <p>DISCOUNT 50 %</p>;
	} else if (Discount === "coming") {
		return <p>DISCOUNT IS COMING</p>;
	}
	return <p>TIDAK DISCOUNT</p>;
}

function ProdukInfo(props) {
	const { harga, Discount } = props;
	const benefits = ["Anti air", "Anti bau", "Nasionalis"];
	const listBenefits = benefits.map((item) => <li>{item}</li>);
	return (
		<div className="Deskripsi">
			<p className="Cate">{props.category}</p>
			<h1 className="Title">{props.name}</h1>
			<p className="Price">IDR {harga}</p>
			<CheckDiscount Discount={Discount} />
			<p className="Info">
				Menyita perhatian anak muda. Ini karena ada berbagai macam sneakers yang
				bertali atau slip on. Menariknya lagi, merk satu ini juga kebanyakan
				memiliki warna hitam dan putih yang tentu saja bisa dipakai oleh
				anak-anak sekolah.
			</p>
			<ul>{listBenefits}</ul>
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
