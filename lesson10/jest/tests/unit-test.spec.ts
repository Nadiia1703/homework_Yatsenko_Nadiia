import { describe, expect, test } from '@jest/globals';
import { EarthPlanet } from 'src/earth-planet';

describe('Unit test suit', () => {
    test('test1', () => {

        //Arrange
        const obj = new EarthPlanet('Earth', 6741);

        //Act
        obj.getInfo();

        //Assert
        expect(obj.name).toBe('Earth');
    });
});
