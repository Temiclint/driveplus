import styles from "../style"
import { arrowUp } from "../assets";

const GetStarted = () =>  (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full
    bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%]
    rounded-full `}>
    <div className={`${styles.flexCenter} flex-row`}>
      <p className="font-raleway font-medium text-[18px] leading-[23px] mr-2">
        <span className="text-gray-700">Get</span>
      </p>
      <img  src={arrowUp} alt="arrow" className ="'w-[15px] h-[15px] object-contain" />
    </div>
    <p className="font-raleway font-medium text-[18px] leading-[23px]">
        <span className="text-gray-700">Started</span>
      </p>
    </div>
    </div>
  )

export default GetStarted