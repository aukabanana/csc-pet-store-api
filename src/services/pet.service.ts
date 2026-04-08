import { v4 as uuidv4 } from 'uuid';
import { Pet, Species, petStore } from '../models/pet.model';

// ── Helpers ──────────────────────────────────────────────────────────────────

const VALID_SPECIES: Species[] = ['dog', 'cat', 'bird', 'fish', 'other'];

export const isValidSpecies = (value: unknown): value is Species =>
  VALID_SPECIES.includes(value as Species);

// ── Service functions ─────────────────────────────────────────────────────────

export const getAllPets = (species?: string): Pet[] => {
  // TODO: If `species` is provided, return only pets with that species.
  // Otherwise return all pets.
  // Hint: petStore.filter(...)
  return petStore.filter(()=> true);
};

// export const getPetById = (id: string): Pet | undefined => {
//   // TODO: Find and return the pet whose id matches.
//   // Hint: petStore.find(...)
// };

// export const createPet = (data: Omit<Pet, 'id'>): Pet => {
//   // TODO: Create a new Pet object, generate its id with uuidv4(),
//   // push it into petStore, and return the new pet.
// };

// export const updatePet = (id: string, data: Omit<Pet, 'id'>): Pet | null => {
//   // TODO: Find the index of the pet with this id.
//   // If not found, return null.
//   // Replace petStore[index] with { id, ...data } and return the updated pet.
//   // Hint: petStore.findIndex(...)
// };

// export const deletePet = (id: string): boolean => {
//   // TODO: Find the index of the pet.
//   // If not found, return false.
//   // Remove it from petStore using splice and return true.
//   // Hint: petStore.splice(index, 1)
// };