import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Benefit from "./Benefit";
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
        <div className="md:my-5 md:w-3/5">
          <Htext>More Than Just A GYM</Htext>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis
            optio. Est omnis eveniet ratione officiis! Quo quasi aut ex nulla
            fugiat eveniet vero asperiores non porro libero. Animi, magnam?
          </p>
        </div>
        {/* Benefits */}

        <div className="md:flex items-center justify-between gap-8 mt-5">
            {
                benefits.map((benefit:BenefitType) => (
                    <Benefit
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                ))
            }
        </div>

      </motion.div>
    </section>
  );
};

export default Benefits;


const benefits: Array<BenefitType> = [
    {
        icon:<HomeModernIcon className="h-6 w-6"/>,
        title:"State of the Art Facilities",
        description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis optio."
    },
    {
        icon:<UserGroupIcon className="h-6 w-6"/>,
        title:"100's of Diverse Classes",
        description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis optio."
    },
    {
        icon:<AcademicCapIcon className="h-6 w-6"/>,
        title:"Export and Pro Train",
        description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis optio."
    },
]