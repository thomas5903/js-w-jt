export default function (model){
  let newArr = [];

  model.forEach(function(obj){
    obj.changePercent = Number.parseFloat(obj.changePercent * 100).toFixed(2);
    newArr.push(obj);
  });
  
  return newArr;
}