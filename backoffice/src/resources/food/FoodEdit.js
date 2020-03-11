import React from 'react';
import {Edit,SimpleForm,TextInput, NumberInput} from 'react-admin';

export const FoodEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="power" />
        </SimpleForm>
    </Edit>
);