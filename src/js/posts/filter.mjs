//Array Methods filter()

const friends = [
    { name: 'Monica Geller', hasPosted: true, date: 2023 },
    { name: 'Phoebe Buffet', hasPosted: true, date: 2022 },
    { name: 'Chandler Bing', hasPosted: false, date: 2023 },
    { name: 'Joey Tribbiani', hasPosted: false, date: 2022 },
    { name: 'Rachel Green', hasPosted: true, date: 2023 },
  ];
  
  const filteredFriends = friends.filter(
    (friend) => friend.hasPosted && friend.date >= 2023,
  );
  
  console.log(filteredFriends);