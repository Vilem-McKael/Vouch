import { StyleSheet, View, Text } from "react-native";

function AddEntryView() {
    return (
        <View style={styles.addViewContainer}>
            <Text>Add</Text>
        </View>
    );
};

export default AddEntryView;

const styles = StyleSheet.create({
    addViewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});