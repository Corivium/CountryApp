import fetch from "node-fetch";

test("Return country data from apis", async () => {
  global.fetch - jest.fn(() => {
    Promise.resolve();
  });
  const customFilters = "fields=name,capital,flags,population,cca2,cioc,currencies";
  const fetch = (`${endpoint}all?${customFilters}`);
  expect(fetch).toBeDefined();
})