import {StyleSheet} from 'react-native';

export const loginstyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',     
        padding: 16,
        marginBottom: 50,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerContainer: {
        width: '100%',          
        marginTop: 50,           
        alignItems: 'center',
        marginBottom: 30,   
    },
    headerIcon: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginTop: 50,          
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        width: '90%',            
    },
    textLogin: {
        fontSize: 30,
        color: '#499CFA',
      
    },
    textCadastro: {
        fontSize: 15,
        color: '#499CFA',
      
    },
    button: {
        borderRadius: 15,
        backgroundColor: '#499CFA',
        width: 150,
        height: 40,
        justifyContent: 'center', 
        alignItems: 'center',     
    },
    
    buttonText: {
        color: '#fff',            
        fontSize: 16,             
        fontWeight: 'bold',       
        textAlign: 'center',      
    },
    
    icon: {
        width: 20,
        height: 20,
        marginRight: 8,
        resizeMode: 'contain',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#DFDFDF',
    },
});