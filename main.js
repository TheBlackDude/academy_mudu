let operator;
let leftOperand = 0;
let rightOperand = 0;
let memory = '0';
let results = memory;
let isOperatorJustClicked=false;

let screen = document.getElementsByTagName('span')[0];
let buttons = document.getElementsByTagName('button');

for(let i=0; i<buttons.length; i++) {
	let btn=buttons[i];
	btn.onclick=function() {
		let btnText=this.innerHTML;
		switch (btnText) {
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				if(memory==='0') {
					memory='';
				}
				if(isOperatorJustClicked) {
					memory='';
				}

				memory += btnText;
				isOperatorJustClicked=false;
				break;
			case '/':
			case '*':
			case '-':
			case '+':
			    operator=btnText;
			    leftOperand=memory;
			    isOperatorJustClicked=true;
			    break;
			case 'C':
			    operator='';
			    memory='0';
			    leftOperand=0;
			    rightOperand=0;
			    isOperatorJustClicked=false;
			    break;
            case '=':
                rightOperand=memory;
                result=process(operator, leftOperand, rightOperand);
                memory=result;
                break;
		}
		sreen.innerHTML=memory;
	}
}


function process(op, lop, rop) {
	lop=parseInt(lop);
	rop=parseInt(rop);
	let result;
	switch (op) {
		case '/':
			result=(lop/rop);
			break;
	    case '*':
	        result=(lop*rop);
	        break;
	    case '-':
	        result=(lop-rop);
	        break;
	    case '+':
	        result=(lop+rop);
		default:
			// statements_def
			break;
	}
}