// spread operator is (...)three dot's

/*var mountains = ['Everest', 'Fish TAil', 'India'];
var mountainsFromIndia = ['Fuji'];

var allMountains = [ ...mountains, ...mountainsFromIndia];
console.log(allMountains)
*/

/*var day = {
    breakfast: 'toast with tea',
    lunch: 'rice with chicken currry'

}
var night={
    dinner: 'roti with  chicken',
    bed:'sleep'
}

var picnic = {...day,...night};
console.log(picnic);
*/

//rest
var rivers =['Ganga', 'Yamuna', 'Godvari'];
var [first, ...rest] = rivers

//console.log(first); o/p = Ganga
console.log(rest); // remain data