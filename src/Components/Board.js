import React, {PropTypes, Component} from 'react';
import Square from './Square';
import './../styles/table.css';
import './../index.css';

class Board extends Component {
    constructor() {
        super();

        this.state = {
            squares: [
                null, null, null,
                null, null, null,
                null, null, null
            ],
            xIsNext: true,
            showMessage: false
        }
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]}
                       onClick={() => this.handleClick(i)}/>;
    }

    handleClick = (i) => {
        let square = this.state.squares[i];
        if (this.props.calculateWinner(this.state.squares) || square) {
            return;
        }
        square = (this.state.xIsNext ? 'X' : 'O');
        this.setState((prevState) => {
            prevState.squares[i] = square;
            prevState.xIsNext = !prevState.xIsNext;
        });
    };

    toggleMessage = () => {
        this.setState({showMessage: !this.state.showMessage});
    };

    reset = () =>
    {
        let resetState =[
            null, null, null,
            null, null, null,
            null, null, null
        ];
        this.setState({showMessage: false, squares: resetState, xIsNext: true});
    };



    formatTable = (rows) => {
        if (rows) {
            let rowArray = [];
            for (let i = 0; i < rows; i++) {
                let row = (<tr>
                    {this.renderSquare(0 + (i * 3))}
                    {this.renderSquare(1 + (i * 3))}
                    {this.renderSquare(2 + (i * 3))}
                </tr>);
                rowArray.push(row);
            }
            return rowArray;
        }
    };

    render() {
        let winner = this.props.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = "Winner winner, chicken dinner! Congrats, " + winner;
        }
        else {
            status = "Next Player: " + (this.state.xIsNext ? "X" : "O");
        }

        const Image = (props) => {
            if(props.show === true){
                return(
                    <div className="jumbotron retry" style={{width: '310px', height: '150px', display: 'inline-block'}}>
                    </div>
                )
            }
            else return null;
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h4>{status}</h4>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <Image show={this.state.showMessage}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <table className="table table-bordered table-hover">
                            <tbody>
                            {this.formatTable(3)}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <div className="btn-group">
                            <button className="btn btn-outline-secondary btn-sm" onClick={() => this.toggleMessage()}>Undo</button>
                            <button className="btn btn-outline-primary btn-sm" onClick={this.reset}>Restart</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Board.propTypes = {
    calculateWinner: PropTypes.func.isRequired,
};

export default Board;