async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 2000);
  });
}

/* async function main() {
  try {
    const result = await fetchData();
    console.log("Success:", result); // Output: "Success: peanut butter"
  } catch (error) {
    console.error("Error:", error);
  }
}

main(); */

test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

/* test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (error) {
    expect(error).toMatch("error");
  }
}); */

/**Using Resolve and Reject: sintact sugar */
test("the data is peanut butter", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});

/*   test('the fetch fails with an error', async () => {
    await expect(fetchData()).rejects.toMatch('error');
  }); */
