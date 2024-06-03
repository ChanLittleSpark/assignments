(function(){

var name=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for(var names=0;names<name.length;names++){
    var firstCharacter=name[names].charAt(0).toLowerCase();
    if(firstCharacter==='j')
        {
            tellGoodBye(name[names]);
        }
        else{
            helloSpeaker(name[names]);
        }
}


})()
