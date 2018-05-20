const { createStore } = require("redux");
const voteCounter = require("./vote-counter");
const store = createStore(voteCounter);
const {increaseVote} = require("./increase-vote");


test("starts with no votes", function() {
    expect(store.getState().count).toBe(0);
});

test("increases vote by one", function() {
    store.dispatch(increaseVote());
    expect(store.getState().count).toBe(1);
});
