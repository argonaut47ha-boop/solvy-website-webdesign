// Lead forms: set FORM_ENDPOINT to a Formspree/Basin/Netlify URL. Until then, falls back to mailto.
const FORM_ENDPOINT = "";
const FALLBACK_EMAIL = "hello@example.com";
document.querySelectorAll("form[data-lead]").forEach(f=>{
  f.addEventListener("submit",async e=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(f));
    const ok=f.parentElement.querySelector(".ok");
    try{
      if(FORM_ENDPOINT){
        const r=await fetch(FORM_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(data)});
        if(!r.ok)throw new Error();
      }else{
        const body=Object.entries(data).map(([k,v])=>k+": "+v).join("\n");
        location.href="mailto:"+FALLBACK_EMAIL+"?subject="+encodeURIComponent(f.dataset.lead)+"&body="+encodeURIComponent(body);
      }
      f.style.display="none";ok.style.display="block";
    }catch{alert("Something went wrong. Please email "+FALLBACK_EMAIL);}
  });
});
