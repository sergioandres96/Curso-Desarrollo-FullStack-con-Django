import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";


function About(){

return(
    <Layout>
        <Navbar/>
        <div className="pt-32">
        About
        </div>
         
        <Footer/>
    </Layout>

)
}
export default About;