import React from 'react'

const Card = (props) => {
    const lista = [
        {
            id:1,
            url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Celeste_box_art_full.png/640px-Celeste_box_art_full.png",
            titulo: "Celeste",
            parrafo: "Celeste es un videojuego perteneciente al género de plataformas creado por los desarrolladores de videojuegos canadienses Maddy Thorson y Noel Berry. El videojuego fue creado originalmente como un prototipo en cuatro días durante un game jam, y más tarde se expandió a un lanzamiento completo."
        },{
            id:2,
            url:"https://upload.wikimedia.org/wikipedia/en/1/1f/Dead_cells_cover_art.png",
            titulo:"Dead cells",
            parrafo:"Dead Cells es un videojuego híbrido entre el género de exploración de mazmorras o roguelite, y metroidvania, creando su propio género, “roguevania”, desarrollado por el estudio Motion Twin.​"
        },{
            id:3,
            url:"https://estaticos.elcolombiano.com/documents/10157/0/614x565/0c0/0d0/none/11101/HUML/image_content_29660703_20171016162807.jpg",
            titulo:"Cuphead",
            parrafo:"Cuphead es un videojuego perteneciente al género de corre y dispara, publicado por la empresa canadiense StudioMDHR. Fue lanzado al mercado el 29 de septiembre de 2017 para Microsoft Windows, Xbox One y Steam, ​ en 2018 para macOS, en 2019 para Nintendo Switch y en 2020 para PlayStation 4."
        },{
            id:4,
            url:"https://assets-prd.ignimgs.com/2021/08/24/blasphemous-1-button-1629766818525.jpg",
            titulo:"Blasphemous",
            parrafo:"Blasphemous es un videojuego de Metroidvania desarrollado por el estudio español The Game Kitchen, y publicado por Team17. El juego fue lanzado para Nintendo Switch, Microsoft Windows, PlayStation 4 y Xbox One el 10 de septiembre de 2019."
        },{
            id:5,
            url:"https://image.api.playstation.com/cdn/UP2054/CUSA01664_00/OjfS773qw3ho5t9EXnVtdlcxVltVXBRb.png",
            titulo:"Limbo",
            parrafo:"Limbo es un videojuego de lógica y plataformas desarrollado por la compañía independiente danesa Playdead y estrenado en 2010 para Xbox Live Arcade. La trama describe las vivencias de un niño mientras busca a su hermana en un entorno siniestro."
        },{
            id:6,
            url:"https://upload.wikimedia.org/wikipedia/en/0/04/Hollow_Knight_first_cover_art.webp",
            titulo:"Hollow Knight",
            parrafo:"Hollow Knight es un videojuego perteneciente al género metroidvania desarrollado y publicado por Team Cherry. El videojuego fue inicialmente lanzado para Microsoft Windows en febrero de 2017, y más tarde para macOS y Linux en abril de 2017."
        }
    ]
  return (
    <div>
        <div className='container'>
            {
                lista.map((elemento, index)=>(
                    <div className="card">
                        <img src={elemento.url} alt="imagen" />
                        <div className="body">
                            <div className="titulo">
                                <h2>{elemento.titulo}</h2>
                                <h3>Contador: {props.cont}</h3>
                            </div>
                            <p>{elemento.parrafo}</p>
                            <button><span></span>Mas informacion</button>
                        </div>
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Card