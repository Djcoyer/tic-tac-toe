import React from 'react';
import Board from './../Components/Board';
import enzyme from 'enzyme';

test('should load alright', () => {
   const board = shallow(<Board calculateWinner={() => {return "X"}}/>);
   expect(board.state('showMessage')).to.equal(false);
    board.find('#undoButton').simulate('click');
    expect(board.state('showMessage')).to.equal(true);
});