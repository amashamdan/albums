import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenPressed, children }) => {
    const { buttonStyle, textStyle } = styles;
    // onPress is like onClick, the naming is not random.
    return (
        <TouchableOpacity onPress={whenPressed} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1, //expand to fill as much content as possible.
        alignSelf: 'stretch', //
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;
