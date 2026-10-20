(() => {
  const weddingDate = new Date('2027-01-18T10:30:00+05:30');
  const fields = {days:document.getElementById('days'),hours:document.getElementById('hours'),minutes:document.getElementById('minutes'),seconds:document.getElementById('seconds')};
  function updateCountdown(){
    const diff = weddingDate.getTime() - Date.now();
    if(diff <= 0){ Object.values(fields).forEach(el=>el.textContent='00'); document.querySelector('.countdown-note').textContent='Today is the beginning of forever.'; return; }
    const days=Math.floor(diff/86400000), hours=Math.floor(diff%86400000/3600000), minutes=Math.floor(diff%3600000/60000), seconds=Math.floor(diff%60000/1000);
    fields.days.textContent=String(days).padStart(2,'0');fields.hours.textContent=String(hours).padStart(2,'0');fields.minutes.textContent=String(minutes).padStart(2,'0');fields.seconds.textContent=String(seconds).padStart(2,'0');
  }
  updateCountdown(); setInterval(updateCountdown,1000);

  const events = {
    reception:{title:'Wedding Reception — Anushka S A & Shajin Jose J',start:'20270117T113000Z',location:'CSI Community Hall, Vadakkankarai',url:'https://share.google/XEwzfKbUgJ9EERrSN'},
    marriage:{title:'Marriage — Anushka S A & Shajin Jose J',start:'20270118T050000Z',location:'Vadakankarai C.S.I Church',url:'https://share.google/KHfqddO5Ts0ts465o'}
  };
  // The end times are provisional calendar durations because no end times were supplied.
  function downloadCalendar(key){
    const e=events[key];
    const escapeICS=s=>s.replace(/\\/g,'\\\\').replace(/,/g,'\\,').replace(/;/g,'\\;').replace(/\n/g,'\\n');
    const stamp=new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
    const content=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Wedding Invitation//Anushka and Shajin//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH','BEGIN:VEVENT',`UID:${key}-anushka-shajin-2027@wedding-invitation`,`DTSTAMP:${stamp}`,`DTSTART:${e.start}`, `SUMMARY:${escapeICS(e.title)}`,`LOCATION:${escapeICS(e.location)}`,`DESCRIPTION:${escapeICS('Wedding invitation. Venue map: '+e.url)}`,'URL:'+e.url,'END:VEVENT','END:VCALENDAR'].join('\r\n');
    const blob=new Blob([content],{type:'text/calendar;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`${key}-anushka-shajin.ics`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);showToast('Calendar event downloaded. Please check the event details after importing.');
  }
  document.querySelectorAll('[data-event]').forEach(btn=>btn.addEventListener('click',()=>downloadCalendar(btn.dataset.event)));
  const audio=document.getElementById('weddingMusic'), musicToggle=document.getElementById('musicToggle'), musicLabel=document.getElementById('musicLabel');
  musicToggle.addEventListener('click',async()=>{
    if(audio.paused){try{await audio.play();musicToggle.setAttribute('aria-pressed','true');musicLabel.textContent='Pause music';}catch(e){showToast('Add your licensed instrumental audio as music.mp3 in the project folder to enable music.');}}else{audio.pause();musicToggle.setAttribute('aria-pressed','false');musicLabel.textContent='Play music';}});
  let toastTimer;function showToast(message){const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),4200);}
  // Smooth reveal for content sections as they enter the viewport.
  const revealTargets=document.querySelectorAll('.section-heading,.event-card,.qr-card,.blessing-frame,.closing-ornament');
  revealTargets.forEach(el=>el.classList.add('observe-reveal'));
  if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}}),{threshold:.12});revealTargets.forEach(el=>observer.observe(el));}
})();
