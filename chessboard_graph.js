function chessboardGraph() {
  const graph = new Map();
  const files = 'abcdefgh';
  const ranks = '12345678';

  const knightMoves = [
    [1, 2], [2, 1], [2, -1], [1, -2], 
    [-1, -2], [-2,-1], [-2, 1], [-1, 2],
  ];
  
  const isValid = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const square = `${files[x]}${ranks[y]}`;
      graph.set(square, []);

      for (let [dx, dy] of knightMoves) {
        const nx = x + dx;
        const ny = y + dy;

        if (isValid(nx, ny)) {
          const target = `${files[nx]}${ranks[ny]}`;
          graph.get(square).push(target);
        }
      }
    }
  }
  return graph;
}

export { chessboardGraph }
