import { StyleSheet } from 'react-native';

export const loginstyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',     
        padding: 16,
        marginBottom: 50,         
        backgroundColor: '#fff',  
    },

    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

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

    footerContainer: {
        width: '100%',            // Ocupa toda a largura disponível
        marginTop: 50,           // Espaço entre o cabeçalho e os inputs
        alignItems: 'center',
        marginBottom: 30,        // Espaço inferior antes do texto de cadastro
    },

    
    icon: {
        width: 20,
        height: 20,
        marginRight: 5,           // Espaço entre o ícone e o input
        marginLeft: 8,            // Espaço entre o ícone e a borda
        resizeMode: 'contain',    // Mantém a proporção da imagem
    },
    
    inputContainer: {
        flexDirection: 'row',     // Ícone e input lado a lado
        alignItems: 'center',
        marginBottom: 16,         // Espaçamento entre os campos
        width: '80%',             // Ocupa 90% da largura para melhor estética
        borderRadius: 8,          // Bordas arredondadas para melhor estética
        backgroundColor: '#DFDFDF',  // Fundo branco para contraste
    },


    input: {
      
        borderWidth: 0,
     
        color: '#00000',            // Texto preto para contraste
        backgroundColor: '#DFDFDF', // Fundo cinza claro para contraste
    },

    button: {
        borderRadius: 15,
        backgroundColor: '#499CFA', // Azul padrão do tema
        width: 150,
        height: 40,
        justifyContent: 'center',  // Centraliza o texto verticalmente
        alignItems: 'center',      // Centraliza o texto horizontalmente
        marginTop: 20,             // Espaço acima do botão
    },

    buttonText: {
        color: '#fff',             // Texto branco para contraste
        fontSize: 16,
        fontWeight: 'bold',        // Texto em negrito para melhor legibilidade
        textAlign: 'center',       // Garante centralização do texto
    },

    textCadastro: {
        fontSize: 15,
        color: '#499CFA',
        marginTop: 10,             // Espaçamento acima do texto de cadastro
    },
});