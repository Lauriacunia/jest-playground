function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 2000);
  });
}

/* fetchData()
  .then(result => {
    console.log('Success:', result); // Output: "Success: peanut butter"
  })
  .catch(error => {
    console.error('Error:', error);
  }); */

test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});
