// main_logo
const main_logo = document.getElementById('main_logo');

// btns
const yms_btn = document.getElementById('toYms');
const ksy_btn = document.getElementById('toKsy');
const khh_btn = document.getElementById('toKhh');
const psy_btn = document.getElementById('toPsy');
const ljh_btn = document.getElementById('toLjh');
const cjy_btn = document.getElementById('toCjy');

// tmi sections
const default_tmi = document.getElementById('default');
const yms_tmi = document.getElementById('yms');
const ksy_tmi = document.getElementById('ksy');
const khh_tmi = document.getElementById('khh');
const psy_tmi = document.getElementById('psy');
const ljh_tmi = document.getElementById('ljh');
const cjy_tmi = document.getElementById('cjy');

// effects
main_logo.onclick = function(){
    default_tmi.style.display='block';
    ksy_tmi.style.display='none';
    khh_tmi.style.display='none';
    psy_tmi.style.display='none';
    ljh_tmi.style.display='none';
    cjy_tmi.style.display='none';
    yms_tmi.style.display='none';
}

yms_btn.onclick = function(){
    default_tmi.style.display='none';
    ksy_tmi.style.display='none';
    khh_tmi.style.display='none';
    psy_tmi.style.display='none';
    ljh_tmi.style.display='none';
    cjy_tmi.style.display='none';
    yms_tmi.style.display='flex';
}

ksy_btn.onclick = function(){
    default_tmi.style.display='none';
    yms_tmi.style.display='none';
    khh_tmi.style.display='none';
    psy_tmi.style.display='none';
    ljh_tmi.style.display='none';
    cjy_tmi.style.display='none';
    ksy_tmi.style.display='block';
}

khh_btn.onclick = function(){
    default_tmi.style.display='none';
    yms_tmi.style.display='none';
    ksy_tmi.style.display='none';
    psy_tmi.style.display='none';
    ljh_tmi.style.display='none';
    cjy_tmi.style.display='none';
    khh_tmi.style.display='flex';
}

psy_btn.onclick = function(){
    default_tmi.style.display='none';
    ksy_tmi.style.display='none';
    khh_tmi.style.display='none';
    yms_tmi.style.display='none';
    ljh_tmi.style.display='none';
    cjy_tmi.style.display='none';
    psy_tmi.style.display='flex';
}

ljh_btn.onclick = function(){
    default_tmi.style.display='none';
    ksy_tmi.style.display='none';
    khh_tmi.style.display='none';
    psy_tmi.style.display='none';
    yms_tmi.style.display='none';
    cjy_tmi.style.display='none';
    ljh_tmi.style.display='flex';
}

cjy_btn.onclick = function(){
    default_tmi.style.display='none';
    ksy_tmi.style.display='none';
    khh_tmi.style.display='none';
    psy_tmi.style.display='none';
    ljh_tmi.style.display='none';
    yms_tmi.style.display='none';
    cjy_tmi.style.display='block';
}

