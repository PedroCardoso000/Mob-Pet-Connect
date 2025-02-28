import { StyleSheet } from 'react-native';

export const loginstyles = StyleSheet.create({
    // Container principal da tela de login
    container: {
        flex: 1,
        justifyContent: 'center', // Centraliza os elementos verticalmente
        alignItems: 'center',     // Centraliza os elementos horizontalmente
        padding: 16,
        marginBottom: 50,         // Espaço extra abaixo do container
        backgroundColor: '#fff',  // Fundo branco para contraste
    },

    // Container do cabeçalho (ícone e título "Login")
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Estilo do ícone no cabeçalho
    headerIcon: {
        width: 150,
        height: 150,
        resizeMode: 'contain',    // Mantém a proporção da imagem
        marginTop: 50,            // Espaçamento superior para descer a imagem
    },

    // Estilo do texto "Login"
    textLogin: {
        fontSize: 30,
        color: '#499CFA',         // Azul padrão do tema
        fontWeight: 'bold',       // Texto em negrito para destaque
        marginTop: 10,            // Espaço entre o ícone e o texto
    },

    // Container do rodapé (inputs e botão)
    footerContainer: {
        width: '100%',            // Ocupa toda a largura disponível
        marginTop: 50,           // Espaço entre o cabeçalho e os inputs
        alignItems: 'center',
        marginBottom: 30,        // Espaço inferior antes do texto de cadastro
    },

    
    // Estilo dos ícones ao lado dos inputs
    icon: {
        width: 20,
        height: 20,
        marginRight: 5,           // Espaço entre o ícone e o input
        marginLeft: 8,            // Espaço entre o ícone e a borda
        resizeMode: 'contain',    // Mantém a proporção da imagem
    },
    
    // Container dos inputs (Email e Senha) com ícones
    inputContainer: {
        flexDirection: 'row',     // Ícone e input lado a lado
        alignItems: 'center',
        marginBottom: 16,         // Espaçamento entre os campos
        width: '80%',             // Ocupa 90% da largura para melhor estética
        borderRadius: 8,          // Bordas arredondadas para melhor estética
        backgroundColor: '#DFDFDF',  // Fundo branco para contraste
    },


    // Estilo dos campos de entrada (inputs)
    input: {
      
        borderWidth: 0,
     
        color: '#00000',            // Texto preto para contraste
        backgroundColor: '#DFDFDF', // Fundo cinza claro para contraste
    },

    // Estilo do botão de login
    button: {
        borderRadius: 15,
        backgroundColor: '#499CFA', // Azul padrão do tema
        width: 150,
        height: 40,
        justifyContent: 'center',  // Centraliza o texto verticalmente
        alignItems: 'center',      // Centraliza o texto horizontalmente
        marginTop: 20,             // Espaço acima do botão
    },

    // Estilo do texto dentro do botão
    buttonText: {
        color: '#fff',             // Texto branco para contraste
        fontSize: 16,
        fontWeight: 'bold',        // Texto em negrito para melhor legibilidade
        textAlign: 'center',       // Garante centralização do texto
    },

    // Estilo do texto "Cadastre-se"
    textCadastro: {
        fontSize: 15,
        color: '#499CFA',
        marginTop: 10,             // Espaçamento acima do texto de cadastro
    },
});