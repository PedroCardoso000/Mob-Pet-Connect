import ButtonComponent from "@/src/components/ButtonConnect";
import { useEffect, useState } from "react";
import {
    Alert,
    FlatList,
    Image,
    Modal,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { styleRegister } from "./dates/create-pet-styles";
import { especiesData, racasData } from "./dates/dates-pet";
import { Errors, PetData, Raca } from "./dates/typesPet";
import CheckBox from "@/src/components/CheckBox";
import { HttpStatusCode } from "axios";
import { api } from "@/src/api/axios";

const CreatePet = () => {
    const [petData, setPetData] = useState<PetData>({
        nome: "",
        especieId: "",
        especieNome: "",
        racaId: "",
        racaNome: "",
        descricao: "",
        genero: ""
    })

    const [errors, setErrors] = useState<Errors>({});
    const [especieModalVisible, setEspecieModalVisible] = useState(false);
    const [racaModalVisible, setRacaModalVisible] = useState(false);
    const [racasDisponiveis, setRacasDisponiveis] = useState<Raca[]>([])
    const [sex, setSex] = useState<string>('');
    const [response, setReponse] = useState<boolean>(false);

    useEffect(() => {
        if (petData.especieId) {
            setRacasDisponiveis(racasData[petData.especieId] || [])
        } else {
            setRacasDisponiveis([])
        }
    }, [petData.especieId])

    const validateForm = () => {
        const newErrors: Errors = {}

        if (!petData.nome.trim()) {
            newErrors.nome = "Nome do Pet é obrigatório";
        }

        if (!petData.especieId) {
            newErrors.especie = "Selecione a Espécie do Pet"
        }

        if (!petData.genero) {
            newErrors.genero = "Selecione o Gênero do seu Pet"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0

    }

    const handleSubmit = () => {
        if (validateForm()) {
            console.log("Dados do pet:", petData)
            Alert.alert("Sucesso", "Pet cadastrado com sucesso!")
        } else {
            Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios")
        }
    }

    const selectEspecie = (id: string, nome: string) => {
        setPetData({
            ...petData,
            especieId: id,
            especieNome: nome,
            racaId: "",
            racaNome: ""
        })
        setEspecieModalVisible(false)
    }

    const selectRaca = (id: string, nome: string) => {
        setPetData({
            ...petData,
            racaId: id,
            racaNome: nome
        })
        setRacaModalVisible(false)
    }


    async function postPeet() {

        try {
            const { status, data } = await api.post('/pet', {
                name: petData.nome,
                gender: "Male",
                birthDate: new Date(),
                specie: petData.especieNome,
                race: petData.racaNome
            });

            if (status === HttpStatusCode.Ok) {
                setReponse(true)
                return data;
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }


    }

    return (
        <ScrollView style={styleRegister.container}>

            <View style={styleRegister.avatarContainer}>
                <Image source={require("")} style={styleRegister.avatar} />
                <TouchableOpacity style={styleRegister.avatarButton}>
                    <Text style={styleRegister.avatarButtonText}>+</Text>
                </TouchableOpacity>
            </View>

            {response &&
                (
                    <>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, color: '#499CFA' }}>Pet cadastrado com sucesso!</Text>
                        </View>
                    </>)
            }
            <View style={styleRegister.form}>
                <View style={styleRegister.inputContainer}>
                    <TextInput
                        style={[styleRegister.input, errors.nome && styleRegister.inputError]}
                        placeholder="Nome"
                        value={petData.nome}
                        onChangeText={(text) => setPetData({ ...petData, nome: text })}
                    />
                    {errors.nome && <Text style={styleRegister.errorText}>{errors.nome}</Text>}
                </View>


                    <View style={styleRegister.checkboxContainer}>
                        <CheckBox selected={sex} value="MALE" label="Masculino" onPress={setSex} />
                        <CheckBox selected={sex} value="FEMALE" label="Feminino" onPress={setSex} />
                    </View>

                    {errors.genero && <Text style={styleRegister.errorText}>{errors.genero}</Text>}


                    <View style={styleRegister.inputContainer}>
                        <TouchableOpacity
                            style={[styleRegister.input, styleRegister.selector, errors.especie && styleRegister.inputError]}
                            onPress={() => setEspecieModalVisible(true)}
                        >
                            <Text style={petData.especieNome ? styleRegister.selectorTextSelected : styleRegister.selectorText}>
                                {petData.especieNome || "Espécie"}
                            </Text>
                            <Text style={styleRegister.selectorIcon}>▼</Text>
                        </TouchableOpacity>
                        {errors.especie && <Text style={styleRegister.errorText}>{errors.especie}</Text>}
                    </View>



                    <View style={styleRegister.inputContainer}>
                        <TouchableOpacity
                            style={[styleRegister.input, styleRegister.selector, errors.raca && styleRegister.inputError]}
                            onPress={() => {
                                if (petData.especieId) {
                                    setRacaModalVisible(true)
                                } else {
                                    Alert.alert("Atenção", "Selecione uma espécie primeiro")
                                }
                            }}
                        >
                            <Text style={petData.racaNome ? styleRegister.selectorTextSelected : styleRegister.selectorText}>
                                {petData.racaNome || "Raça"}
                            </Text>
                            <Text style={styleRegister.selectorIcon}>▼</Text>
                        </TouchableOpacity>
                        {errors.raca && <Text style={styleRegister.errorText}>{errors.raca}</Text>}
                    </View>



                    <View style={styleRegister.inputContainer}>
                        <TextInput
                            style={[styleRegister.input, styleRegister.textArea]}
                            placeholder="Descrição"
                            value={petData.descricao}
                            onChangeText={(text) => setPetData({ ...petData, descricao: text })}
                            multiline
                            numberOfLines={4}
                        />
                    </View>
            </View>


            {/* ✅ Botões */}

            <View style={styleRegister.buttonContainer}>
                <ButtonComponent title="Concluir" onPress={postPeet} />
                <ButtonComponent title="Cancelar" />
            </View>


            <Modal
                visible={especieModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setEspecieModalVisible(false)}
            >
                <View style={styleRegister.modalContainer}>
                    <View style={styleRegister.modalContent}>
                        <View style={styleRegister.modalHeader}>
                            <Text style={styleRegister.modalTitle}>Selecione a Espécie</Text>
                            <TouchableOpacity onPress={() => setEspecieModalVisible(false)}>
                                <Text style={styleRegister.modalCloseButton}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={especiesData}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styleRegister.modalItem} onPress={() => selectEspecie(item.id, item.nome)}>
                                    <Text style={styleRegister.modalItemText}>{item.nome}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>

            <Modal
                visible={racaModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setRacaModalVisible(false)}
            >
                <View style={styleRegister.modalContainer}>
                    <View style={styleRegister.modalContent}>
                        <View style={styleRegister.modalHeader}>
                            <Text style={styleRegister.modalTitle}>Selecione a Raça</Text>
                            <TouchableOpacity onPress={() => setRacaModalVisible(false)}>
                                <Text style={styleRegister.modalCloseButton}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={racasDisponiveis}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styleRegister.modalItem} onPress={() => selectRaca(item.id, item.nome)}>
                                    <Text style={styleRegister.modalItemText}>{item.nome}</Text>
                                </TouchableOpacity>
                            )}
                            ListEmptyComponent={<Text style={styleRegister.emptyListText}>Nenhuma raça disponível para esta espécie</Text>}
                        />
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

export default CreatePet;