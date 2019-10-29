import {COMMIT_TO_CHAT_LOG} from "./types"

const mutations = {
  [COMMIT_TO_CHAT_LOG]: function (state, {author, time, text}) {
    state.chatLog.push({
      time,
      author,
      text
    })
  }
}

export default mutations
