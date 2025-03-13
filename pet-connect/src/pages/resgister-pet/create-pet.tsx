import { useEffect, useState } from "react";
import { Alert } from "react-native";

type Raca = {
    id: string;
    nome: string;
};

type RacasMap = {
    [key: string]: Raca[]
}

const especiesData = [
    {id: "1", nome: "Cachorro"},
    {id: "2", nome: "Gato"},
    {id: "3", nome: "Réptil"},
    {id: "4", nome: "Outros"}
]


const racasData: RacasMap = {
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


interface PetData {
    nome: string
    idade: string
    especieId: string
    especieNome: string
    racaId: string
    racaNome: string
    peso: string
    descricao: string
    genero: "macho" | "femea" | ""
}

interface Errors {
    nome?: string
    idade?: string
    especie?: string
    raca?: string
    peso?: string
    genero?: string
}

const CreatePet = () =>{
    const [petData, setPetData] = useState<PetData>({
        nome: "",
        idade: "",
        especieId: "",
        especieNome: "",
        racaId: "",
        racaNome: "",
        peso: "",
        descricao: "",
        genero: ""
    })

    const[errors, setErrors] = useState<Errors>({});
    const[especieModaVisible, setEspecieModaVisible] = useState(false);
    const[racaModaVisible, setRacaModaVisible] = useState(false);
    const[racasAvalible, setRacasAvalible] = useState<Array<{id: String; nome: String}>>([])

    useEffect(() =>{
        if(petData.especieId){
            setRacasAvalible(racasData[petData.especieId] || [])
        } else{
            setRacasAvalible([])
        }
    }, [petData.especieId])

    const validateForm = () =>{
        const newErrors: Errors = {}

        if(!petData.nome.trim()){
            newErrors.nome = "Nome do Pet é obrigatório";
        }

        if(!petData.idade.trim()){
            newErrors.idade = "Idade do seu Pet é obrigatória"
        }

        if(!petData.especieId){
            newErrors.especie = "Selecione a Espécie do Pet"
        }

        if(!petData.peso.trim()){
            newErrors.peso = "O peso do seu Pet é obrigatória"
        }

        if(!petData.genero){
            newErrors.genero = "Selecione o Gênero do seu Pet"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0

    }

    const hadleSubmit = () =>{
        if(validateForm()){
            console.log("Dados do seu pet: ", petData);
            Alert.alert("Sucesso, seu Pet foi cadastrado com sucesso!!")


        } else {
            Alert.alert("Erro!! Por favor preencha todos os campos obrigatórios!!")
        }
    }

}