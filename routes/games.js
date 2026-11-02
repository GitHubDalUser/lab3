import { Router } from 'express';
import * as gamesStore from '../data/gamesStore.js';
import validateGame from '../middleware/validateGame.js';
const router = Router();
const notFoundError = (id) => {
  const err = new Error(`Game with id ${id} not found`);
  err.status = 404;
  return err;
};
router.get('/', (req, res) => {
  res.json(gamesStore.getAll());
});
router.get('/:id', (req, res, next) => {
  const game = gamesStore.getById(Number(req.params.id));
  if (!game) return next(notFoundError(req.params.id));
  res.json(game);
});
router.post('/', validateGame, (req, res) => {
  const game = gamesStore.create(req.body);
  res.status(201).json(game);
});
router.delete('/:id', (req, res, next) => {
  const removed = gamesStore.remove(Number(req.params.id));
  if (!removed) return next(notFoundError(req.params.id));
  res.json(removed);
});
export default router;
