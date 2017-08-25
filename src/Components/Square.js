import React, {Component, PropTypes} from 'react';

const Square = (props) => {

        const Icon = (props) => {
            switch (props.value) {
                case null:
                    return null;
                    break;
                case "X":
                    return (<i className="fa fa-times fa-3x" id={props.value} style={{paddingTop: '10px'}}></i>);
                    break;
                case "O":
                    return (<i className="fa fa-circle-o fa-3x" id={props.value} style={{paddingTop: '10px'}}></i>);
                    break;
            }
        };
        return (
            <td className="game-cell text-center" id={props.value} onClick={() => props.onClick()}>
                    <Icon value={props.value}/>
            </td>
        );
    };

Square.propTypes = {
    value: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Square;