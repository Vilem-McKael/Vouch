import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

function FeedItem({entryData}) {

    const name = entryData.item.name
    const media = entryData.item.media

    const [feedItemText, setFeedItemText] = useState(null);

    useEffect(() => {
        if (media.medium === 'music') {
            if (media.type === 'artist') {
                setFeedItemText(`Listening to ${media.name}`)
            } else {
                setFeedItemText(`Listening to ${media.title} by ${media.artist}`)
            }
        } else if (media.medium === 'television') {
            setFeedItemText(`Watching ${media.title} on ${media.platform}`)
        } else if (media.medium === 'literature') {
            setFeedItemText(`Reading ${media.title} by ${media.author}`)
        }
        console.log(feedItemText)
    }, [])

    return (
        <View style={styles.feedItemContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.feedItemText}>{feedItemText ? feedItemText : 'Nothing here yet.'}</Text>
        </View>
    );
};

export default FeedItem;

const styles = StyleSheet.create({
    feedItemContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#d5d5d5'
    },
    feedItemText: {
        color: 'white',
        fontSize: 14,
    },
    nameText: {
        color: '#DDFFDD',
        fontSize: 16,
        marginBottom: 4
    }
});