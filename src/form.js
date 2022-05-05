import React from "react";
import "./styles.css";

export default function Boton() {
  return (
    <form>    
      <div className="form" >

      <h2><i>Registrarse</i></h2>
          <input class="cajas" type="text" placeholder="Nombre"/>
          <input class="cajas" type="text" placeholder="Apellidos"/>
          <input class="cajas" type="number" placeholder="Edad"/>
          <input class="cajas" type="email" placeholder="Email"/>
          <input class="cajas" type="password" placeholder="Contraseña"/>
          <input class="cajas" type="password" placeholder="Confirme su contraseña"/>
          <br/>
          <input class="enviar" type="submit" value="Enviar"/>
      </div>
    </form>
  );
}
