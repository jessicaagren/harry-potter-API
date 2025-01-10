import './style.css'
import { CharacterCategories, Houses, HPCharacter } from './types';

const HPBaseurl = `https://hp-api.onrender.com/api`;
const HPCharactersURL = `${HPBaseurl}/characters`;

const getAllCharacters = async (): Promise<HPCharacter[]> => {
  const response = await fetch(HPCharactersURL);
  const data = response.json();
  return data;
}

const getAllCharactersInACategory = async (category: CharacterCategories): Promise<HPCharacter[]> => {
  const allCharactersInACategoryURL = `${HPCharactersURL}/${category}`;
  const response = await fetch(allCharactersInACategoryURL);
  const data = response.json();
  return data;
}

const getAllCharactersInAHouse = async (category: Houses): Promise<HPCharacter[]> => {
  const AllCharactersInAHouseURL = `${HPCharactersURL}/house/${category}`;
  const response = await fetch(AllCharactersInAHouseURL);
  const data = response.json();
  return data;
}

const getCharacterByID = async (id: string): Promise<HPCharacter[]> => {
  const response = await fetch(`${HPBaseurl}/character/${id}`);
  const data = await response.json() as HPCharacter[];
  
  return data as HPCharacter[];
}

console.log(await getCharacterByID(`9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8`));

const getCharacterNameByID = async (id: string): Promise<string> => {
  const character = (await getCharacterByID(id))[0].name;
  
  return character;
}

console.log(await getAllCharacters());
console.log(await getAllCharactersInACategory(`students`));
console.log(await getAllCharactersInACategory(`staff`));
console.log(await getAllCharactersInAHouse(`gryffindor`));

console.log(await getCharacterNameByID(`9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8`));