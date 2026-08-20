const icons=["🛡️","📶","🍛","🏏","🚌","🎉"];

async function loadFeatures(){
  const res=await fetch("/api/features");
  const data=await res.json();
  document.getElementById("featureGrid").innerHTML=data.map((x,i)=>`
    <article class="feature"><div class="feature-icon">${icons[i]}</div><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("");
}
async function loadGallery(){
  const res=await fetch("/api/gallery");
  const data=await res.json();
  document.getElementById("galleryGrid").innerHTML=data.map(x=>`
    <article class="gallery-item"><img src="${x.image}" alt="${x.title}" loading="lazy"><div>${x.title}</div></article>`).join("");
}

async function loadCelebrations(){
  const res=await fetch("/api/celebrations");
  const data=await res.json();
  document.getElementById("celebrationGrid").innerHTML=data.map(x=>`
    <article class="celebration-card"><img src="${x.image}" alt="${x.title}" loading="lazy"><div><span>🎉</span><b>${x.title}</b><small>Hostel celebration memories</small></div></article>`).join("");
}

async function loadMess(){
  const res=await fetch("/api/mess");
  const data=await res.json();
  document.getElementById("messGrid").innerHTML=data.map(x=>`
    <article class="mess-card"><img src="${x.image}" alt="${x.title}" loading="lazy"><div><span>🍽️</span>${x.title}</div></article>`).join("");
}
document.getElementById("contactForm").addEventListener("submit",async(e)=>{
  e.preventDefault();
  const msg=document.getElementById("formMsg");
  const payload={name:name.value,email:email.value,message:message.value};
  try{
    const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
    const data=await res.json();
    msg.textContent=data.message;
    if(data.success)e.target.reset(); else msg.classList.add("error");
  }catch(err){msg.textContent="Server is not running. Start it with npm start.";msg.classList.add("error")}
});
loadFeatures();loadGallery();loadMess();loadCelebrations();