import { ParsedInput, Rover, Instruction, Direction } from "./Model";

export const calculateOutput = (input: ParsedInput): Rover[] => {
  return input.rovers.map(rover => {
    const newRoverState = {
      location: {...rover.location},
      direction: rover.direction
    }
    for (let instruction of rover.instructions) {
      switch(instruction) {
        case Instruction.M:
          switch(newRoverState.direction) {
            case Direction.E:
              if (newRoverState.location.x < input.boundary.x) {
                newRoverState.location.x++;
              }
              break;
            case Direction.W:
              if (newRoverState.location.x > 0) {
                newRoverState.location.x--;
              }
              break;
            case Direction.N:
              if (newRoverState.location.y < input.boundary.y) {
                newRoverState.location.y++;
              }
              break;
            case Direction.S:
              if (newRoverState.location.y > 0) {
                newRoverState.location.y--;
              }
              break;
          }
          break;
        case Instruction.L:
          switch(newRoverState.direction) {
            case Direction.E:
              newRoverState.direction = Direction.N;
              break;
            case Direction.W:
              newRoverState.direction = Direction.S;
              break;
            case Direction.N:
              newRoverState.direction = Direction.W;
              break;
            case Direction.S:
              newRoverState.direction = Direction.E;
              break;
          }
          break;
        case Instruction.R:
          switch(newRoverState.direction) {
            case Direction.E:
              newRoverState.direction = Direction.S;
              break;
            case Direction.W:
              newRoverState.direction = Direction.N;
              break;
            case Direction.N:
              newRoverState.direction = Direction.E;
              break;
            case Direction.S:
              newRoverState.direction = Direction.W;
              break;
          }
      }
    }
    return {
      ...newRoverState,
      instructions: []
    }
  });
}
