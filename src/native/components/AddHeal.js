import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, TouchableOpacity, RefreshControl, Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import gql from 'graphql-tag'
import {  Mutation } from 'react-apollo';

const ADD_HEAL = gql`
mutation createHeal {
    createHeal {
        heal {
            id
        }
    }
}`

let AddHealComponent = ({
    error,
    loading,
    data,
    reFetch,
}) => (
    <Mutation mutation={ADD_HEAL}>
        {(addHeal, { data}) => (
            <Container style={{'backgroundColor': '#fff'}}>
                <Content padder contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                        <Button 
                            block
                            bordered
                            small
                            onPress={() => {
                            addHeal()
                            setTimeout(() => {
                                Actions.heals()
                            }, 1000)
                        }}><Text>Create Heal</Text></Button>
                </Content>
            </Container>
        )}
    </Mutation>
)

AddHealComponent.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  heals: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

AddHealComponent.defaultProps = {
  error: null,
  reFetch: null,
};

export default AddHealComponent;  
