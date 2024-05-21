import {card} from "../assets";
import styles, {layout} from "../style";
import Button from "./button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className ={layout.sectionInfo}>
      <h2 className ={styles.heading2}>
        Find a better Ride Deal <br className ="sm:block hidden" />in a few easy steps
      </h2>
      <p className ={`${styles.paragraph} max-w-[470px] mt-5`}>With our fast and accurate pairing algorithim you get the best deal around you and you can switch easily without any hassle.
      </p>
      <Button styles="mt-10" />
    </div>
   <div className={layout.sectionImg}>
    <img src={card} alt ="card" className="w-[100%] h-[100%]" />
   </div>
  </section>
  
)

export default CardDeal