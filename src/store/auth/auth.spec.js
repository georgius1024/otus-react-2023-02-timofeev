import reducers from "@/store/auth/reducers";

describe("auth slice", () => {
  it("login", () => {
    const state = { user: null };
    reducers.login(state, { payload: { uid: 101 } });
    expect(state).toHaveProperty("user.uid", 101);
  });
  it("logout", () => {
    const state = { user: { uid: 101 } };
    reducers.logout(state);
    expect(state).not.toHaveProperty("user.uid");
  });
  it("store", () => {
    const state = { user: { uid: 101 } };
    global.localStorage = {};
    reducers.store(state);
    expect(global.localStorage).toHaveProperty("store/auth");
  });
  it("store", () => {
    const state = { user: null };
    global.localStorage = {
      "store/auth": JSON.stringify({ user: { uid: 101 } }),
    };
    reducers.restore(state);
    expect(state).not.toHaveProperty("user.uid");
  });
});
