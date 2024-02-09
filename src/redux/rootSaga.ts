import { all } from "redux-saga/effects";
import loanSaga from "./loanSaga";

export default function* rootSaga(){
    yield all([loanSaga()])
}

