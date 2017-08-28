import React from 'react';
import {shallow} from 'enzyme';
import Square from './../Components/Square';


test('This works', () => {
   const square = shallow(<Square value={null} onClick={() => {square.setProps({value: "X"})}}/>);
   expect(!square.hasClass("fa fa-times"));
   square.simulate('click');
   expect(square.hasClass('fa fa-times'));
});