const INCREASE_VOTE = "INCREASE_VOTE";

function increaseVote() {
    return {
        type: INCREASE_VOTE
    }
}

module.exports = {
    INCREASE_VOTE,
    increaseVote
}
