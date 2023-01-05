import React from 'react';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuerry';
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'

type Props = {
    setSelectedPage: ( value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
    const aboveMediaScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section id="home" className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
        {/* Image and Main header */}
        <div className="">
          {/* Main Header */}
          <div className="">
            {/* Heading */}
            <div className="">
                <div className="">
                    <div className="">
                        <img src={HomePageText} alt="home-page-text" />
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla accusamus magnam quod, dolores numquam veniam repellat? Iusto tenetur autem distinctio, porro illo natus doloremque iure sequi libero earum sed?
                </p>
            </div>
            {/* Action */}
            <div className="">
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            </div>
          </div>
          {/* Image */}
          <div className=""></div>
        </div>

    </section>
  )
}

export default Home;