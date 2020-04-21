import { Direction, Instruction, ParsedInput, Rover } from "./Model";

export const parsenumber = (str: string): number => {
  const num = Number(str);
  if (isNaN(num)) {
    throw Error("Failed to parse string");
  }
  return num;
}

export const parseDirection = (str: string): Direction => {
  if (str in Direction) {
    return str as Direction;
  }
  throw Error("Failed to parse string");
}

export const parseInstructions = (str: string): Instruction[] => {
  return str.split("").map(char => {
    if (char in Instruction) {
      return char as Instruction;
    }
    throw Error("Failed to parse string");
  })
}
export const parseInput = (text: string) => {
  const lines = text.split("\n");
  const boundaryInput = lines[0].split(" ");
  const parsedInput: ParsedInput = {
    boundary: {
      x: parsenumber(boundaryInput[0]),
      y: parsenumber(boundaryInput[1])
    },
    rovers: []
  };
  // Loop over each rover starting from second line and incementing 2 as rover input 2 lines
  for (let i = 1; i < lines.length; i+=2) {
    const roverInput = lines[i].split(" ");
    const rover: Rover = {
      location: {
        x: parsenumber(roverInput[0]),
        y: parsenumber(roverInput[1])
      },
      direction: parseDirection(roverInput[2]),
      instructions: parseInstructions(lines[i+1])
    };
    parsedInput.rovers.push(rover);
  }
  return parsedInput;
}
