import { useState } from 'react';
import ControleLivro from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';
import { useNavigate } from 'react-router-dom';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LivroDados = () => {
    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    const navigate = useNavigate();

    const tratarCombo = (evento) => {
        setCodEditora(Number(evento.target.value));
    }

    const incluir = (evento) => {
        evento.preventDefault();

        const novoLivro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split('\n'),
            codEditora
        }

        controleLivro.incluir(novoLivro);
        navigate('/');
    }

    return (
        <main>
            <h1 className='ml-5 mt-4'>Dados do Livro</h1>
            <form onSubmit={incluir} className='ml-5 mr-5 mt-3'> 
                <div className='mb-3'>
                    <label className='form-label'>Título</label>
                    <input type='text' 
                        className='form-control' 
                        value={titulo} 
                        onChange={(x) => setTitulo(x.target.value)} required/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Resumo</label>
                    <textarea className='form-control'
                        rows='3'
                        value={resumo}
                        onChange={(x) => setResumo(x.target.value)}
                        required/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Editora</label>
                    <select className='form-control' value={codEditora} onChange={tratarCombo}>
                        {opcoes.map((editora) => (
                            <option key={editora.value} value={editora.value}>
                                {editora.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Autores (1 por linha)</label>
                    <textarea className='form-control'
                        rows='3'
                        value={autores}
                        onChange={(x) => setAutores(x.target.value)} 
                        required/>
                </div>
                <button type='submit' className='btn btn-primary'>Salvar Dados</button>
            </form>
        </main>
    )
}

export default LivroDados