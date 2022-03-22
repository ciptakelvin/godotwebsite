
var karya_viewer=document.getElementById("karya-viewer");
for (let i=creations.length-1;i>creations.length-5;i--){
  karya_viewer.innerHTML+="<a href='"+creations[i].link+"'><img src='"+creations[i].image+"'></img></a>";
}
