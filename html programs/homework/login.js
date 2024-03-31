
var isLogin=false;
var username="";


function setCookie(cname,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime()+(exdays*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname+"="+cvalue+"; "+expires;
}
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



function checkLogin() { 
	var name=document.getElementById("name_field").value;
	var pass=document.getElementById("password_field").value;
	if ((name==="lbw" && pass==="e10adc3949ba59abbe56e057f20f883e")||(name==="xln" && pass==="e10adc3949ba59abbe56e057f20f883e")||(name==="kb" && pass==="e10adc3949ba59abbe56e057f20f883e")
  ||(name==="tlx" && pass==="e10adc3949ba59abbe56e057f20f883e")||(name==="pkq" && pass==="e10adc3949ba59abbe56e057f20f883e")||(name==="temper" && pass==="e10adc3949ba59abbe56e057f20f883e")||(name==="admin" && pass==="e10adc3949ba59abbe56e057f20f883e")) {  
		const dialog = document.getElementById('dialog-success');
    const cancelBtn = document.getElementById('cancelBtn');
    const confirmBtn = document.getElementById('confirmBtn');
    dialog.showModal();
    cancelBtn.addEventListener('click', () => {
      dialog.close();
    });
    confirmBtn.addEventListener('click', () => {
      dialog.close();
      isLogin=true;
      setCookie("username",name,30);
      window.location.href="home.html"; 
    });
	}
	else{
		const dialog = document.getElementById('dialog-failed');
    const confirmBtn = document.getElementById('confirmBtn');
    dialog.showModal();
    confirmBtn.addEventListener('click', () => {
      dialog.close();
    });
	}
}
function headOutput(){
  if (isLogin ===  false) {
    var button = document.createElement("button");
    button.textContent = "登录";
    button.className = "nes-btn";
    button.onclick = function() {
      window.location.href = "login.html";
    };
    document.getElementById("content").appendChild(button);
    
  } else {
    var para = document.createElement("p");
    para.textContent = "欢迎:" + username; 
    document.getElementById("content").appendChild(para); 
  }
}

function helpOutput(){
  if (isLogin ===  false) {
    var para = document.createElement("span");
    para.className="nes-text is-success";
    para.textContent = "点击左侧按钮即可查询对应菜系美食 点击上方登录按钮登录"; 
    document.getElementById("help").appendChild(para); 
    
  
  } else {
    var para = document.createElement("span");
    para.className="nes-text is-success";
    para.textContent = "点击左侧按钮即可查询对应菜系美食"; 
    document.getElementById("help").appendChild(para); 
  }
}


function gangyueOutput(){
  if (isLogin ===  false) {
    const dialog = document.getElementById('dialog-islogin');
    const confirmBtn = document.getElementById('confirmBtn');
    dialog.showModal();
    confirmBtn.addEventListener('click', () => {
      dialog.close();
    });
  } else {
    window.location.href = "/html programs/homework/region/gangyue.html";
  }
}

function jiangzhehuOutput(){
  if (isLogin ===  false) {
    const dialog = document.getElementById('dialog-islogin');
    const confirmBtn = document.getElementById('confirmBtn');
    dialog.showModal();
    confirmBtn.addEventListener('click', () => {
      dialog.close();
    });
  } else {
    window.location.href = "/html programs/homework/region/jiangzhehu.html";
  }
}

function chuanxiangOutput(){
  if (isLogin ===  false) {
    const dialog = document.getElementById('dialog-islogin');
    const confirmBtn = document.getElementById('confirmBtn');
    dialog.showModal();
    confirmBtn.addEventListener('click', () => {
      dialog.close();
    });
  } else {
    window.location.href = "/html programs/homework/region/chuanxiang.html";
  }
}

function lucaiOutput(){
  if (isLogin ===  false) {
    const dialog = document.getElementById('dialog-islogin');
    const confirmBtn = document.getElementById('confirmBtn');
    dialog.showModal();
    confirmBtn.addEventListener('click', () => {
      dialog.close();
    });
  } else {
    window.location.href = "/html programs/homework/region/lucai.html";
  }
}

function dongbeiOutput(){
  if (isLogin ===  false) {
    const dialog = document.getElementById('dialog-islogin');
    const confirmBtn = document.getElementById('confirmBtn');
    dialog.showModal();
    confirmBtn.addEventListener('click', () => {
      dialog.close();
    });
  } else {
    window.location.href = "/html programs/homework/region/dongbei.html";
  }
}

function xibeiOutput(){
  if (isLogin ===  false) {
    const dialog = document.getElementById('dialog-islogin');
    const confirmBtn = document.getElementById('confirmBtn');
    dialog.showModal();
    confirmBtn.addEventListener('click', () => {
      dialog.close();
    });
  } else {
    window.location.href = "/html programs/homework/region/xibei.html";
  }
}

function yazhouOutput(){
  if (isLogin ===  false) {
    const dialog = document.getElementById('dialog-islogin');
    const confirmBtn = document.getElementById('confirmBtn');
    dialog.showModal();
    confirmBtn.addEventListener('click', () => {
      dialog.close();
    });
  } else {
    window.location.href = "/html programs/homework/region/yazhou.html";
  }
}

function oumeiOutput(){
  if (isLogin ===  false) {
    const dialog = document.getElementById('dialog-islogin');
    const confirmBtn = document.getElementById('confirmBtn');
    dialog.showModal();
    confirmBtn.addEventListener('click', () => {
      dialog.close();
    });
  } else {
    window.location.href = "/html programs/homework/region/oumei.html";
  }
}