/*
seqPromise runs the Promise-returning func on each item in arr waiting
for each iteration to resolve before calling the next. args in an object
with any extra arguments you want to use in func.
  The result of each iteration is also passed to the next. 
*/
var seqPromise = function(arr,  func, args) {
    return arr.reduce(function(promise, item) {
        return promise.then(function(result) {
            // can use result of previous call here (outside func)
            return func(item, args, result);
        });        
    }, Promise.resolve());
}

//--------------------------------------------------------------------
// USAGE EXAMPLE
// run this file from node commandline:
//       node> node seqPromise.js
//--------------------------------------------------------------------
// This is the function that you wish to iterate over an array of items
// params:
//   @item - could be anything (will be a single item from the array passed to seqPromise)
//   @args - an object of args that will be passed to each iteration of the call
//   @result - the result of the previous iteration promise reolution
var myPromisingFunc = function(item, args, result){
  console.log("result of previous call is " + result);
  return new Promise(function(resolve, reject){
    setTimeout(function(){ // some time consuming task (get/post/fileread/etc) 
      console.log("item is " + item + "args.a is, as always, " + args.a);
      resolve(item+10);
    }, 1000);
  });
}

 
seqPromise([1,2,3],  myPromisingFunc, {"a" : "foo"}).then(function(resp){
  console.log("done, with result of last call = " + resp);
});