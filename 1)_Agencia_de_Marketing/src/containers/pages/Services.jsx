import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";


function Services(){

return(
    <Layout>
        <Navbar/>
        <div className="pt-32">
        Services
        </div>
         
        <Footer/>
    </Layout>

)
}
export default Services;