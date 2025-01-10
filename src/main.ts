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

// for (let i = 1; i < 6; i++) {
//   const characters = await getAllCharactersInAHouse(`gryffindor`);
//   console.log(characters[i].name)
// }

// const logCharactersInHouse = async (house: Houses) => {
//   try {
//     const characters = await getAllCharactersInAHouse(house);

//     for (let i = 0; i < characters.length; i++) {
//       console.log(`Character ${i + 1}: ${characters[i].name}`);
//     }
//   } catch (error) {
//     console.error("Failed to fetch characters:", error);
//   }
// };

// logCharactersInHouse(`gryffindor`);

const charactersInCategoryDiv = document.getElementById("characters-in-category") as HTMLDivElement;

const DOMCharactersInCategory = async (category: CharacterCategories) => {
    const characters = await getAllCharactersInACategory(category);

    const h2 = document.createElement("h2") as HTMLElement;
    h2.innerHTML = `Characters in ${category}:`;
    charactersInCategoryDiv.appendChild(h2);

    for (let i = 0; i < characters.length; i++) {
      const article = document.createElement("article") as HTMLElement;
      article.id = `${characters[i].id}`;
      article.innerHTML = `Character ${i + 1}: ${characters[i].name}`;
      charactersInCategoryDiv.appendChild(article);

      const characterArticle = document.getElementById(`${characters[i].id}`) as HTMLElement;

      const img = document.createElement("img");
      img.src = characters[i].image;
      img.style.width = 'auto';
      img.style.maxHeight = '100px';
      characterArticle.appendChild(img);
  }
};

const charactersInHouseDiv = document.getElementById("characters-in-house") as HTMLDivElement;

// Göra som (house: Houses | CharacterCategories)??????

const DOMCharactersInHouse = async (house: Houses) => {
    const characters = await getAllCharactersInAHouse(house);

    const h2 = document.createElement("h2") as HTMLElement;
    h2.innerHTML = `Characters in ${house}:`;
    charactersInHouseDiv.appendChild(h2);

    for (let i = 0; i < characters.length; i++) {
      const article = document.createElement("article") as HTMLElement;
      article.id = `${characters[i].id}`;
      article.innerHTML = `Character ${i + 1}: ${characters[i].name}`;
      charactersInHouseDiv.appendChild(article);

      const characterArticle = document.getElementById(`${characters[i].id}`) as HTMLElement;

      const img = document.createElement("img");
      img.src = characters[i].image;
      img.style.width = 'auto';
      img.style.maxHeight = '100px';
      characterArticle.appendChild(img);
  }
};

// DOMCharactersInHouse(`gryffindor`);
DOMCharactersInCategory(`staff`);