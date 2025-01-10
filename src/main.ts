import './style.css'
import { CharacterCategories, Houses, Character } from './types';

const HPBaseurl = `https://hp-api.onrender.com/api`;
const HPCharactersURL = `${HPBaseurl}/characters`;

const getAllCharacters = async (): Promise<Character[]> => {
  const response = await fetch(HPCharactersURL);
  const data = await response.json();

  return data as Character[];
}

const getAllCharactersInACategory = async (category: CharacterCategories): Promise<Character[]> => {
  const allCharactersInACategoryURL = `${HPCharactersURL}/${category}`;
  const response = await fetch(allCharactersInACategoryURL);
  const data = await response.json();

  return data as Character[];
}

const getAllCharactersInAHouse = async (category: Houses): Promise<Character[]> => {
  const AllCharactersInAHouseURL = `${HPCharactersURL}/house/${category}`;
  const response = await fetch(AllCharactersInAHouseURL);
  const data = await response.json();

  return data as Character[];
}

const getCharacterByID = async (id: string): Promise<Character[]> => {
  const response = await fetch(`${HPBaseurl}/character/${id}`);
  const data = await response.json();
  
  return data as Character[];
}


// console.log(await getCharacterByID(`9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8`));

const getCharacterNameByID = async (id: string): Promise<string> => {
  const character = (await getCharacterByID(id))[0].name;
  
  return character;
}

console.log(await getAllCharacters());
console.log(await getAllCharactersInACategory(`students`));
console.log(await getAllCharactersInACategory(`staff`));
console.log(await getAllCharactersInAHouse(`gryffindor`));

console.log(await getCharacterNameByID(`9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8`));

// Fixa index, får fel "Element implicitly has an 'any' type because expression of type 'number' can't be used to index type 'Promise<Character[]>'."
// Det är ju typat???
// for (let i = 1; i < 6; i++) {
//   await getAllCharactersInAHouse(`gryffindor`)[i].name;
// }