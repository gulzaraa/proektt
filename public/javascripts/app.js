async function send_f()
{
    let ady = document.getElementsByName("name")[0].value;
    let familya = document.querySelector("[name=surname]").value;
    let req = await fetch("/", {
        method: "POST",
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name:ady, surname:familya})
    })
}
let ans = await req.text();
console.log(ans);