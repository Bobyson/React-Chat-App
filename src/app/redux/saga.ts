import { takeEvery, put } from 'redux-saga/effects';
import { sendMessage, receiveMessage } from './reducers/chatReducer';

// This is where you handle side effects
function* sendMessageSaga(action: ReturnType<typeof sendMessage>) {
  try {
    // Here, you can send the message to the server using WebSocket, etc.
    console.log('Sending message: ', action.payload);

    // If successful, dispatch an action to add the message
    yield put(receiveMessage(action.payload)); // This simulates receiving a message
  } catch (e) {
    console.error(e);
  }
}

// Watch for sendMessage actions
function* watchSendMessage() {
  yield takeEvery(sendMessage.type, sendMessageSaga);
}

// Combine all sagas (if you have more)
export default function* rootSaga() {
  yield watchSendMessage();
}
