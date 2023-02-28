//Array Methods filter()

const manyPosts = [
    { name: 'Monica Geller', media: true, date: 2023},
    { name: 'Phoebe Buffet', media: true, date: 2022 },
    { name: 'Chandler Bing', media: false, date: 2023 },
    { name: 'Joey Tribbiani', media: false, date: 2022 },
    { name: 'Rachel Green', media: true, date: 2023 },
  ];
  
  const filteredmanyPosts = manyPosts.filter(
    (manyPost) => manyPost.media && manyPost.date >= 2023,
  );
  
  console.log(filteredmanyPosts);