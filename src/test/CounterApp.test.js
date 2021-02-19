import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';




describe('Pruebas en el <CounterApp />', () => {

    let wraper = shallow(<CounterApp />);

    beforeEach(() => {

        wraper = shallow(<CounterApp />);
    
    });

    test('debe de mostrar <CounterApp /> correctamente', () => {



        expect(wraper).toMatchSnapshot();

    });

    test('debe de mostrar el valor por defecto de ', () => {

        const wraper = shallow(<CounterApp value={100} />);

        const valorDefecto = wraper.find('h2').text().trim();

        expect(valorDefecto).toBe('100');

    });

    test('simular el evento click +1', () => {

        wraper.find('button').at(0).simulate('click');
        const btn1 = wraper.find('h2').text().trim();

        expect(btn1).toBe('11');

    });

    test('simular el evento -1', ()=>{

        wraper.find('button').at(2).simulate('click');
        const btn2 = wraper.find('h2').text().trim();

        expect( btn2 ).toBe( '9' );

    });

    test('simular el evento de reset', ()=>{

        const wraper = shallow(<CounterApp value={ 105 } />);

        wraper.find('button').at(0).simulate('click');
        wraper.find('button').at(0).simulate('click');

        wraper.find('button').at(1).simulate('click');

        const btnR = wraper.find('h2').text().trim();

        expect( btnR ).toBe( '105' );

    });



})