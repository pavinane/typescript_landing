import Htext from "@/shared/Htext";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
type Props = {
    setSelectionPage : (value:SelectedPage) => void
}

const ContactUs = ({setSelectionPage}: Props) => {
  return (
   <section id="contactus">
    <motion.div
    onViewportEnter = {() => setSelectionPage(SelectedPage.ContactUs)}
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
<Htext>Contact Us</Htext>
        </motion.div>
        
    </motion.div>
   </section>
  )
}

export default ContactUs;