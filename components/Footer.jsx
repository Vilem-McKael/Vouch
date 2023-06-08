import { StyleSheet, View, Text } from "react-native";

function Footer() {
    return (
        <View style={styles.footerContainer}>
            <Text>This is the footer</Text>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        color: 'white',
        height: '12%',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#449944'
    }
});