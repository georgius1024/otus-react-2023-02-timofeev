import { call, put, take } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";

import * as actions from "@/store/actions";
import saga from "@/store/saga";

describe("Saga tests", () => {
  it("restore works as expected", async () => {
    return expectSaga(saga)
      .dispatch({ type: actions.RESTORE_STATE_ACTION })
      .put({
        type: "store/auth/restore",
      })
      .run();
  });
  it("store works as expected", async () => {
    return expectSaga(saga)
      .dispatch({ type: "store/auth/logout" })
      .put({
        type: "store/auth/store",
      })
      .run();
  });
});
