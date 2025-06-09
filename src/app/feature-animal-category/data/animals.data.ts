import { AnimalClass } from "../utilities/animal-category.enum";
import { IAnimalData } from "../utilities/animal.interfaces";


export const mammalDesc = `A mammal is a vertebrate animal of the class Mammalia.
    Mammals are characterised by the presence of milk-producing mammary glands for feeding their young,
    a broad neocortex region of the brain, fur or hair, and three middle ear bones.`;

export const birdsDesc = `Birds are warm-blooded vertebrates. 
    They have three characteristics that distinguish them from other animals: feathers; hard-shelled eggs; and hollow bones.`;

export const amphibianDesc = `Amphibians are small vertebrates that need water, or a moist environment, to survive.
    The species in this group include frogs, toads, salamanders, and newts. All can breathe and absorb water through their very thin skin.`;

export const fishDesc = `Fish are aquatic vertebrate animals that have gills but lack limbs with digits, like fingers or toes.
    Recall that vertebrates are animals with internal backbones.`;

export const reptilesDesc = `Reptiles are a class of vertebrates made up mostly of snakes, turtles, lizards, and crocodilians. 
    These animals are most easily recognized by their dry, scaly skin. 
    Almost all reptiles are cold-blooded, and most lay eggs—though some, like the boa constrictor, give birth to live young.`;

export const miniBeastDesc = 'Minibeasts are invertebrates - they are creatures without backbones';


export const animalsData: IAnimalData[] = [{
    name: 'Lion',
    image: 'assets/lion.png',
    description: 'A large, powerful carnivorous mammal known as the "king of the jungle." Lions live in prides and are native to Africa.',
    type: AnimalClass.MAMMALS
},
{
    name: 'Dog',
    image: 'assets/dog.png',
    description: 'A loyal and domesticated mammal known as "man’s best friend." Dogs come in various breeds and are used for companionship, work, and protection.',
    type: AnimalClass.MAMMALS
},
{
    name: 'Cat',
    image: 'assets/cat.png',
    description: 'A small, agile mammal often kept as a pet. Cats are known for their independence, sharp claws, and nocturnal nature.',
    type: AnimalClass.MAMMALS
},
{
    name: 'Whale',
    image: 'assets/whale.png',
    description: 'A large, aquatic mammal that lives in the ocean. Whales breathe air through blowholes and are known for their intelligence and communication.',
    type: AnimalClass.MAMMALS
},
{
    name: 'Cow',
    image: 'assets/cow.png',
    description: 'A domesticated herbivorous mammal raised for milk, meat, and labor. Cows are commonly found on farms and are important to agriculture.',
    type: AnimalClass.MAMMALS
},
{
    name: 'Dove',
    image: '',
    description: 'A gentle, white bird often symbolizing peace. Doves are known for their soft cooing sounds and graceful flight.',
    type: AnimalClass.BIRDS
},
{
    name: 'Owl',
    image: '',
    description: 'A nocturnal bird with large eyes and excellent vision, known for its hooting sound and ability to rotate its head widely.',
    type: AnimalClass.BIRDS
},
{
    name: 'Eagle',
    image: '',
    description: 'A powerful bird of prey with sharp talons and keen eyesight, often seen soaring high in the sky.',
    type: AnimalClass.BIRDS
},
{
    name: 'Parrot',
    image: '',
    description: 'A colorful bird known for its ability to mimic sounds and human speech. Parrots are highly intelligent and social.',
    type: AnimalClass.BIRDS
},
{
    name: 'Vulture',
    image: '',
    description: 'A scavenging bird of prey that feeds on carrion. Vultures have bald heads to stay clean while feeding.',
    type: AnimalClass.BIRDS
},
{
    name: 'Frog',
    image: '',
    description: 'An amphibian with smooth skin and powerful legs for jumping. Frogs live both in water and on land.',
    type: AnimalClass.AMPHIBIANS
},
{
    name: 'Tadpole',
    image: '',
    description: 'The larval stage of a frog, living in water and breathing through gills before metamorphosing into an adult frog.',
    type: AnimalClass.AMPHIBIANS
},
{
    name: 'Slamander',
    image: '',
    description: 'A misspelled name; should be “Salamander.” A small amphibian with moist skin, known for its lizard-like appearance and regenerative abilities.',
    type: AnimalClass.AMPHIBIANS
},
{
    name: 'Newt',
    image: '',
    description: 'A small, semi-aquatic amphibian that resembles a lizard and has the ability to regenerate limbs.',
    type: AnimalClass.AMPHIBIANS
},
{
    name: 'Caecilian',
    image: '',
    description: 'A limbless, burrowing amphibian that resembles a worm or snake and is rarely seen due to its underground lifestyle.',
    type: AnimalClass.AMPHIBIANS
},
{
    name: 'Flying Fish',
    image: '',
    description: 'A marine fish known for its ability to glide above the water’s surface using its large, wing-like fins.',
    type: AnimalClass.FISH
},
{
    name: 'Oscar Fish',
    image: '',
    description: 'A popular aquarium fish with a striking appearance and aggressive personality. Oscars are native to South America.',
    type: AnimalClass.FISH
},
{
    name: 'Betta',
    image: '',
    description: 'Also known as Siamese fighting fish, Betta fish are known for their vibrant colors and territorial behavior.',
    type: AnimalClass.FISH
},
{
    name: 'Milk Fish',
    image: '',
    description: 'A silvery, herbivorous fish commonly found in the Pacific and Indian Oceans. It’s a popular food fish in many cultures.',
    type: AnimalClass.FISH
},
{
    name: 'Stone Fish',
    image: '',
    description: 'One of the most venomous fish, known for its excellent camouflage that resembles a rock or coral.',
    type: AnimalClass.FISH
},
{
    name: 'Snake',
    image: '',
    description: 'A legless reptile with a long, flexible body. Snakes can be venomous or non-venomous and vary widely in size.',
    type: AnimalClass.REPTILES
},
{
    name: 'Turtle',
    image: '',
    description: 'A reptile with a hard shell that protects its body. Turtles can live on land or in water.',
    type: AnimalClass.REPTILES
},
{
    name: 'Crocodile',
    image: '',
    description: 'A large aquatic reptile with a long snout and powerful jaws, often found in rivers and wetlands.',
    type: AnimalClass.REPTILES
},
{
    name: 'Gecko',
    image: '',
    description: 'A small, nocturnal lizard known for its ability to climb smooth surfaces and make chirping sounds.',
    type: AnimalClass.REPTILES
},
{
    name: 'Iguana',
    image: '',
    description: 'A herbivorous lizard found in tropical areas. Iguanas have spiny backs and are good climbers.',
    type: AnimalClass.REPTILES
},
{
    name: 'Spider',
    image: '',
    description: 'An eight-legged arthropod that spins webs to catch prey. Some spiders are venomous but most are harmless to humans.',
    type: AnimalClass.MINIBEASTS
},
{
    name: 'Bee',
    image: '',
    description: 'A flying insect known for pollinating flowers and producing honey. Bees live in colonies and are vital to ecosystems.',
    type: AnimalClass.MINIBEASTS
},
{
    name: 'Butterfly',
    image: '',
    description: 'An insect with colorful wings and a four-stage life cycle. Butterflies are important pollinators.',
    type: AnimalClass.MINIBEASTS
},
{
    name: 'Ladybird',
    image: '',
    description: 'Also known as ladybugs, these small beetles are recognized for their red, spotted shells and helpfulness in gardens.',
    type: AnimalClass.MINIBEASTS
},
{
    name: 'Wasp',
    image: '',
    description: 'A flying insect similar to bees, but with a slimmer body and a more aggressive nature. Some species sting multiple times.',
    type: AnimalClass.MINIBEASTS
}]