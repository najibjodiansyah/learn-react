import React from "react";
import "../App.css";

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

export default ReviewItems;
