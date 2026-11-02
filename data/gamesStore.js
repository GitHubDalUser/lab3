let nextId = 1;
const games = [];
export const getAll = () => games;
export const getById = (id) => games.find((game) => game.id === id);
export const create = ({ title, platform, status, rating }) => {
  const game = { id: nextId++, title, platform, status, rating };
  games.push(game);
  return game;
};
export const remove = (id) => {
  const index = games.findIndex((game) => game.id === id);
  if (index === -1) return null;
  const [removed] = games.splice(index, 1);
  return removed;
};
