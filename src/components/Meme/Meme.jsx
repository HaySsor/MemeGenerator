import React, { useState, useEffect } from "react";
import styles from "./Meme.module.css";

function Meme() {
	const [memeObjet, setMemeObject] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});
	const [allMemeImages, setAllMemeImages] = React.useState([]);

	useEffect(() => {
		const URL = "https://api.imgflip.com/get_memes";

		async function getMemes() {
			const res = await fetch(URL);
			const data = await res.json();
			setAllMemeImages(data);
		}
		getMemes();
	}, []); 

	function getMemeImage() {
		const memesArray = allMemeImages.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomNumber].url;
		setMemeObject(prevMeme => ({
			...prevMeme,
			randomImage: url,
		}));
	}
	function hendleData(event) {
		const { name, value } = event.target;

		setMemeObject(prevData => ({
			...prevData,
			[name]: value,
		}));
	}

	return (
		<main>
			<div className={styles.form}>
				<input
					type="text"
					placeholder="Top-text"
					name="topText"
					onChange={hendleData}
					value={memeObjet.topText}></input>
				<input
					type="text"
					placeholder="Bottom-text"
					name="bottomText"
					onChange={hendleData}
					value={memeObjet.bottomText}></input>
				<button onClick={getMemeImage}>Get a new meme image 🖼</button>
			</div>
			<div className={styles.meme}>
				<img src={memeObjet.randomImage} className={styles.memeImage} />
				<h2 className={`${styles.memeText} ${styles.top}`}>
					{memeObjet.topText}
				</h2>
				<h2 className={`${styles.memeText} ${styles.bottom}`}>
					{memeObjet.bottomText}
				</h2>
			</div>
		</main>
	);
}

export default Meme;
