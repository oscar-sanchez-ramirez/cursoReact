import { getUser, getUsuarioActivo } from '../../base/05-funciones'


describe('Pruebas en 05-funciones', () => {

    test('debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(user);

    })

    test('Debe retorna un string y un número', () => {

        const nombre = 'Oscar';
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });

    })

})