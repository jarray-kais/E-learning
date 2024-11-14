import Image from "next/image";
import Rectangle from "../assets/Rectangle.svg";
import HD from "../assets/HD.svg";

import styles from "../styles/feature.module.css";

const Mainfeature = () => {
  return (
    <>
   
    <div className={styles.feature}>
      <div className={styles.head}>
        <div className={styles.title}>
          <p>Main Feature</p>
          <Image src={Rectangle} alt="rectangle" width={400} height={0} />
        </div>
        <p className={styles.sous_title}>
          Ut sed eros finibus, placerat orci id, dapibus mauris.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.badge}>
          <Image src={HD} alt="hd" width={150} height={150} />
          <div className="space-y-0.5">
            <p className="text-xl text-black font-bold">+100K</p>
            <p className="text-slate-500 font-medium">HD Videos</p>
          </div>
        </div>
        <div className={styles.badge}>
          <Image src={HD} alt="hd" width={150} height={150} />
          <div className="space-y-0.5">
            <p className="text-xl text-black font-bold">+200</p>
            <p className="text-slate-500 font-medium">Professional Mentors</p>
          </div>
        </div>
        <div className={styles.badge}>
          <Image src={HD} alt="hd" width={150} height={150} />
          <div className="space-y-0.5">
            <p className="text-xl text-black font-bold">$500</p>
            <p className="text-slate-500 font-medium">Saves per Month</p>
          </div>
        </div>
        <div className={styles.badge}>
          <Image src={HD} alt="hd" width={150} height={150} />
          <div className="space-y-0.5">
            <p className="text-xl text-black font-bold">Free</p>
            <p className="text-slate-500 font-medium">Life Time Access</p>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Mainfeature;
