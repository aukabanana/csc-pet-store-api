import { Request, Response } from 'express';
import * as petService from '../services/pet.service';

export const getAll = (req: Request, res: Response): void => {
    // TODO:
    // 1. Read the optional `species` query param from req.query
    // 2. Call petService.getAllPets(species)
    // 3. Send a 200 response with the result

    const { species } = req.query;

    const pets = petService.getAllPets(species as string | undefined);
    res.status(200).json(pets);
};

export const getOne = (req: Request, res: Response): void => {
    // TODO:
    // 1. Read req.params.id
    // 2. Call petService.getPetById(id)
    // 3. If null/undefined → 404 with { message: 'Pet not found' }
    // 4. Otherwise → 200 with the pet
    const { id } = req.params;
    const pet = petService.getPetById(id as string);
    if (!pet) {
        res.status(404).json({ message: 'Pet not found' });
        return;
    }

    res.status(200).json({ pet });
};

export const create = (req: Request, res: Response): void => {
    // TODO:
    // 1. Destructure the expected fields from req.body
    // 2. Validate all fields — return 400 with a descriptive message on failure
    //    (check for missing fields, invalid species, age >= 0, price > 0, boolean available)
    // 3. Call petService.createPet(...)
    // 4. Send 201 with the new pet
    const { name, species, age, price, available } = req.body;

    if (!name || !species || age === undefined || price === undefined || available === undefined) {
        res.status(400).json({ message: 'Missing required fields' });
        return;
    }

    if (!petService.isValidSpecies(species)) {
        res.status(400).json({ message: 'Invalid Species' });
        return;
    }

    if (age < 0) {
        res.status(400).json({ message: 'Age must be greater or equal than 0' });
        return;
    }

    if (price <= 0) {
        res.status(400).json({ message: 'Price must be greater than 0' });
        return;
    }

    if (typeof available !== 'boolean') {
        res.status(400).json({ message: 'Available must be boolean' });
        return;
    }

    const newPet = petService.createPet({ name, species, age, price, available });

    res.status(201).json(newPet);
};

export const update = (req: Request, res: Response): void => {
    // TODO:
    // 1. Read req.params.id
    // 2. Validate all fields from req.body (same rules as create)
    // 3. Call petService.updatePet(id, data)
    // 4. If null → 404
    // 5. Otherwise → 200 with the updated pet
    const { id } = req.params;
    const { name, species, age, price, available } = req.body;

    if (!name || !species || age === undefined || price === undefined || available === undefined) {
        res.status(400).json({ message: 'Missing required fields' });
        return;
    }

    if (!petService.isValidSpecies(species)) {
        res.status(400).json({ message: 'Invalid Species' });
        return;
    }

    if (age < 0) {
        res.status(400).json({ message: 'Age must be greater or equal than 0' });
        return;
    }

    if (price <= 0) {
        res.status(400).json({ message: 'Price must be greater than 0' });
        return;
    }

    if (typeof available !== 'boolean') {
        res.status(400).json({ message: 'Available must be boolean' });
        return;
    }

    const updatePet = petService.updatePet(id as string, { name, species, age, price, available });
    if (!updatePet) {
        res.status(404).json({message: 'ID does not exist'});
        return;
    }

    res.status(200).json(updatePet);
};

export const remove = (req: Request, res: Response): void => {
    // TODO:
    // 1. Read req.params.id
    // 2. Call petService.deletePet(id)
    // 3. If false → 404
    // 4. Otherwise → 200 with { message: 'Pet deleted successfully' }
};