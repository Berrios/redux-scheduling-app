const {INCREASE_VOTE} = require("./increase-vote");
const {DECREASE_VOTE} = require("./decrease-vote");

module.exports = function voteCounter(state = {
    count: 0
}, action) {
    if (action.type === INCREASE_VOTE) {
        return {
            count: state.count + 1 
        }
    }
    if (action.type === DECREASE_VOTE) {
        return {
            count: state.count - 1
        }
    } 
    return state;
}
