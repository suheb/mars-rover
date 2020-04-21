
import { Direction, Instruction, ParsedInput } from './Model';
import { parse } from 'path';
import { parseInput } from './Parser';

// Can add more test cases similarly
test('returns the correct output', () => {
  const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;
  const output: ParsedInput = 
  {
    "boundary": {
      "x": 5,
      "y": 5
    },
    "rovers": [
      {
        "location": {
          "x": 1,
          "y": 2
        },
        "direction": Direction.N,
        "instructions": [
          Instruction.L,
          Instruction.M,
          Instruction.L,
          Instruction.M,
          Instruction.L,
          Instruction.M,
          Instruction.L,
          Instruction.M,
          Instruction.M
        ]
      },
      {
        "location": {
          "x": 3,
          "y": 3
        },
        "direction": Direction.E,
        "instructions": [
          Instruction.M,
          Instruction.M,
          Instruction.R,
          Instruction.M,
          Instruction.M,
          Instruction.R,
          Instruction.M,
          Instruction.R,
          Instruction.R,
          Instruction.M
        ]
      }
    ]
  }
  expect(parseInput(input)).toStrictEqual(output);
});


test('throws error for invalid boundary', () => {
  // First line has invalid input
  const input = `5 X 
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;
  expect(() => parseInput(input)).toThrowError();
});

test('throws error for invalid rover position', () => {
  // Second line has invalid input
  const input = `5 5 
1 2
LMLMLMLMM
3 3 E
MMRMMRMRRM`;
  expect(() => parseInput(input)).toThrowError();
});

test('throws error for invalid instruction ', () => {
  // Second line has invalid input
  const input = `5 5 
1 2 N
LSLMLMLMM
3 3 E
MMRMMRMRRM`;
  expect(() => parseInput(input)).toThrowError();
});
