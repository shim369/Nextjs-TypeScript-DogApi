'use client'
import styles from './page.module.css'
import { useState } from 'react';

interface SearchDogImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

const fetchDogImage = async (): Promise<SearchDogImage> => {
  const res = await fetch("https://api.thedogapi.com/v1/images/search");
  const result = await res.json();
  return result[0];
}

export default function Home() {
  const defaultImageUrl = "/images/pongki.jpg";
  const [dogImageUrl, setDogImageUrl] = useState(defaultImageUrl);

  const handleClick = async () => {
    const dogImage = await fetchDogImage();
    setDogImageUrl(dogImage.url);
  }
  return (
    <div className={styles.dogBox}>
      <h1>犬画像アプリ</h1>
      <img
        src={dogImageUrl}
        alt="Dog Photo"
        width="500"
        height="auto"
      />
      <button className={styles.dogButton} onClick={handleClick}>今日のわんちゃん</button>
    </div>
  )
}