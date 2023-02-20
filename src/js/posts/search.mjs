

const friends = [
    { name: "Monica" },
    { name: "Chandler" },
    { name: "Joey" },
    { name: "Phoebe" },
    { name: "Rachel" },
  ];
  
  const foundfriend = friends.find(({ name }) => name[0].toLowerCase() === 'j');
  
  console.log(foundfriend);
  