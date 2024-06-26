import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from './FeedbackCard';


const Testimonials = () => (
   
   <section id ="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`} >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-5 relative z-[1] px-8">
       <h1 className={styles.heading2}> What people are riders <br  className=" sm:block hidden"/>saying about us</h1>
       <div className="w-full md:mt-0 mt-6"> 
       <p className={`${styles.paragraph} text-3xl text-left max-w-[600px]`}>
       Everything you need to start riding with us as your next commute.
       </p></div>
    </div>
    <div className="flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1]">
      {feedback.map((card)=>(
        <FeedbackCard  key={card.id} {...card}  />
      ))}
    </div> 
   </section>
  )

export default Testimonials