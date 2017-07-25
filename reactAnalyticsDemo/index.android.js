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

    _onPressButton() {
        tracker1.trackEvent('demo', 'trackevent');
    }

    render() {
        return (
            <View style={styles.container}>
              <View style={styles.buttonContainer}>
                <Button
                    onPress={this._onPressButton}
                    title="Press Me"
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                    onPress={this._onPressButton}
                    title="Press Me"
                    color="#841584"
                />
              </View>
              <View style={styles.alternativeLayoutButtonContainer}>
                <Button
                    onPress={this._onPressButton}
                    title="This looks great!"
                />
                <Button
                    onPress={this._onPressButton}
                    title="OK!"
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
