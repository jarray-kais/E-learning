import Link from "next/link";
import styles from "@/styles/courses.module.css";
import DSA from "@/assets/DSA.webp";
import Backend from "@/assets/Backend.webp";
import Software from "@/assets/Software_testing.webp";
import Card from "./Card";
const Courses = () => {

  const courses = [
    {
      _id : 1,
      title: "DSA to Development: A Complete Guide",
      image: DSA,
      rating: 4.4,
      link: "https://media.geeksforgeeks.org/img-practice/prod/courses/504/Mobile/Other/Course_DSA_to_Dev_1720846081.webp",
      level : "Beginner to Advance",
    },
    {
      _id : 2,
      title: "Backend",
      image: Backend,
      rating: 4.5,
      link: "https://www.geeksforgeeks.org/courses/Java-backend-live/?itm_source=geeksforgeeks&itm_medium=newui_home&itm_campaign=courses",
      level : " Intermediate to Advance",
    },
    {
      _id : 3,
      title: "SoftwatreComplete Software Testing Course - Beginner to Advance ",
      image: Software,
      rating: 4.2,
      link: "https://www.geeksforgeeks.org/courses/software-testing-course-online/?itm_source=geeksforgeeks&itm_medium=newui_home&itm_campaign=courses",
      level : "Beginner to Intermediate",
    }
    ]

  return (
    <div style={{ marginTop: "50px" }}>
      <div className={styles.HomePageCoursesContainer}>
        <div className={styles.HomePageCoursesContainer_header}>
          <div className={styles.HomePageSectionHeader}>
            <h2 className={styles.HomePageSectionHeader_heading}>Courses</h2>
            <Link
              href="https://www.geeksforgeeks.org/courses?itm_source=geeksforgeeks&itm_medium=newui_home&itm_campaign=courses"
              target="_black"
              className={styles.HomePageSectionHeader_cta}
            >
              View All
            </Link>
          </div>
        </div>
        <div className={styles.HomePageCoursesContainer_cardcontainer}>
          {
            courses?.map((course) =>(
              <Card key={course._id} course={course}/>
            ))
          }
          
        </div>
      </div>
    </div>
  );
};

export default Courses;
