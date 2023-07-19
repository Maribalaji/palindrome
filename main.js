var a=prompt("Enter a value");
var b=0;
var c;
var temporaryValue;
temporaryValue=a;


while(a>0){
	c=a%10;
	b=b*10+c;
	a=parseInt(a/10);
}
if(b==temporaryValue)
{
	document.write(b+"is a palindrome");
}
else
{
	document.write(b+"is not palindrome");
}