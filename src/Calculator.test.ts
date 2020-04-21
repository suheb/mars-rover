
import { calculateOutput } from './Calculator';
import { Direction, Instruction, ParsedInput } from './Model';

// Can add more test cases similarly
test('returns the correct output', () => {
  const input: ParsedInput = 
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
  const output = [
    {
      "location": {
        "x": 1,
        "y": 3
      },
      "direction": Direction.N,
      "instructions": []
    },
    {
      "location": {
        "x": 5,
        "y": 1
      },
      "direction": Direction.E,
      "instructions": []
    }
  ];
  expect(calculateOutput(input)).toStrictEqual(output);
});
