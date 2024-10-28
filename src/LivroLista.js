import { useState, useEffect } from 'react';
import ControleEditora from './controle/ControleEditora';
import ControleLivros from './controle/ControleLivros';

// Controladores
const controleEditora = new ControleEditora();
const controleLivro = new ControleLivros();

const LinhaLivro = (props) => {
    const {livro, excluir} = props;
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
    return ( 
        <tr>
            <td>
                <div>
                    <div>
                        {livro.titulo}
                        <br />
                        <button className="btn btn-danger btn-sm mt-2" onClick={() => excluir(livro.codigo)}>
                        Excluir
                        </button>
                    </div>
                </div>
            </td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                    {livro.autores.map((autor,index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    )
}

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        setLivros(controleLivro.obterLivros());
        setCarregado(true);
    }, [carregado]);

    const excluir = (codigo) => {
        controleLivro.excluir(codigo);
        setCarregado(false);
    }

    return (
        <main className='container mt-3'>
            <h1 className='mb-3'>Catálogo de Livros</h1>
            <table className='table table-striped no-vertical-borders'>
                <thead className='table-dark'>
                    <tr>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <LinhaLivro
                            key={livro.codigo}
                            livro={livro}
                            excluir={excluir}
                        />
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista