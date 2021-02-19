import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import PrimeraApp from '../PrimerApp';
// import { render } from '@testing-library/react';


describe('Pruebas en <PrimeraApp />', () => {

   //   test('debe de mostrar el mensaje Hola, Soy Goku', ()=>{

   //      const saludo = 'Hola, Soy Goku';

   //      const { getByText } = render( <PrimeraApp saludo={ saludo } /> );

   //      expect( getByText( saludo ) ).toBeInTheDocument();

   //   });

   test('debe de mostrar <PrimeraApp /> saludo = Hola, Soy Goku', () => {

      const saludo = 'Hola, Soy Goku';
      const wraper = shallow(<PrimeraApp saludo={saludo} />);

      expect(wraper).toMatchSnapshot();

   });

   test('debe de mostrar subtitulo = Soy un subtitulo', () => {

      const saludo = 'Hola, Soy Goku';
      const subtitulo = 'Soy un subtitulo';
      const wraper = shallow(
         <PrimeraApp
            saludo={saludo}
            subtitulo={subtitulo}
         />);

      const textoParrafo = wraper.find('p').text();

      expect( textoParrafo ).toBe( subtitulo );

   });

})
