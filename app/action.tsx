"use server";
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

 //all execute as a server action

export const fetchAnime = async (page: number) => {
    const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`);

    const data = await response.json(); //extract data

    // console.log(data);

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ));
} 
