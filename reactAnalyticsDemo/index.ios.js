/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry, Button,
    StyleSheet,
    View
} from 'react-native';
import {
    GoogleAnalyticsTracker
} from 'react-native-google-analytics-bridge';

let tracker1 = new GoogleAnalyticsTracker('UA-103056772-1');

tracker1.trackScreenView('Home');


export default class reactAnalyticsDemo extends Component {

    _onPressButton1() {
        tracker1.trackEvent('demo', 'event1');
    }
    _onPressButton2() {
        tracker1.trackEvent('demo', 'event2');
    }

    render() {
        return (
            <View style={styles.container}>
              <View style={styles.buttonContainer}>
                <Button
                    onPress={this._onPressButton1}
                    title="Event 1"
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                    onPress={this._onPressButton2}
                    title="Event 2"
                    color="#841584"
                />
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

AppRegistry.registerComponent('reactAnalyticsDemo', () => reactAnalyticsDemo);
