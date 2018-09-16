import React from 'react';
import { Flex, Box, Button } from 'rebass';
import SquareBox from '../SquareBox';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 4px;
  padding: 0em 0em;
  margin-top: 10px;
  background: #b40404;
  color: #eee;
  border: 1px solid grey;
  height: 50px;
  width: 100%;
`;

const StyledDiv = styled.div`
  border-radius: 4px;
  padding: 0em 0em;
  margin-bottom: 10px;
  background: #eee;
  border: 1px solid grey;
  height: 50px;
  line-height: 50px;
  width: 100%;
  text-align: center;
`;

function checkWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  renderSquare(i) {
    return (
      <SquareBox
        value={this.state.squares[i]}
        boxSize={180}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  handleClick(i) {
    let squares = this.state.squares.slice();

    if (checkWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  handleReset() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    });
  }

  render() {
    const winner = checkWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <Box>
        <StyledDiv className="status">{status}</StyledDiv>

        <Flex>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </Flex>
        <Flex>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </Flex>
        <Flex>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </Flex>

        <StyledButton children="Reset" onClick={() => this.handleReset()} />
      </Box>
    );
  }
}

export default Board;
