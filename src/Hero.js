export default function Hero() {
    return (
      <div className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://i.imgur.com/tc06UOj.png)' }}>
  
  
        <div className="flex flex-row">
          <div className="basis-1/6 mt-10 justify-center text-center">
  
  
  
          </div>
          <div className="basis-2/3 justify-center text-center">
  
            <div className="nav text-center justify-center mt-10">
              <ul>
                <li className="active"><a href="#" className="active">Home</a></li>
                <li><a href="#">Information</a></li>
                <li><a href="#">NFT Items</a></li>
                <li><a href="#">Token</a></li>
                <li><a href="#">Whitepaper</a></li>
  
  
              </ul>
  
            </div>
  
            {/*
            <p className="text-8xl fredoka text-white text-center mt-48"> ChainStory</p>
            */}
            <img src="https://i.ibb.co/PM7dLnZ/Sin-t-tulo-1-1.png" className="inline-block mt-48"/>
            <p className="text-3xl fredoka text-white text-center mt-2"> A DeFi game built on the blockchain<br />
              <span className="text-yellow-400">
                designed with useable NFT's.
              </span></p>
  
            <div className="address mt-20 ">
              <div class="flex flex-row ">
                <div class="basis-1/4 title-address p-2">CStory:</div>
                <div class="basis-1/4 p-2 text-white">0x988cFcbFA0fDd22644225236765774992836D559</div>
                <div class="basis-1/2  text-white shadow-xl">
  
                  <button className="copy-address">  <img src="https://i.imgur.com/e1Obybb.png" /></button>
                </div>
              </div>
            </div>
  
  
            <div className="button-group">
              <div class="flex flex-row mt-20">
                <div class="basis-1/4"></div>
                <div class="basis-1/4">
  
                  <div class="object">
                    <div class="card bg-green-600">
                      <div class="reflect bg-green-500">
                        <h3 class="text-white">Registrarse</h3>
                      </div>
  
                    </div>
  
                  </div>
  
  
                </div>
                <div class="basis-1/4">
  
                  <div class="object mb-72">
                    <div class="card bg-red-600">
                      <div class="reflect bg-red-500">
                        <h3 class="text-white">Loguearse</h3>
                      </div>
  
                    </div>
  
                  </div>
  
                </div>
                <div class="basis-1/4"></div>
  
              </div>
            </div>
  
           
  
          
  
  
  
  
  
  
  
          </div>
          <div class="basis-1/6 mt-10 ">
            <a href="#" className="btn-lg md:bg-red-700">Play Now</a>
          </div>
        </div>
  
      </div>
    )
  }