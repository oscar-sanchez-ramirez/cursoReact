import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {

    test('debe de retornar un héroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);

    });

    test('debe de retornar undefined si Héroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);


        expect(heroe).toBe(undefined);

    });

    test('debe de retornar un arreglo con los héroes de DC', () => {

        const owner = 'DC';
        const heroeA = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);

        expect( heroeA ).toEqual( heroesData );

    });

    test('debe de retornar un arreglo con los héroes de Marvel', () => {

        const owner = 'Marvel';
        const heroeA = getHeroesByOwner( owner );

        const heroesData = heroes.filter(h => h.owner === owner);

        expect( heroeA ).toEqual( heroesData );
        expect( heroeA.length ).toBe( 2 );


    });

})