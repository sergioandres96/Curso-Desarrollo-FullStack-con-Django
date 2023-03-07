import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Header from "components/cases/HeaderCases";
import CasesList from "components/cases/CasesList";


function Cases(){

return(
    <Layout>
        <Navbar/>
        <div className="pt-32">
        <Header/>
        <CasesList/>
        </div>
        <Footer/>
    </Layout>

)
}
export default Cases;