import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import * as WeshnetExpo from '@berty/weshnet-expo'

export default function App() {
  const [peerID, setPeerID] = useState<string>()

  useEffect(() => {
    WeshnetExpo.init().then((client) => {
      client.serviceGetConfiguration({}).then((res) => {
        setPeerID(res.peerId)
        console.log(res)
      })
    })
  }, [])

  const loadingView = <Text> Loading Weshnet... </Text>
  const weshView = <Text>hello my peerid is: {peerID}</Text>
  return (
    <View style={styles.container}>{!peerID ? loadingView : weshView}</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
