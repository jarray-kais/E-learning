import Mainfeature from "@/components/Mainfeature";
import Explore from "@/components/Explore";
import Courses from "@/components/courses/Courses";
import Header from "@/components/Header";



// Add metadata for SEO
export const metadata = {
  title: 'Acceuil , Platforme education',
  description: 'Bienvenue sur la page d\'accueil de mon application.',
};
export default function Home() {

  return (
    <>
      <Header />
      <div className="dots">
      <div id="main-feature">
          <Mainfeature />
        </div>
        <div id="Explore">
          <Explore />
        </div>
        
      </div>
      <div id="courses">
        <Courses />
      </div>
      
    </>
  );
}
