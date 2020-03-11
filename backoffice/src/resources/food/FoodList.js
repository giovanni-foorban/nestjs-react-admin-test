import React from 'react';
import {Datagrid,List,TextField, NumberField} from 'react-admin';

export const FoodList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="ID"/>
            <TextField source="name" label="Food Name"/>
            <NumberField source="power" label="Power number" />
        </Datagrid>
    </List>
);