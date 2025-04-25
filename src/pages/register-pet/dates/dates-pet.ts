import { Especie, RacasMap } from './typesPet'

export const especiesData: Especie[] = [
    {id: "1", nome: "Cachorro"},
    {id: "2", nome: "Gato"},
    {id: "3", nome: "Réptil"},
    {id: "4", nome: "Outros"}
]

export const racasData: RacasMap = {
    "1":[
        // Raças de Cachorros
        {id: "101", nome: "Rottweiler"},
        {id: "102", nome: "Golden Retrivier"},
        {id: "103", nome: "Poodle"},
        {id: "104", nome: "Pastor Alemão"},
        {id: "105", nome: "Yorkshire"},
        {id: "106", nome: "Pinscher"},
        {id: "107", nome: "Pitbull"},
        {id: "108", nome: "Bulldog"}
    ],
    "2":[
        // Raças de Gato
        { id: "201", nome: "Vira-lata" },
        { id: "202", nome: "Siamês" },
        { id: "203", nome: "Persa" },
        { id: "204", nome: "Maine Coon" },
        { id: "205", nome: "Angorá" },
        { id: "206", nome: "Sphynx" },
        { id: "207", nome: "Bengal" },
        { id: "208", nome: "Ragdoll" }
    ],
    "3":[
        // Raças de Répteis
        { id: "301", nome: "Tartaruga" },
        { id: "302", nome: "Iguana" },
        { id: "303", nome: "Cobra" },
        { id: "304", nome: "Lagarto" },
        { id: "305", nome: "Jacaré" },
        { id: "306", nome: "Jabuti" },
        { id: "307", nome: "Jibóia" },
        { id: "308", nome: "Salamandra"}
    ],
    "4": [
        {id: "401", nome: "Outro"}
    ]
}
