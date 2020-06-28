const natrue = () => {
  console.log("no1");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("KongLong");
    }, 2000);
  });
};

/* natrue().then((data) => {
  console.log(data);
}); */

const demo = async () => {
  const data = await natrue();
  console.log(data);
  console.log("demo - finish");
};
demo();

console.log("no2");
