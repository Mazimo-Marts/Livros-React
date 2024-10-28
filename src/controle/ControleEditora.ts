import Editora from '../modelo/Editora'

var editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Alta Books' },
    { codEditora: 2, nome: 'Pearson' },
    { codEditora: 3, nome: 'Addison Wesley' },
  ]

class ControleEditora {
    getEditoras = () => {
        return editoras
    }

    getNomeEditora = (codEditora:number) => {
        const editora = editoras.filter((editora) => editora.codEditora === codEditora)
        return editora.length > 0 ? editora[0].nome : undefined;
    }
}

export default ControleEditora