import { chessboardGraph } from "./chessboard_graph.js";

function knightMoves(start, end) {
  const graph = chessboardGraph();
  const visited = new Set();
  const queue = [[start, [start]]];

  while (queue.length > 0) {
    const [current, path] = queue.shift();

    if (current === end) {
      return console.log(`You made it in ${path.length - 1} moves! Here's your path: ${path}`);
    }

    visited.add(current);

    for (const neighbor of graph.get(current)) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, [...path, neighbor]]);
      }
    }
  }
  return null;
}

export { knightMoves }