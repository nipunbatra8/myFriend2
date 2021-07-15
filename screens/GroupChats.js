import React, { useState, useCallback, useEffect, Component } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import firebase from 'firebase';
import Fire from '../Fire';

type Props = {
  name?: string,
};

export default class GroupChats extends React.Component<Props> {
    state = {
        messages: [],
      };

      get user() {
        const user = firebase.auth().currentUser;
        return {
          name: user.displayName,
          _id: Fire.shared.uid,
        };
      }

      render() {
        return (
          <GiftedChat
            messages={this.state.messages}
            onSend={Fire.shared.send}
            user={this.user}
          />
        );
      }

      componentDidMount() {
        Fire.shared.on(message =>
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, message),
          }))
        );
      }
      componentWillUnmount() {
        Fire.shared.off();
      }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },
})
