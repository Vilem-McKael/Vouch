import { StyleSheet, View, Text, Pressable } from "react-native";

function Footer({handleChangeView}) {

    function handlePressIcon(viewName) {
        handleChangeView(viewName)
    }

    return (
        <View style={styles.footerContainer}>
            <View style={styles.homeContainer}>
                <Pressable onPress={() => handlePressIcon('home')}>
                    <Text style={styles.footerText}>Home</Text>
                </Pressable>
            </View>
            <View style={styles.addContainer}>
                <Pressable onPress={() => handlePressIcon('add')}>
                    <Text style={styles.footerText}>Add</Text>
                </Pressable>
            </View>
            <View style={styles.profileContainer}>
                <Pressable onPress={() => handlePressIcon('profile')}>
                    <Text style={styles.footerText}>Profile</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#449944'
    },
    homeContainer: {
        width: '32%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#f5f5f5'
    },
    addContainer: {
        width: '32%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#f5f5f5'
    },
    profileContainer: {
        width: '32%',
        alignItems: 'center'
    },
    footerText: {
        color: '#f5f5f5',
        fontSize: 20
    }
});