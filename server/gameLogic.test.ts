// import { expect } from 'chai';
import {checkGuess, Istate} from './gameLogic';
import {expectTypeOf} from 'expect-type';

describe('checkGuess', () => {
    const guess:string = 'HELLO'
    const stateExample:Istate= [true,'','','','','']
    it('should return Istate type', () => {
        expectTypeOf(checkGuess(guess)).toMatchTypeOf<Istate>(stateExample)
    });

});


  