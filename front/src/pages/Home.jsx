
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Features from "../components/Features";
import Offer from "../components/Offer";
import Footer from "../components/Footer";




const Home = () => {
  return (
    <div>
   {/* قسم الهوم  */}
    <section id="hero">
      <Hero />
    </section>
      {/*قسم المميزات*/}
    <section id="features">
      <Features />
    </section>
   {/* قسم التصنيفات  */}
    <section id="categories">
      <Categories />
    </section>
    
    <section id="offer">
      <Offer />
    </section>

    <section id="footer">
      <Footer />
    </section>




    </div>
  )
}

export default Home