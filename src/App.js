import React from "react";
import "./App.css";
import ReviewItems from "./components/reviews";
import PropTypes from "prop-types";

function App() {
	return (
		<div className="Parentbox">
			<FotoProduk />
			<ProdukInfo
				name="Poison Street"
				category="LOCAL PRIDE SNEAKER SNEAKER"
				harga="8xx.xxx"
				Discount="yes"
			/>
			<ReviewItems />
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
	const { Discount, disc } = props;
	if (Discount === "yes") {
		return <p>DISCOUNT {disc} %</p>;
	} else if (Discount === "coming") {
		return <p>DISCOUNT IS COMING</p>;
	}
	return <p>TIDAK DISCOUNT</p>;
}

function ProdukInfo(props) {
	const { harga, Discount } = props;
	const benefits = ["Anti air", "Anti bau", "Nasionalis"];
	const listBenefits = benefits.map((item) => <li key={item}>{item}</li>);
	return (
		<div className="Deskripsi">
			<p className="Cate">{props.category}</p>
			<h1 className="Title">{props.name}</h1>
			<p className="Price">IDR {harga}</p>
			<CheckDiscount Discount={Discount} disc={50} />
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

CheckDiscount.propTypes = {
	disc: PropTypes.number.isRequired,
};

export default App;
