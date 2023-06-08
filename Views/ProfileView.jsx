import { StyleSheet, View, Text } from 'react-native';

function ProfileView() {
    return (
        <View style={styles.profileViewContainer}>
            <Text>Profile</Text>
        </View>
    );
};

export default ProfileView;

const styles = StyleSheet.create({
    profileViewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});