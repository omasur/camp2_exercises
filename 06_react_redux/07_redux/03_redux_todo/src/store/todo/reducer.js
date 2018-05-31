let lastId=1;

const initialValue = {
  taskText: "Enter your text",    //plus utilisé
  tasks: [],
}

function taskReducer(state = initialValue, action) {
  switch (action.type) {
  case 'ADDTASK':
    //Lire le dernier id et faire +1
    console.log("Action=",action);
    const newTask = {
      id: lastId,
      label: action.label
    };
    lastId++;
    return {
      ...state,
      tasks: [...state.tasks ,newTask]
    };
  case 'DELTASK':
    console.log("Attention, je vais supprimer l'id ",action.indexId);
    const newTaskArray = state.tasks.filter((element, index) => index !== action.indexId)
    // const newTaskArray = state.tasks.filter((element) => element.id !== action.Id)
    return {
      ...state,
      tasks: newTaskArray
    }

  default:
    return state
  }
}

export default taskReducer;
