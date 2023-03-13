import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import { useEffect } from "react";


function Contact(){
    useEffect(()=>{
        window.scrollTo(0,0)
     },[])

return(
    <Layout>
        <Navbar/>
        <div className="pt-32">
        Contact
    
        </div>
         
        <Footer/>
    </Layout>

)
}
export default Contact;