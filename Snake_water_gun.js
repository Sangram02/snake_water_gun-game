function game(){
    let user = prompt("choose b/w S,W or G");
let comp = Math.floor(Math.random()*3);
let ans = {
    0:"S",
    1:"W",
    2:"G"
}
let match =(user,ans) =>{
    if(user == ans[comp]){
        return "draw";
    }
    else if(user == "S" && ans[comp] == "W"){
        return "User is Winner"
    }
    else if(user == "W" && ans[comp] == "S"){
        return "Comp is Winner"
    }
    else if(user == "G" && ans[comp] == "S"){
        return "User is Winner"
    }
    else if(user == "S" && ans[comp] == "G"){
        return "Comp is Winner"
    }
    else if(user == "G" && ans[comp] == "W"){
        return "Comp is Winner"
    }
    else if(user == "W" && ans[comp] == "G"){
        return "User is Winner"
    }
}
let result = match(user,ans);
alert(` user: ${user} \n computer: ${ans[comp]} \n result: ${result}`)
// document.write(`computer: ${ans[comp]} \n`)
// document.write(`result: ${result} is winner`)
}