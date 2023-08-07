var userNameInput=document.getElementById("firstName") //input kolo
var userEmailInput=document.getElementById("emailName")//input kolo
var userPasswordInput=document.getElementById("passwordNumber")//input kolo     
var userContainer=[];

if(localStorage.getItem('users')==null){
    userContainer=[];
}else{
   
   userContainer=JSON.parse(localStorage.getItem('users'))
}

    function signUp(){
        if(userNameValidation()==true&&emailNameValidation()==true&&passwordNumberValidation()==true &&isExit()==false)
        {
            var user={
                name:userNameInput.value,  //abdelrhman
                email:userEmailInput.value,  //abdelrhman@gmail.com
                password:userPasswordInput.value  //12345
            };
            console.log(user);
            userContainer.push(user);
            console.log(user);  //array of object
            localStorage.setItem("users",JSON.stringify(userContainer))
            var confirmMsg=document.getElementById('confirmMsg')
            confirmMsg.classList.replace("d-none","d-block")
            var tryAgainMsg=document.getElementById("tryAgainMsg")
            tryAgainMsg.classList.replace("d-block","d-none")
        }else{
            var tryAgainMsg=document.getElementById("tryAgainMsg")
            tryAgainMsg.classList.replace("d-none","d-block")
            console.log(user);
        }

        
        
    }

    function userNameValidation(){
        var userNameAlert=document.getElementById("usernameAlert")

        var regex =/^[A-Z][a-z]{2,}(\s?[A-Za-z]{3,})?$/
        if(regex.test(userNameInput.value)==true&&userNameInput.value!="")
        {
            userNameInput.classList.add("is-valid")
            userNameInput.classList.remove("is-invalid")
            userNameAlert.classList.replace("d-block","d-none")
            return true;
        }else{
            userNameInput.classList.add("is-invalid") 
            userNameInput.classList.remove("is-valid") 
            userNameAlert.classList.replace("d-none","d-block")
            return false;
        }
    }

    function emailNameValidation(){
        var userEmailAlert=document.getElementById("userEmailAlert")
        var regex=/@[a-z]{5,10}(\.com)$/
        if(regex.test(userEmailInput.value)==true&&userEmailInput.value!="")
        {
            userEmailInput.classList.add("is-valid")
            userEmailInput.classList.remove("is-invalid")
            userEmailAlert.classList.replace("d-block","d-none")
            return true;
        } else{
            userEmailInput.classList.add("is-invalid")
            userEmailInput.classList.remove("is-valid")
            userEmailAlert.classList.replace("d-none","d-block")
            return false;
        }
    }

    function passwordNumberValidation(){
        var userPasswordAlert=document.getElementById("userPasswordAlert")
        var regex=/^.{5,15}$/ 
        if(regex.test(userPasswordInput.value)==true && userPasswordInput.value!="")
        {
            userPasswordInput.classList.add("is-valid")
            userPasswordInput.classList.remove("is-invalid")
            userPasswordAlert.classList.replace("d-block","d-none")
            return true;    
        } else {
            userPasswordInput.classList.add("is-invalid")
            userPasswordInput.classList.remove("is-valid")
            userPasswordAlert.classList.replace("d-none","d-block")
            return false;
        }
    }


    function isExit(){
        var accountExistMsg =document.getElementById("accountExistMsg")

        for(var i=0;i<userContainer.length;i++){
            if(userContainer[i].email.toLowerCase()==userEmailInput.value.toLowerCase()){
                userEmailInput.classList.remove("is-valid");
                accountExistMsg.classList.replace("d-none","d-block");
                return true;
            }
        }
        return false;
    }

    var userName=localStorage.getItem("sessionUserName")

    function login(){
        var loginEmail=document.getElementById("loginEmail")
        var loginpassword=document.getElementById("loginpassword")
        var fillMsg=document.getElementById("fillMsg")
        var wrongMsg=document.getElementById("wrongMsg")
        var loginBtn=document.getElementById("loginBtn")


        if(loginEmail.value==""||loginpassword.value==""){
            fillMsg.classList.replace("d-none","d-block")
            return false;
        }
        for(var i=0;i<userContainer.length;i++){
            if(userContainer[i].email.toLowerCase()==loginEmail.value.toLowerCase()&&userContainer[i].password==loginpassword.value)
            {
                localStorage.setItem("sessionUserName",userContainer[i].name)   
                loginBtn.setAttribute("href","welcome.html")
                fillMsg.classList.replace("d-block","d-none")
                wrongMsg.classList.replace("d-block","d-none")
            }
           
        }
        
        {
            wrongMsg.classList.replace("d-none","d-block")
            fillMsg.classList.replace("d-block","d-none")
        }
    }

    function displayName(){
        document.getElementById("username").innerHTML="welcome "+ userName;
    }

    function logout(){
        localStorage.removeItem("sessionUserName")
    }