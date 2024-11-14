import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/courses.module.css";
import star from '@/assets/star.png';

const Card = ({course }) => {

  return (
    <>
         <Link href={course.link} className={styles.homePageCourseCard}>
            <div className={styles.homePageCourseCard_starRating}>
              <span className={styles.homePageCourseCard_starRating_icon}>
                <Image
                  src={star}
                  alt="star"
                  width={14}
                  height={16}
                  
                />
                {course.rating}
              </span>
            </div>
            <Image
              src={course.image}
              alt="DSA"
              width={0}
              height={0}
              className={styles.homePageCourseCard_image}
            />

            <div className={styles.homePageCourseCard_textcontainer}>
              <div
                title="DSA to Development: A Complete Guide"
                className={styles.homePageCourseCard_textcontainer_heading}
              >
                {course.title}
              </div>
              <div className={styles.homePageCourseCard_textcontainer_level}>
                <span>
                  <i className="fa fa-rss" aria-hidden="true"></i>
                </span>
                <span>{course.level}</span>
              </div>
              <div
                className={styles.homePageCourseCard_textcontainer_container}
              >
                <div
                  className={
                    styles.homePageCourseCard_textcontainer_container_geekskount
                  }
                >
                  <span
                    className={
                      styles.homePageCourseCard_textcontainer_container_geekskount_icon
                    }
                  >
                 <i className="fa fa-line-chart" aria-hidden="true"></i>
                  </span>
                  <span
                    className={
                      styles.homePageCourseCard_textcontainer_container_geekskount_text
                    }
                  >
                    {" "}
                    38k+ interested Geeks
                  </span>
                </div>
                <button className={styles.homePageCourseCard_textContainer_container_btn}>Explore now</button>
              </div>
            </div>
          </Link>
    </>
  )
}

export default Card