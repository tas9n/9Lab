const pageScroll = ev =>{
    ev.preventDefault();
    const targetId = ev.target.href.slice(ev.target.href.indexOf('#') + 1);
    const target = document.getElementById(targetId);
    
    const clientRect = target.getBoundingClientRect();
    const py = window.pageYOffset + clientRect.top - 64;   //headerを考慮して-64

    window.scroll({ top: py, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('.scroll').forEach(e=>{
        e.addEventListener('click', ev=>{
            pageScroll(ev)
        }, null);
    });
}, null);