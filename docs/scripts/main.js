const UpdateMyAge =()=>{
    const date = new Date();

    const age = date.getFullYear() - 2003 - (date.getMonth() == 11 ? (date.getDate() - 29 < 0) : 1);

    document.querySelectorAll('.my-age').forEach(e=>e.innerText = age);

    requestAnimationFrame(UpdateMyAge);
}

document.addEventListener('DOMContentLoaded', ()=>{
    UpdateMyAge();

    setTimeout(()=>document.getElementById('__making-now').style.opacity = 0, 1000);
    setTimeout(()=>document.getElementById('__making-now').style.display = 'none', 3500);
});