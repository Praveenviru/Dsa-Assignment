function taskManagment(){
    let arr=["planning a topic","Seaching ","Gathering info","Preparing","Creating","Creating slides","Uploading pics","presenting"];
    arr.shift();
    arr.unshift("Initiating");
    arr.unshift("Planning");
    arr[arr.length-1]="implement"
    console.log(arr);
    
  }
  taskManagment()