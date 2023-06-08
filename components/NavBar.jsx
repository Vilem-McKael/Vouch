import { StyleSheet, View, Text } from "react-native";

function NavBar() {
    return (
        <View style={styles.navBarContainer}>
            <Text>Welcome to Vouch</Text>
        </View>
    );
};

export default NavBar;

const styles = StyleSheet.create({
    navBarContainer: {
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#336633',
    }
});