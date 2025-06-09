export enum AnimalClass {
    MAMMALS = 1,
    BIRDS = 2,
    AMPHIBIANS = 3,
    FISH = 4,
    REPTILES = 5,
    MINIBEASTS = 6
}

export const AnimalTypes = Object.keys(AnimalClass)
    .filter(key => isNaN(Number(key)))
    .map(key => ({
        id: AnimalClass[key as keyof typeof AnimalClass],
        name: key
    }))