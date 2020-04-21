import React, { useState, ChangeEvent } from 'react';
import { Button, Grid, FormLabel, TextareaAutosize, FormControl, FormHelperText, Typography } from "@material-ui/core";
import { calculateOutput } from './Calculator';
import { parseInput } from './Parser';
import { Rover } from './Model';

const placeholder = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

const App = () => {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState<Rover[]>([]);
  const [error, setError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  }

  const handleSubmit = () => {
    try {
      const parsedInput = parseInput(input);
      const output = calculateOutput(parsedInput);
      console.log(parsedInput);
      console.log(output);
      setOutput(output);
    } catch {
      setError(true);
    }
  }

  return (
    <Grid
      container
      direction="column"
      alignContent="center"
      justify="flex-end"
      spacing={2}
    >
      <Grid
        item
        sm={4}
      >
        <FormControl component="fieldset" fullWidth>
          <FormLabel required>
            Input
          </FormLabel>
          <TextareaAutosize
            aria-label="input"
            rowsMin={5}
            style={{minWidth:400}}
            value={input}
            placeholder={placeholder}
            onChange={handleChange}
          />
          {error && <FormHelperText error>Invalid input</FormHelperText>}
        </FormControl>
      </Grid>
      <Grid
        item
        sm={1}
      >
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
      {output.length > 0 && (
        <Grid
          item
          sm={4}
        >
          <Typography variant="subtitle1">Output:</Typography>
          {output.map((rover, index) => (
            <Typography key={index} variant="subtitle2">
              {`${rover.location.x} ${rover.location.y} ${rover.direction}`}
            </Typography>
          ))}
        </Grid>
      )}
    </Grid>
    
  );
}

export default App;
