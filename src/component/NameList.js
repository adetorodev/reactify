import React from "react";
import Person from "./Person";

function NameList() {
  //   const names = ["Bruce", "Clack", "Diana"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];

  //   let nameList = names.map((name) => <h2>{name}</h2>);
  //   return <div>{nameList}</div>;
  const personList = persons.map(person => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
