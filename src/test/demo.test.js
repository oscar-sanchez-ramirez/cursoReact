
describe('Pruebas en el archivo demo.test.js', () => {

    test('deben ser iguales los string', () => {

        //1. inicialización
        const mensaje = 'Hola Mundo';

        //2. estímulo
        const mesaje2 = `Hola Mundo`;

        //3. Observar el comportamiento
        expect(mensaje).toBe(mesaje2);

    })

    test('deben ser iguales los numeros', () => {

        //1. inicialización
        const numero = 17;

        //2. estímulo
        const numero2 = 17;

        //3. Observar el comportamiento
        expect(numero).toBe(numero2);

    })

});


