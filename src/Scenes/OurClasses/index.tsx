import { ClassessType, SelectedPage } from '@/shared/types'
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from 'framer-motion';
import Htext from '@/shared/Htext';
import Class from './Class';

type Props = {
    setSelectedPage:(value:SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
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
          <div className="md:w-3/5">
            <Htext>OUR CLASSESS</Htext>
            <p className='py-5 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              sint reiciendis dolore? Tempore dolores ipsam voluptates, debitis
              asperiores facere possimus dicta laboriosam, laborum iure illum
              aspernatur perferendis, nesciunt inventore voluptatum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              sint reiciendis dolore? Tempore dolores ipsam voluptates, debitis
              asperiores facere possimus dicta laboriosam, laborum iure illum
              aspernatur perferendis, nesciunt inventore voluptatum.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className='w-[2800px] whitespace-nowrap'>
                {
                    classess.map((item,index) => (
                        <Class
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        
                        />
                    ))
                }
            </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default OurClasses;

const classess:Array<ClassessType> = [
    {
        name:"Weight Training Classess",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem  sint reiciendis dolore? Tempore dolores ipsam voluptates, debitis  asperiores facere possimus dicta laboriosam",
        image:image1
    },
    {
        name:"Yoga Classess",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem  sint reiciendis dolore? Tempore dolores ipsam voluptates, debitis  asperiores facere possimus dicta laboriosam",
        image:image2
    },
    {
        name:"Ab Core Classess",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem  sint reiciendis dolore? Tempore dolores ipsam voluptates, debitis  asperiores facere possimus dicta laboriosam",
        image:image3
    },
    {
        name:"Adventure Classess",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem  sint reiciendis dolore? Tempore dolores ipsam voluptates, debitis  asperiores facere possimus dicta laboriosam",
        image:image4
    },
    {
        name:"Fitness Classess",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem  sint reiciendis dolore? Tempore dolores ipsam voluptates, debitis  asperiores facere possimus dicta laboriosam",
        image:image5
    },
    {
        name:"Training Classess",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem  sint reiciendis dolore? Tempore dolores ipsam voluptates, debitis  asperiores facere possimus dicta laboriosam",
        image:image6
    },
]