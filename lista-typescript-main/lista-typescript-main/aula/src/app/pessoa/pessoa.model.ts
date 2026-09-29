export interface PessoaModel {}

export interface pessoa{
    id: number;
    nome: string;
    curso: string;
    email: string;
    ativo: boolean;
    telefone?: string;
    vinculo: 'aluno' | 'professor' | 'funcionario';
}
