import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

import * as WeshnetExpo from 'weshnet-expo';

export default function App() {
    const [asyncMsg, setAsyncMsg] = useState('')
    const [asyncError, setAsyncError] = useState<null | Error>(null)
    useEffect(() => {
        // execute async resolve
        WeshnetExpo.asyncResolve("this is an async message")
            .then((data: string) => {
                setAsyncMsg(data)
            }).catch((err: Error) => {
                console.error('async resolve error:', err)
            })

        // execute async reject
        WeshnetExpo.asyncReject()
            .then(() => {
                console.error("this resolve should not happen")
            }).catch((err: Error) => {
                setAsyncError(err)
            })
    }, [])

    return (
        <View style={styles.container}>
            <Text>{WeshnetExpo.hello('berty')}</Text>
            <Text>async message: {asyncMsg}</Text>
            <Text>async error: {asyncError?.message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
