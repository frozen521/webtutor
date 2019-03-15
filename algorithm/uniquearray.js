/**  
 * @Author: yanni
 * @Description:
 * @Date: 15:04 2019/3/15
 * @Modified By:
 * @Params:
 */  

function uniqueset(arr) {
  return Array.from([...new Set(arr)]);
}


function uniqueobject(arr) {
  let obj={},len=arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] in obj) {
          obj[arr[i]]++;
        } else {
          obj[arr[i]]=10;
        }
    }
    return Object.keys()
}
