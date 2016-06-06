function answer_1() {
  document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";
}

function answer_2(){
   document.getElementById("q2-answer").innerHTML = "<ol><li>자바스크립트는 DOM에 접근함으로써 HTML을 바꿀 수있다.또한 요소나 속성들을 추가 제거 할 수 있다.</li><li>자바스크립트는 또한 events들에 의해서 페이지에 특정한 일이 일어 나게 할 수 있다.</li></ol>";
}

t=document.getElementsByClassName("q34-answer");

function answer_3(){
   t[0].innerHTML="<ol><li>Parent node : a node directly above a node</li><li>Child nodes : nodes one level directly below</li><li>Sibling nodes : nodes at the same level on the understanding that parent node is same </li><li>Descendant nodes : a set of nodes any number of levels below another node</li><li>Ancestor nodes : a set of nodes above a node in a tree</li></ol>";
}

function answer_4(){
	  t[1].innerHTML="<ol><li>document.getElementById : Returns an element with a given ID_NAME. and Duplicate ID is not allowed in the HTML specification.</li><li>document.getElementsByName : Get a list of elements based on the name. </li><li> document.getElementByClassName : Get a list of elements based on the class name. and Name is generally used with input tag. </li><li>document.getElementsByTagName : Get a list of elements with the input tag name.</li></ol>";
}

x=$("a");

$(x[0]).click(function(){
	$(x[0]).text('Answers5');
})

$(x[1]).click(function(){
	$(x[1]).text('Answers5');
})

y=$(".item");

$(y[0]).click(function(){
	$(y[0]).attr('style','font-size:3em;');
})

$(y[1]).click(function(){
	$(y[1]).attr('style','font-size:3em;');
})


z=$(".demo");
$(z[0]).dblclick(function(){
	$(z[0]).attr('style','color:blue;');
})

$(z[2]).dblclick(function(){
	$(z[2]).attr('style','color:blue;');
})



