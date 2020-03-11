import React from 'react';
import {Create,SimpleForm,TextInput, NumberInput} from 'react-admin';

export const FoodCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="name" />
            <NumberInput source="power" />
        </SimpleForm>
    </Create>
);