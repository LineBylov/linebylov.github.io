let attempt = 3;

function memberLogin(){
    let userMember = document.getElementById('memberName').value;
    let codeMember = document.getElementById('memberCode').value;

    if (userMember == "Ridder587" &&  codeMember == "Ridderranke"){
        window.location = "forum.html";
        return false;
    }
    else if(userMember == "Shorty44" && codeMember == "Wazzup500" ){
        window.location = "forum.html";
        return false;
    }
    else{
        attempt--;
        alert('forkert brugernavn eller kode, du har '+attempt+' forsøg tilbage.');
        
        if (attempt == 0){
            document.getElementById('memberName').disabled = true;
            document.getElementById('memberCode').disabled = true;
            document.getElementById('memberBtn').disabled = true;
            return false;
        }
    }
}


let adminAttempt =3;

function adminLogin(){
    let userAdmin = document.getElementById('adminName').value;
    let codeAdmin = document.getElementById('adminCode').value;

    if(userAdmin == "GailForwoman" && codeAdmin == "lifeNews465"){
        window.location = "admin.html";
        return false;
    }
    else if(userAdmin = "Rayman43" && codeAdmin == "RayGay773"){
        window.location = "admin.html";
        return false;
    }
    else{
        adminAttempt--;
        alert('forkert brugernavn eller kode, du har '+adminAttempt+' forsøg tilbage.');

        if(attempt == 0){
            document.getElementById('adminName').disabled = true;
            document.getElementById('adminCode').dissabled = true;
            document.getElementById('adminBtn').disabled = true;
            return false;
        }
    }
}