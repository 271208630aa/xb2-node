const nature = (callback) => {
  const data = "tree";
  callback(data);
};

nature((data2) => {
  console.log(data2);
});
