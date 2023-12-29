# Self-Driving Car
<img width="1470" alt="image" src="https://github.com/RayaneLark/Self-driving-car/assets/89400140/564da4f9-5a4a-4dfc-8640-3a26c32ea7b3">


## Overview

This project is a self-driving car simulation implemented in HTML, CSS, and JavaScript. The simulation includes a canvas for car visualization, various markings and editors for creating a virtual environment, as well as scripts for different components such as world, sensors, controls, and the main application.

## Project Structure

The project is organized into the following directories and files:

- **world**
  - **js**
    - `world.js`: Script for managing the world simulation.
    - `viewport.js`: Script for handling the viewport.
    - `markings`
      - Various scripts for different markings like stop, start, crossing, parking, light, target, yield, etc.
    - `editors`
      - Scripts for different editors like markingEditor, graphEditor, crossingEditor, stopEditor, startEditor, parkingEditor, lightEditor, targetEditor, yieldEditor, etc.
    - `items`
      - Scripts for items like tree and building.
    - `math`
      - `utils.js`: Utility functions for mathematical operations.
      - `graph.js`: Script for handling graphs.
    - `primitives`
      - Scripts for primitive shapes like point, segment, polygon, and envelope.

- **visualizer.js**: Script for visualization.
- **network.js**: Script for network-related functionality.
- **sensor.js**: Script for handling sensors.
- **utils.js**: General utility functions.
- **controls.js**: Script for handling controls.
- **car.js**: Script for simulating the self-driving car.
- **main.js**: Main script that ties everything together.

## Usage

To run the self-driving car simulation, open the `index.html` file in a web browser. The simulation canvas and control buttons will be displayed. Use the 💾 button to save and 🗑️ button to discard.
