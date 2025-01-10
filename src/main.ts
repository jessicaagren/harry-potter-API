import './style.css'

const HPurl = `https://hp-api.onrender.com/api/characters`;

const getAllPeopleInACategory = async (category: string) => {
  const allPeopleURL = `${HPurl}/${category}`
  const response = await fetch(allPeopleURL);
  const data = response.json();
  return data;
}

console.log(await getAllPeopleInACategory(`students`));
console.log(await getAllPeopleInACategory(`staff`));