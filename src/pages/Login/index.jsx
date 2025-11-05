import "./style.css"
import { Navbar } from "../../components/navbar/index.jsx"
import { Input } from "../../components/input/index.jsx"
import { Button } from "../../components/button/index.jsx"

export const Login = () => {
  
  return (
    <div className="background-login">
      <div className="section-container-login">
        <div className="section-login">
            <Navbar />
            <div className="login">
              <div className="quadrado-login">
                <Input title="Email" placeholder="Digite seu email..." type="email"/>
                <Input title="Senha" placeholder="Digite sua senha..." type="password"/>
                <Button title="Entrar" link="http://localhost:5173" className="buttonLogin"/>
              </div>
            </div>
        </div>
      </div>
    </div>

  )
}
