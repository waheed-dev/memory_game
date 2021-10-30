import Head from 'next/head'
import {useState} from "react";
import {Body} from "next/dist/server/web/spec-compliant/body";

const cardImages = [
    {'src' : '/img/helmet-1.png'},
    {'src' : '/img/potion-1.png'},
    {'src' : '/img/ring-1.png'},
    {'src' : '/img/scroll-1.png'},
    {'src' : '/img/shield-1.png'},
    {'src' : '/img/sword-1.png'}
]


export default function Home() {
    const [cards,setCards] = useState([])
    const [turns,setTurns] = useState(0)
    const shuffleCards = () => {
        const shuffledCards = [...cardImages,...cardImages].sort(() => Math.random() - 0.5)
            .map((image) => ({...image,id : Math.random()}))
        setCards(shuffledCards)
        setTurns(0)
    }
  return (
    <div className='text-center'>
        <h1 className={' text-2xl font-sans font-bold'}>Memory game</h1>
        <button onClick={shuffleCards} className={'bg-green-500 px-3 mt-6 rounded-2xl text-white py-3 shadow-2xl hover:bg-green-700'}>New Game</button>

    </div>
  )
}
