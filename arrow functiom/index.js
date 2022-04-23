/*function gretting(message){
    return alert(`${message} everyone`);
}
*/



/*let gretting = message => alert(`${message} everyone`);

gretting('Good morning....');  
*/

let createBlog =(title, body) =>{
    if(!title){
        throw new Error('A title is required');
    }

    if(!body){
        throw new Error('Body cant be empty');
    }

return alert(`${title} - ${body}`);
};

createBlog('Blog title', 'Blog body');