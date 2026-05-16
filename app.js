let songs = JSON.parse(localStorage.getItem("songs")) || [

{
title:"เพลงตัวอย่าง MP3",
category:"ลูกทุ่ง",
url:"media/song1.mp3",
downloads:0
},

{
title:"เพลงตัวอย่าง M4A",
category:"สตริง",
url:"media/song2.m4a",
downloads:0
},

{
title:"วิดีโอ 3GP",
category:"นักร้อง",
url:"media/video.3gp",
downloads:0
}

];

function renderSongs(){

let search =
document.getElementById("search")
.value.toLowerCase();

let category =
document.getElementById("category")
.value;

let html = "";

songs.forEach((song,index)=>{

if(
song.title.toLowerCase().includes(search)
){

if(
category=="all" ||
song.category==category
){

html += `
<div class="song">

<b>${song.title}</b><br>

หมวด:
${song.category}<br>

ดาวน์โหลด:
${song.downloads}<br>

<a class="download"
href="${song.url}"
download
onclick="countDownload(${index})">

ดาวน์โหลด

</a>

</div>
`;

}

}

});

document.getElementById("songs")
.innerHTML = html;

}

function countDownload(index){

songs[index].downloads++;

localStorage.setItem(
"songs",
JSON.stringify(songs)
);

}

function uploadSong(){

let title =
document.getElementById("title").value;

let category =
document.getElementById("uploadCategory").value;

let file =
document.getElementById("file").files[0];

if(!file){
alert("เลือกไฟล์");
return;
}

let url = URL.createObjectURL(file);

songs.push({

title:title,
category:category,
url:url,
downloads:0

});

localStorage.setItem(
"songs",
JSON.stringify(songs)
);

renderSongs();

alert("อัปโหลดแล้ว");

}

document.getElementById("search")
.addEventListener("keyup",renderSongs);

document.getElementById("category")
.addEventListener("change",renderSongs);

renderSongs();
