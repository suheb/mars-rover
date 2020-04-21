export enum Direction {
  N = "N",
  E = "E",
  S = "S",
  W = "W"
}

export enum Instruction {
  L = "L",
  R = "R",
  M = "M"
}

export interface Coordinate {
  x: number
  y: number
}

export interface Rover {
  location: Coordinate
  direction: Direction,
  instructions: Instruction[]
}

export interface ParsedInput {
  boundary: Coordinate
  rovers: Rover[]
}
