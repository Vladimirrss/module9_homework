const jsonString=`
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const list = JSON.parse(jsonString);


const result = {
  name: list.name,
  age: list.age,
  prof: list.prof,
};
console.log('list', list);