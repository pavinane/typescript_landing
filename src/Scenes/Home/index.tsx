import React from 'react';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuerry';
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


type Props = {
    setSelectedPage: ( value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
    const aboveMediaScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and Main header */}
      <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Heading */}
          <motion.div className="md:-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true,amount:0.5}}
          transition={{duration:2}}
          variants={{
            hidden:{
              opacity:0,x:-50
            },
            visible:{
              opacity:1,x:0
            }
          }}
          
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className='mt-8 text-sm md:text-start'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis nulla accusamus magnam quod, dolores numquam veniam
              repellat? Iusto tenetur autem distinctio, porro illo natus
              doloremque iure sequi libero earum sed?
            </p>
          </motion.div>
          {/* Action */}
          <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{once: true,amount:0.5}}
           transition={{delay:0.2 ,duration:2}}
           variants={{
             hidden:{
               opacity:0,x:-50
             },
             visible:{
               opacity:1,x:0
             }
           }}
          
          className='mt-8 flex items-center gap-8 md:justify-start'>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-30 md:mt-16 justify-items-center">
          <img src={HomePageGraphic} alt="home-pageGraphic" />
        </div>
      </motion.div>

      {/* Sponcers */}
      {aboveMediaScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="redbull-sponcer" />
              <img src={SponsorForbes} alt="redbull-forbes" />
              <img src={SponsorFortune} alt="redbull-fortune" />
            </div>
          </div>
        </div>
      )}
      <div className=""></div>
    </section>
  );
}

export default Home;