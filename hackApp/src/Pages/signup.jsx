import { StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';
import * as React from 'react';

function SignUpPage({navigation}) {

    const[nameText, onNameChange] = React.useState("Enter Name: ")

    return (
      <View style={styles.signupStyle}>
        <Text style={styles.appTitle}>App Name</Text>
        <Image style={styles.logoStyle} source={require('./pageAssets/plant.png')}/>
        <View style={styles.nameEntryStyle}>
            <Text>Enter Name: </Text>
            <TextInput style={styles.inputStyle} onNameChange={onNameChange} username={nameText} />
        </View>
        <Button title='Home' onPress={() => navigation.navigate('home')} />
      </View>
    );
}

const styles = StyleSheet.create({
    signupStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: '5%',
        paddingBottom: '35%',
    },

    appTitle: {
        fontSize: 30,
    },

    logoStyle: {
        width: '40%',
        height: '25%',
    },

    nameEntryStyle: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 20,
    },

    inputStyle: {
        height: 40,
        margin: 12,
        padding: 1,
        borderBottomWidth: 1,
    },
});

export default SignUpPage;

//attribute image: <a href="https://www.flaticon.com/free-icons/plant" title="plant icons">Plant icons created by Freepik - Flaticon</a>