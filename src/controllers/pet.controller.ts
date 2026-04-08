import { Request, Response } from 'express';
import * as petService from '../services/pet.service';

export const getAll = (req: Request, res: Response): void => {
  // TODO:
  // 1. Read the optional `species` query param from req.query
  // 2. Call petService.getAllPets(species)
  // 3. Send a 200 response with the result
  const pets = petService.getAllPets();
  res.status(200).json(pets);
};

export const getOne = (req: Request, res: Response): void => {
  // TODO:
  // 1. Read req.params.id
  // 2. Call petService.getPetById(id)
  // 3. If null/undefined → 404 with { message: 'Pet not found' }
  // 4. Otherwise → 200 with the pet
};

export const create = (req: Request, res: Response): void => {
  // TODO:
  // 1. Destructure the expected fields from req.body
  // 2. Validate all fields — return 400 with a descriptive message on failure
  //    (check for missing fields, invalid species, age >= 0, price > 0, boolean available)
  // 3. Call petService.createPet(...)
  // 4. Send 201 with the new pet
};

export const update = (req: Request, res: Response): void => {
  // TODO:
  // 1. Read req.params.id
  // 2. Validate all fields from req.body (same rules as create)
  // 3. Call petService.updatePet(id, data)
  // 4. If null → 404
  // 5. Otherwise → 200 with the updated pet
};

export const remove = (req: Request, res: Response): void => {
  // TODO:
  // 1. Read req.params.id
  // 2. Call petService.deletePet(id)
  // 3. If false → 404
  // 4. Otherwise → 200 with { message: 'Pet deleted successfully' }
};