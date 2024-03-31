var username="";
let restraurant=[
    {id:"sijiminfuwaibaiduqiao",chineseid:"四季民福（外白渡桥）",score:[0,0,0,0,0,0,0],average:0,location:"虹口区吴淞路130号城控股大厦辅楼彩虹北三层"},
    {id:"qingniangongshebinguguangchang",chineseid:"青年公社（缤谷广场）",score:[0,0,0,0,0,0,0],average:0,location:"长宁区天山路341号缤谷广场西座4楼"},
    {id:"nanmenshuanrou",chineseid:"南门涮肉",score:[0,0,0,0,0,0,0],average:0,location:"？"}
]

for(var i=0;i<restraurant.length;i++){
    restraurant[i].score[0]=parseInt(localStorage.getItem("tlx"+restraurant[i].id));
    restraurant[i].score[1]=parseInt(localStorage.getItem("admin"+restraurant[i].id));
    restraurant[i].score[2]=parseInt(localStorage.getItem("pkq"+restraurant[i].id));
    restraurant[i].score[3]=parseInt(localStorage.getItem("kb"+restraurant[i].id));
    restraurant[i].score[4]=parseInt(localStorage.getItem("temper"+restraurant[i].id));
    restraurant[i].score[5]=parseInt(localStorage.getItem("lbw"+restraurant[i].id));
    restraurant[i].score[6]=parseInt(localStorage.getItem("xln"+restraurant[i].id));
    restraurant[i].average=parseInt(localStorage.getItem("average"+restraurant[i].id));
}
restraurant.sort(function(a,b){
                
    if(a.average==b.average){
    return b.id - a.id;
    }
    return b.average - a.average;
})


function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
	}
	return "";
}
if(getCookie("username")){
  isLogin=true;
}
username=getCookie("username");
function headOutput(){
    var para = document.createElement("p");
    para.textContent = "欢迎:" + username; 
    document.getElementById("content").appendChild(para); 
}

function bodyOutput1(){
    var title1 = document.createElement("span");
    title1.className="title";
    title1.textContent = restraurant[0].chineseid; 
    document.getElementById("title1").appendChild(title1); 
    var s=0;
    var len=7;
    for(i=0;i<7;i++){
        if(restraurant[0].score[i]) s+=restraurant[0].score[i];  
        else len--;
    }
    s/=len;
    s = s.toFixed(1);
    localStorage.setItem("average"+restraurant[0].id, s);
    var score = document.createElement("span");
    score.textContent = "评分： " + s; 
    document.getElementById("score1").appendChild(score); 
    var l = document.createElement("span");
    l.textContent = "地理位置： " + restraurant[0].location; 
    document.getElementById("location1").appendChild(l); 
}
function reScore1(){
    var score=document.getElementById("score_field1").value;
	const dialog = document.getElementById('dialog-success');
    const cancelBtn = document.getElementById('cancelBtn');
    dialog.showModal();
    localStorage.setItem(username+restraurant[0].id, score);
    cancelBtn.addEventListener('click', () => {
      dialog.close();
    });
}

function bodyOutput2(){
    var title1 = document.createElement("span");
    title1.className="title";
    title1.textContent = restraurant[1].chineseid; 
    document.getElementById("title2").appendChild(title1); 
    var s=0;
    var len=7;
    for(i=0;i<7;i++){
        if(restraurant[1].score[i]) s+=restraurant[1].score[i];  
        else len--;
    }
    s/=len;
    s = s.toFixed(1);
    localStorage.setItem("average"+restraurant[1].id, s);
    var score = document.createElement("span");
    score.textContent = "评分： " + s; 
    document.getElementById("score2").appendChild(score); 
    var l = document.createElement("span");
    l.textContent = "地理位置： " + restraurant[1].location; 
    document.getElementById("location2").appendChild(l); 
}
function reScore2(){
    var score=document.getElementById("score_field2").value;
	const dialog = document.getElementById('dialog-success');
    const cancelBtn = document.getElementById('cancelBtn');
    dialog.showModal();
    localStorage.setItem(username+restraurant[1].id, score);
    cancelBtn.addEventListener('click', () => {
      dialog.close();
    });
}

function bodyOutput3(){
    var title1 = document.createElement("span");
    title1.className="title";
    title1.textContent = restraurant[2].chineseid; 
    document.getElementById("title3").appendChild(title1); 
    var s=0;
    var len=7;
    for(i=0;i<7;i++){
        if(restraurant[2].score[i]) s+=restraurant[2].score[i];  
        else len--;
    }
    s/=len;
    s = s.toFixed(1);
    localStorage.setItem("average"+restraurant[2].id, s);
    var score = document.createElement("span");
    score.textContent = "评分： " + s; 
    document.getElementById("score3").appendChild(score); 
    var l = document.createElement("span");
    l.textContent = "地理位置： " + restraurant[2].location; 
    document.getElementById("location3").appendChild(l); 
}
function reScore3(){
    var score=document.getElementById("score_field3").value;
	const dialog = document.getElementById('dialog-success');
    const cancelBtn = document.getElementById('cancelBtn');
    dialog.showModal();
    localStorage.setItem(username+restraurant[2].id, score);
    cancelBtn.addEventListener('click', () => {
      dialog.close();
    });
}