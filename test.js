const { createStore } = require("redux");
const voteCounter = require("./vote-counter");
const store = createStore(voteCounter);



test("increases vote by one", function() {
    expect(store.getState().count).toBe(0);
});
