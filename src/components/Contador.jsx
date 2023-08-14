import React from 'react'

const Contador = (props) => {
  return (
    <div>
        <div className="container-contador">
            <h3>Contador: {props.cont}</h3>
            <div className="botones">
                <button onClick={()=>props.setCont(e=>e+1)}><span></span>Incrementar</button>
                <button onClick={()=>props.setCont(e=>e-1)}><span></span>Disminuir</button>
                <button onClick={()=>props.setCont(0)}><span></span>Reiniciar</button>
            </div> 
        </div>
    </div>
  )
}

export default Contador