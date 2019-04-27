function courseAction(state, action) {
  switch (action) {
    case "CREATE_COURSE":
      return [...state, { ...action.course }];
    default:
      return;
  }
}
