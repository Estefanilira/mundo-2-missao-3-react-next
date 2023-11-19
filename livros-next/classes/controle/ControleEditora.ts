import Editora from "../modelo/Editora";

const editoras: Editora[] = [
    {
        codEditora: 1,
        nome: "Bookman",
        autor: "David Flanagan",
    },
    {
        codEditora: 2,
        nome: "Novatec",
        autor: "Edécio Fernando Iepsen",
    },
    {
        codEditora: 3,
        nome: "Novatec",
        autor: "Maurício Samy Silva",
    },
    {
        codEditora: 4,
        nome: "Alta Books",
        autor: "Robert C. Martin",
    },
    {
        codEditora: 5,
        nome: "Novatec",
        autor: "Aditya Y. Bhargava",
    },
];

export class ControleEditora {
    public getEditoras = (): Editora[] => {
        return editoras;
    };

    public getNomeEditora = (codEditora: number): string => {
        const editoraEncontrada = editoras.find(
            (editora) => editora.codEditora === codEditora
        );
        if (editoraEncontrada) {
            return editoraEncontrada.nome;
        } else {
            throw new Error("Editora não encontrada");
        }
    };

    public getEditora = (codEditora: number): Editora | undefined => {
        return editoras.find((editora) => editora.codEditora === codEditora);
    };
}