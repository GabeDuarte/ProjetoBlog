import React from 'react';
import "./home.css";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            conteudo: [],

        };
    }

    async buscarConteudo(){
        this.setState({loading: true})
        const data = await fetch('https://sujeitoprogramador.com/rn-api/?api=posts');
        const json = await data.json();
        this.setState({conteudo: json, loading:false});
    }

    componentDidMount() {
        this.buscarConteudo()
    }


    render() {
        const {conteudo} = this.state;
        return(
            <html>
                <div className="cabeçalho" >
                    <nav className="header">  
                        <h2 id="logo">Blue Nutri</h2> 
                        <a href='#'>Home</a>
                        <a href="#">Conteúdo</a>                               
                    </nav>
                </div>
                <body>
                    <main>                        
                        <div className="container">
                            {conteudo.map((c,)=>(
                                <div className="item">
                                    <h2>{c.titulo}</h2>
                                    <img src={c.capa} alt={c.titulo}></img>
                                    <p>{c.subtitulo}</p>
                                    <h4>{c.categoria}</h4>
                                    <a href="/" className="btn-saibaMais">Saiba mais</a>
                                    <hr></hr>
                                </div>
                            ))}
                        </div>
                    </main>
                    <div className="footer">
                        <div>
                            <h2>Desenvolvido por: Gabriel Soares</h2>
                        </div>
                    </div>
                </body>
            </html>
        )
    }
}