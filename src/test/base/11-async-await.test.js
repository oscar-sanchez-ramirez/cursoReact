import React from 'react';
import { getImagen } from "../../base/11-async-await";

describe('Prubeas con async-await y Fetch', () => {

     test('dede de retornar una url con la imagen', async ()=>{

         const url = await getImagen();

         expect( url.includes('https://') ).toBe( true );

     });

})