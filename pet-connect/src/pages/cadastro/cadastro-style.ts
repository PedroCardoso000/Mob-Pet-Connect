import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        color: '#499CFA',
        marginTop: 10,
    },
    formContainer: {
        width: '100%',
        marginBottom: 30,
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        width: '100%',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#499CFA',
        borderRadius: 25,
        padding: 15,
        width: '80%',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#499CFA',
    },
    inactiveDot: {
        backgroundColor: '#E0E0E0',
    }
});