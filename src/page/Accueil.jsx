import Hero from "../components/hero";
import Avantages from "../components/avantage";
import Form from "../components/formuleInscirption";


function Accueil(){
    return(
        <div>
         
            <div className="p3">
                <br/>
                <br/>
                <Hero/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                
                </div>
            <div className="p4">
                <Avantages/>
            </div>
           <div className="p5">
                <Form/>
            </div> 
            
       </div>
        )
    
}
export default Accueil;