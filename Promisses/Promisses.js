function doSomethingAsync() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Operation completed!");
        resolve();
      }, 1000);
    });
  }
  
  doSomethingAsync()
    .then(() => {
      console.log("Promise resolved!");
    })
    .catch(() => {
      console.error("Promise rejected!");
    });
  console.log("Waiting for operation...");
  