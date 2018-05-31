

export function addDelTask(dispatch) {
  console.log("Appel de addDelTask");
  return {
    addTask: (text) => dispatch({type: "ADDTASK", label: text}),
    delTask: (indexId) => dispatch({type: "DELTASK", indexId: indexId}),
  }
}
