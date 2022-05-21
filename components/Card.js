import React,{useContext} from 'react'
import Image from 'next/image'
import { SiTinder } from "react-icons/si";
// import fire from '../assets/fire.png'
import CardHeader from './CardHeader'
import CardFooter from "../components/CardFooter"
import TinderCardItem from './TinderCardItem'
import { TinderContext } from '../context/TinderContext';

const style = {
    wrapper: `h-[45rem] w-[27rem] flex flex-col rounded-lg overflow-hidden`,
    cardMain: `w-full flex-1 relative flex flex-col justify-center items-center bg-gray-500`,
    noMoreWrapper: `flex flex-col justify-center items-center absolute`,
    tinderLogo: `text-5xl text-red-500 mb-4`,
    noMoreText: `text-xl text-white`,
    swipesContainer: `w-full h-full overflow-hidden`,
  }

const Card = () => {

  // we want cardsData from our context
  const {cardsData} = useContext(TinderContext)

  return (
    <div className={style.wrapper}>
        <CardHeader/>
        <div className={style.cardMain}>
            <div className={style.noMoreWrapper}>
            {/* <Image
        src={fire}
        height={35}
        width={35}
        alt='fire-logo'
        className={style.logo}
      /> */}
                <SiTinder className={style.tinderLogo}/>
                <div className={style.noMoreText}>
                    No More profiles in your Location...
                </div>
            </div>
            {/* container going to handle swipe-able things */}
            <div className={style.swipesContainer}>
                {/* mapping through the card Data */}
            {cardsData.map((card, index) => (
            <TinderCardItem card={card} key={index} />
          ))}
          {/* static tinder card item */}
          {/* <TinderCardItem /> */}
            </div>
        </div>
        <CardFooter/>
    </div>
  )
}

export default Card