
import Hero from "./Hero";
import Information from "./Information";
import Nft from "./Nft";
import Token from "./Token";
import Footer from "./Footer";



export default function App() {
  return (
   <div className="bg-fixed  bg-cover bg-no-repeat bg-center min-h-screen bg-blue-900">
     <Hero>

     </Hero>

     <Information>

     </Information>

  <Token />

  <Nft />
  <Footer />
  
   </div>
  )
}