import { useState, useEffect } from 'react';
import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import './App.css';

const controleLivros = new ControleLivros();
const controleEditora = new ControleEditora();

const LinhaLivro = props => {
    const { livro, excluir } = props;
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td><p>{livro.titulo}</p>
                <button type="button" className="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora(livro.codEditora)}</td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (<li key={index}>{autor}</li>))}
                </ul>
            </td>
        </tr>
    );
};

const LivroLista = () => {
    const [livro, setLivro] = useState([]);
    const [carregado, setcarregado] = useState(false);

    useEffect(() => {
        setLivro(controleLivros.obterLivros());
        setcarregado(true);
    }, [carregado]);

    const excluir = (codigo) => {
        controleLivros.excluir(codigo);
        setcarregado(false);
    }

    return (
        <main className="container">
            <h1>Catálogo de Livros</h1>
            <table className="table table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livro.map(livro => (
                        <LinhaLivro
                            key={livro.codigo}
                            livro={livro}
                            excluir={excluir}
                            getNomeEditora={controleEditora.getNomeEditora}
                        />
                    ))}
                </tbody>
            </table>
        </main>
    )
}




export default LivroLista;