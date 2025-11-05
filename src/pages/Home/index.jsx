import { Navbar } from "../../components/navbar/index.jsx"
import { Button } from "../../components/button/index.jsx"
import { MusicPlayer } from "../../components/musicplayer/index.jsx"
import "./style.css"

export const Home = () => {
  
  return (
    <div className="background-home">

      <div className="section-container">
          <div className="section">
              <Navbar />
              <div className="container">
                <div className="title-container">
                    <h1>Interstellar</h1>
                    <span>Um épico sobre amor, tempo e a busca por um novo lar entre as estrelas.</span>
                </div>
                <Button className="ml-[8%] max-[570px]:ml-[10%]" title="Assistir" link="https://www.primevideo.com/dp/amzn1.dv.gti.b4a9f7c6-5def-7e63-9aa7-df38a479333e?autoplay=0&ref_=atv_cf_strg_wb" />
              </div>
              <div className="iconemusic">
                <MusicPlayer />
              </div>
          
          </div>
      </div>
      
    </div>

  )
}
