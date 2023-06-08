import { StyleSheet, View, Text } from "react-native";

function Header() {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Vouch</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#336633',
    },
    headerText: {
        padding: 10,
        color: '#f5f5f5',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: 700,
        borderWidth: 1,
        borderColor: '#f5f5f5',
        borderRadius: '10%',
    }
});