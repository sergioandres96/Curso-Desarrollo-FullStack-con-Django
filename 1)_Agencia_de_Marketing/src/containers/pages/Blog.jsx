import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";


function Blog(){

return(
    <Layout>
        <Navbar/>
        <div className="pt-32">
        Blog
        </div>
         
        <Footer/>
    </Layout>

)
}
export default Blog;