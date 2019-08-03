(function(){
    var leftbtn=document.getElementsByClassName('left')[0];
    var rightbtn=document.getElementsByClassName('right')[0];
    var ul=document.getElementsByClassName('slideUL')[0];
    var i=4;
    leftbtn.onclick=function(){
        if(i>=0){
            console.log("asd")
            ul.style.marginLeft=-461*i+'px'
            if(i>0)
                i--;
        }
    }
    rightbtn.onclick=function(){
        if(i<=5){
            if(i<5)
                ++i;
            ul.style.marginLeft=-461*i+'px'
        }
    }
})()



// 二级联动下拉菜单
var cities=[
    [{"name":'巴黎-卢浮宫店'}],
    
    [{"name":'香港-尖沙咀店'},{"name":'香港-铜锣湾店'}],
    
    [{"name":'北京-银泰in88旗舰店'},
     {"name":'北京-金源燕莎MALL店'},
     {"name":'北京-东方新天地店'},
     {"name":'北京-银泰中心国贸店'},
     {"name":'北京-世贸天阶店'},
     {"name":'北京-西直门凯德店'},
     {"name":'北京-SOHO店'}],
    
     [{"name":'天津-海信广场店'},
    {"name":'天津-陆家嘴广场店'},
    {"name":'天津-万象城'},
    {"name":'天津-恒隆广场店'},
    {"name":'天津-金元宝商厦店'},
    {"name":'天津-和平大悦城店'},
    {"name":'天津-爱情海店'}],

    [{"name":'保定-万博广场店'},
    {"name":'石家庄-乐汇城店'},
    {"name":'唐山-银泰城店'},
    {"name":'沧州-华北商厦百货店'},
    {"name":'石家庄-万象城店'},
    {"name":'邢台-万达广场店'},
    {"name":'石家庄-勒泰中心店'}]
  ];
//找到name为provs的select元素
var selProvs=document.getElementsByName("provs")[0];
//找到name为cities的select元素
var selCts=document.getElementsByName("cities")[0];
//当provs中选中的省份发生变化时
selProvs.onchange=function(){
  //获得当前选中省份的下标位置i
  var i=this.selectedIndex;//当前选中项在所有<option>中的下标
  //只有点的不是第一项=请选择=时，才继续执行下列操作
  if(i>0){
    //去cities数组中获得i-1位置的子数组
    var cts=cities[i-1];
    //创建文档片段frag
    var frag=document.createDocumentFragment();
    //创建<option>=请选择=，并追加到frag中
    frag.appendChild(
      new Option("请选择店铺")
    );
    //遍历cts中每个城市对象
    for(var c of cts){
      //每遍历一个城市对象，就创建一个<option>元素，设置起内容为城市名
      //并将新<option>追加到frag中
      frag.appendChild(
        new Option(c.name)
      );
    }//(遍历结束)
    //在添加新内容前，先清空selCts的旧内容
    selCts.innerHTML="";
    //将frag整体追加到selCts中
    selCts.appendChild(frag);
    //让第二个select显示出来
    selCts.className="";
  }else{//否则，如果点的是=请选择=
    //就隐藏旁边的selCts
    selCts.className="hide";
  }
}


