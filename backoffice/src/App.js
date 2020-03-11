import React from 'react';
import { Admin, Resource, EditGuesser, ListGuesser} from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud';
import food from "./resources/food";

const dataProvider = crudProvider('http://localhost:3000');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="food" {...food}/>
  </Admin>
);
export default App;