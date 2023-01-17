import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPage from '@/assets/BenefitsPageGraphic.png';
type Props = {
  selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2 }}
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <Htext>More Than Just A GYM</Htext>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis
            optio. Est omnis eveniet ratione officiis! Quo quasi aut ex nulla
            fugiat eveniet vero asperiores non porro libero. Animi, magnam?
          </p>
        </motion.div>
        {/* Benefits */}

        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphics and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img className="mx-auto" src={BenefitsPage} alt="benifts-page-graphic" />
          {/* description */}
          <div className="">
            {/*title  */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 2 }}
                 variants={{
                   hidden: {
                     opacity: 0,
                     x:50,
                   },
                   visible: {
                     opacity: 1,
                     x: 0,
                   },
                 }}
                >
                  <Htext>
                    MILLIIONS OF HAPPY MEMBERS GETTING {""}{" "}
                    <span className="text-primary-500">FIT</span>{" "}
                  </Htext>
                </motion.div>
                
              </div>
            </div>
            {/* Descript */}
            <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay:0.5,duration: 0.5 }}
             variants={{
               hidden: {
                 opacity: 0,
                 x:50,
               },
               visible: {
                 opacity: 1,
                 x: 0,
               },
             }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                hic voluptate nisi quae incidunt molestiae voluptatum, sint
                suscipit consequuntur dolor sequi minus, cupiditate atque culpa
                harum voluptatem labore perspiciatis a?   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit beatae fugit eveniet, nobis corporis ipsum
                distinctio repellendus, accusantium.  
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit beatae fugit eveniet, nobis corporis ipsum
                distinctio repellendus, accusantium. hic voluptate nisi quae incidunt molestiae voluptatum, sint
             , 
              </p>
            </motion.div>
            {/* button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis optio.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis optio.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Export and Pro Train",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis optio.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
