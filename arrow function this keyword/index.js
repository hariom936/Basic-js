let india = {
    // add property
    mountains : ['Everest','Fish Tail','Nanital'],
    // add method
    printWithDash : function(){
        setTimeout(() =>  console.log(this.mountains.join(" - ")), 3000 )
    }
};

alert(india.mountains);