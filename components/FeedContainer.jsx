import { StyleSheet, View, Text, FlatList } from 'react-native';
import FeedItem from './FeedItem';
import { useState } from 'react';

function FeedContainer() {

    const [feedData, setFeedData] = useState([
        {
            name: 'Joseph Nahm',
            media: {
                medium: 'music',
                type: 'song',
                title: 'Somebody That I Used To Know',
                artist: 'Gotye feat. Kimbra'
            },
            updatedAt: Date.now()
        },
        {
            name: 'Emmeline Estelle',
            media: {
                medium: 'music',
                type: 'artist',
                name: 'Holly Humberstone',
            },
            updatedAt: Date.now()
        },
        {
            name: 'Johnny Dawson',
            media: {
                medium: 'music',
                type: 'album',
                title: 'The Stone Roses',
                artist: 'The Stone Roses'
            },
            updatedAt: Date.now()
        },
        {
            name: 'Adryanna Garg',
            media: {
                medium: 'television',
                type: 'show',
                title: 'Succession',
                platform: 'HBO'
            },
            updatedAt: Date.now()
        },
        {
            name: 'Vilem McKael',
            media: {
                medium: 'music',
                type: 'song',
                title: 'Head Over Heels - Dave Bascombe 7" N.Mix',
                artist: 'Tears For Fears'
            },
            updatedAt: Date.now()
        },
        {
            name: 'Sam Rose',
            media: {
                medium: 'literature',
                type: 'book',
                title: 'Braiding Sweetgrass',
                author: 'Robin Wall Kimmerer'
            },
            updatedAt: Date.now()
        },
    ]);

    return (
        <View style={styles.feedContainer}>
            <FlatList data={feedData} renderItem={(feedItem) => {
                return <FeedItem entryData={feedItem} />
            }} keyExtractor={(item, index) => {
                return index
            }} alwaysBounceVertical={false}/>
        </View>
    );
};

export default FeedContainer;

const styles = StyleSheet.create({
    feedContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#224422',
    }
});