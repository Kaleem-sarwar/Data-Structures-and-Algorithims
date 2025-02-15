//fibonacci
//0,1,1,2,3,5,8,13,21,34 ...
let pre = 0; // store first
let next = 1; // store 2nd var
let sum; // store sum of pre and next  pre + next = sum
// sum+=
for (let i = 0; i < 8; i++) {
  sum = pre + next; // sum = 0 + 1 = 1
  pre = next;
  next = sum;
  console.log(sum);
}
