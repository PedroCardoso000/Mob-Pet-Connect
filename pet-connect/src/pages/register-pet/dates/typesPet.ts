export type Raca = {
    id: string;
    nome: string;
};

export type RacasMap = {
    [key: string]: Raca[]
};

export type Especie = {
    id: string;
    nome: string;
};


export interface PetData {
    nome: string
    especieId: string
    especieNome: string
    racaId: string
    racaNome: string
    descricao: string
    genero: "MALE" | "FEMALE" | ""
}

export interface Errors {
    nome?: string
    idade?: string
    especie?: string
    raca?: string
    peso?: string
    genero?: string
}
