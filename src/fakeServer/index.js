
export const postTaskToServer = (req) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          // assigning a unique number to the id
          let id =  new Date().valueOf();

          let task = {
            id: id,
            title: req.title,
            text: req.text
          }

          // Saving to localStorage
          localStorage.setItem(id, JSON.stringify(task));

          resolve(id);
      }, 100);
  });
}

export const getTasksFromServer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let taskArr = [];
            // getting tasks from localstorage
            for (let id in localStorage){
              if (localStorage.hasOwnProperty(id)){
                let task = JSON.parse(localStorage[id]);
                taskArr.push(task);
              }
            }

            resolve(taskArr);
        }, 100);
    });
}

export const deleteTaskFromServer = (req) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        // loking for task in localstorage
          if (!localStorage[req.id]){
            reject("task not found")
          } else {
            localStorage.removeItem(req.id)
            resolve("deleted from server");
          }

      }, 100);
  });
}

export const editTaskOnServer = (req) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          // loking for task in localstorage
          if (!localStorage[req.id]){
            reject("task not found on server")
          } else {
            // Fetching, editing and saving task to localstorage
            let task = JSON.parse(localStorage.getItem(req.id));
            task.title = req.title;
            task.text = req.text;
            localStorage.setItem(req.id, JSON.stringify(task))

            resolve("edited on server");
          }
      }, 100);
  });
}
