//Definicion de numero
var n, primo;
primo=true;
pi=3.1416

n = parseInt(prompt('Ingrese numero'));

for (i=2; i<n-1;i++){
    if(n%i==0){
        primo=false;
    }
}
if(primo==true){
    document.write(+n+ " Es numero primo <br>");
    document.write( "Multiplicado por la constante PI es: " +pi*n);
}
else{
    document.write(+n+ " No es numero primo");
}
