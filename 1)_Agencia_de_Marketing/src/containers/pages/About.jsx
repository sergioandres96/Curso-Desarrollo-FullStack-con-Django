import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import { useEffect } from "react";
import HeaderAbout from "components/about/HeaderAbout";
import Testimonial from "components/about/Testimonial";


function About(){
    useEffect(()=>{
        window.scrollTo(0,0)
     },[])

return(
    <Layout>
        <Navbar/>
        <div className="pt-32">
        <HeaderAbout/>
        <Testimonial/>
        </div>
         
        <Footer/>
    </Layout>

)
}
export default About;