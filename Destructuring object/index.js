/*let thingTodo ={
    morning: 'Exercise',
    afternoon: 'Work',
    evening: 'Code',
    night: ['Sleep','Dream']
};

let {morning, afternoon, night} = thingTodo;

console.log(morning, ' - ', afternoon+ ' - ' +night);
*/

/*let unistd = student =>{
    let {name, university} = student;
    console.log(`${name} from ${university}`);
    //console.log(`${student.name} from ${student.university}`);
   
};

unistd({
    name: 'Hariom ',
    university: 'BBD Lucknow'
});
*/
let unistd = ({name, university}) =>{
  
    console.log(`${name} from ${university}`);
    //console.log(`${student.name} from ${student.university}`);
   
};

unistd({
    name: 'Hariom ',
    university: 'BBD Lucknow'
});