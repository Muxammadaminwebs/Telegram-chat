$("#registerForm")?.addEventListener("submit", (e) => {
    let name = $("#registerNameInput")?.value,
        userName = $("#registerUserNameInput")?.value,
        password = $("#registerPasswordInput")?.valu;
    
    e.preventDefault();
    let data = {
        name: name,
        userName: userName,
        password: password,


    };
    async function fetchChat() {
        let inform = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        let res = await inform.json()
        if (res?.status == 200) {
            localStorage.setItem('userName', res.uuid)
            localStorage.setItem('name', data.name)
            window.location = '/'
        } else {
            alert(" ushbu username foydalanilmoqda")
        }
    }
    fetchChat()
});

$("#formLogin").addEventListener("submit", (e) => {
    e.preventDefault()
      let userName = userNameLogin.value,
        password = passwordLogin.value;
    fetchChat()
    async function fetchChat() {

        let data = {
            userName: userName,
            password: password,
        };
        let inform = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let res = await datas.json();
        console.log(res);
        if (res?.status == 200) {
            localStorage.setItem("userName", res.uuid);
            localStorage.setItem("name", res.name);
            window.location = "/";
        } else {
            alert("username yoki password xato bo'lishi mumkin tekshirib qaytadan tering")
        }
    }
     
})

