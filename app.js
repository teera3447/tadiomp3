var songs = [

{
title:"เพลงลูกทุ่ง",
category:"ลูกทุ่ง",
url:"media/song1.mp3",
downloads:0
}

];

function renderSongs(){

var html = "";

for(var i=0;i<songs.length;i++){

html +=
'<div class="song">' +
'<b>' + songs[i].title + '</b><br>' +
'หมวด: ' + songs[i].category + '<br>' +
'<a href="' + songs[i].url + '">ดาวน์โหลด</a>' +
'</div>';

}

document.getElementById("songs").innerHTML = html;

}

renderSongs();
