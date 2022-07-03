global.beforeAll(() => {
  console.error = jest.fn().mockImplementation(() => {});
  console.info = jest.fn().mockImplementation(() => {});
  console.log = jest.fn().mockImplementation(() => {});
  console.warn = jest.fn().mockImplementation(() => {});
})