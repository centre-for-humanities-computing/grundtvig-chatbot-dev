import {COMMIT_TO_CHAT_LOG} from "./types"

const mutations = {
  [COMMIT_TO_CHAT_LOG]: function (state, {author, text}) {
    state.chatLog.push({
      timestamp: Date.now(),
      author,
      text
    })
  }
}

export default mutations
