import React from 'react'
import { View, Text } from 'react-native'
import numeral from 'numeral'
import moment from 'moment'

function format(value) {
    if (!value) {
        return '-'
    } else if (!isNaN(value)) {
        return numeral(value).format('0,0.00')
    } else if (value instanceof Date) {
        if (new Date().getTime() - value.getTime() > 1000 * 60 * 60 * 24 * 15) {
            return moment(value).format()
        } else {
            return moment(value).fromNow()
        }
    } else {
        return value
    }
}

export default ({amount, label}) => (
    <View style={{flexDirection: 'column', padding: 28}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 56}}>{format(amount)}</Text>
        <Text style={{textAlign: 'center'}}>{label}</Text>
    </View>
)