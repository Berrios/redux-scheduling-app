const { createStore } = require("redux");
const voteCounter = require("./vote-counter");
const store = createStore(voteCounter);
const {increaseVote} = require("./increase-vote");
const {decreaseVote} = require("./decrease-vote");

describe("Vote Counter", function() {
    test("starts with no votes", function() {
        expect(store.getState().count).toBe(0);
    });

    test("increases vote by one", function() {
        store.dispatch(increaseVote());
        expect(store.getState().count).toBe(1);
    });
    test("increases vote again", function() {
        store.dispatch(increaseVote());
        expect(store.getState().count).toBe(2);
    });
    test("decreases vote by one.", function() {
        store.dispatch(decreaseVote());
        expect(store.getState().count).toBe(1);
    });
    test("decreases vote by one.", function() {
        store.dispatch(decreaseVote());
        expect(store.getState().count).toBe(0);
    });
});
