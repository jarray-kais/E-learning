"use client";
import Link from "next/link";
import styles from "../styles/Explore.module.css";

const Explore = () => {
  return (
    <div className={styles.container}>
      <Link
        href="/data"
        className={styles.article}
        style={{
          background: "linear-gradient(180deg, #4CAF97 0%, #51C6AB 100%)",
        }}
      >
       
          <span title="Data Structure and Algorithms">
            Data Structure and Algorithms
          </span>
          <button className={styles.btn}>
            View more <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        
      </Link>
      <Link
        href="/data"
        className={styles.article}
        style={{
          background: "linear-gradient(180deg, #5A5EB7 0%, #7075EA 100%)",
        }}
      >
        
          <span title="Data Structure and Algorithms">
           Web Development
          </span>
          <button className={styles.btn}>
            View more <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
     
      </Link>
      <Link
        href="/data"
        className={styles.article}
        style={{
          background: "linear-gradient(180deg, #AF6160 0%, #CA8A89 100%)",
        }}
      >
        
          <span title="Data Structure and Algorithms">
           python
          </span>
          <button className={styles.btn}>
            View more <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        
      </Link>
      <Link
        href="/data"
        className={styles.article}
        style={{
          background: "linear-gradient(180deg, #4572B6 0%, #789EDA 100%)",
        }}
      >
      
          <span title="Data Structure and Algorithms">
            Devops
          </span>
          <button className={styles.btn}>
            View more {' '}<i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
      
      </Link>
    </div>
  );
};

export default Explore;
