export const selectors = {
    getPlayersList: state => state.game.players,
    getLeaderboardPlayersList: state => state.game.leaderboardPlayers,
    getCurrentQuestion: state => state.game.currentQuestion,
    getChannelStatus: state => state.game.channelStatus,
    getListLoader: state => state.game.listLoader,
    getButtonLoader: state => state.game.buttonLoader,
    getDialogLoader: state => state.game.dialogLoader,
    getBigLoader: state => state.game.bigLoader,
    getPlayerList: state => state.game.players,
    getLeaderboardFlag: state => state.game.showLeaderboard,
    getReconnectFlag: state => state.game.allowReconnect,
    getWaitingFlag: state => state.game.waitingFlag
};
