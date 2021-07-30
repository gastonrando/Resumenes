//1. usuario ingresa datos 3 veces:

{
    var edad;
    var contador;

    contador=0;
    
    while(contador<3)
    {
        contador++;//contador=contador+1;contador+=1; (son todos iguales)
        edad=prompt("ingrese su edad");

    }
}
//2. usuario ingresa datos hasta que quiere con confirm
{

    var edad;
    var respuesta;

    respuesta=true;

    while(respuesta==true)
    {
        edad=prompt("ingrese");

        respeusta=confirm("desea continuar?");//va ultimo, porque no queremos que nos pregunte antes de terminar los procesos del bucle!!!
    }
}
//3. usuario ingresa datos hasta que quiere con prompt.
{

    var edad;
    var respuesta;

    respuesta="si";

    while(respuesta=="sis")
    {
        edad=prompt("ingrese");

        respeusta=prompt("desea continuar?");//va ultimo, porque no queremos que nos pregunte antes de terminar los procesos del bucle!!!
    }
}

//4. Validaciones:
// reglas para texto, si me pide que el texto (valor literal) sea XXX, la funcio debe de ser:
{
    var textoLiteral;

    textoLiteral=prompt("ingrese xxx");
    //valores literales no llevan parseint y van con ""
    while(textoLiteral=!"xxx") //si fuese mas de un valor literal que debemos corroborar se agregan con &&, NO CON ||.
    {
        textoLiteral=prompt("ingresame el valor xxx");
    }
}
//Validar numeros:
{
    var numeros;

    numeros=prompt("ingrese n");//quiero que los valores de n sean mayor a 0
    numero=parseInt(numero);
    //valores numericos siempre llevan parseint
    while(numeros<0) //la comprobacion tiene que ser para todos los numero contrarios al que deseamos
    {
        numeros=prompt("ingresame valores mayores a 0...forro");
    }
}


//5. reglas para ver donde meto las funciones if, switch y while.
/*tengo 2 momentos para posicionar las funciones:
1- adentro del while de ingreso de datos
2- fuera del while de ingreso de datos
obviamente puede haber otros while pero este es el mas global, el resto depende del ejercicio. NO SEAS TAN CUADRADO!

si me pide que cada vez que el usuario ingrese un dato haga algo respecto a el, debo de usar las funciones dentro del while de ingreso de datos. 
si me pide que trabaje sobre totales debo de hacerlo afuera del while de ingreso de datos. Debo de saber igualmente que voy a tener que crear variables que ACUMULEN, CUENTES O X
DENTRO DEL WHILE DE INGRESO DATOS.
ej: ingresar edades y sexo de las personas y mostrar que sexo el promedio de edades por sexo, el usuario las ingresa hasta cuando quiera, no validamos para no perder tiempo, pone bien los datos!*/
{
    var edad;
    var sexo;
    var respuesta;
    var contadorMujeres;
    var contadorHombres;
    var sumaEdadHombres;
    var sumaEdadMujeres;
    var promedioEdadHombres;
    var promedioEdadMujeres;


    respuesta=true;
    //las variables acumuladoras y sumadoras se inicializan en 0 para poder despues sumarlas sin quilombo de valores literales.
    contadorMujeres=0;
    contadorHombres=0;
    sumaEdadHombres=0;
    sumaEdadMujeres=0;

    while(respuesta==true)
    {
        
        edad=prompt("edad?");
        sexo=prompt("sexo?");

        //como promedio? tengo que acumular y despues dividir por la cantidad de veces que se ingreso el dato

        if(sexo=="mujer")//yo acumule variables a lo largo de cada ingreso
        {
            contadorMujeres+=1;
            sumaEdadMujeres=sumaEdadMujeres+edad; // 0=0+edad//se puede abreviar sumaEdadMujeres+=edad.   
        }
        else//uso else porque solo tengo otra opcion respecto al sexo!
        {
            contadorHombres+=1;
            sumaEdadHombres+=edad;
        }
        
        respuesta=confirm("continuas?");
    }

    //una vez que deja de ingresar, acumular o lo que sea con las variables, debo de sacar mis conclusiones finales. Ej: promedio.
    //el promedio por ejemplo lo tengo q hacer afuera porque si no lo hago sobre cada dato ingresado, eso no es promedio! FORRO
    promedioEdadHombres=sumaEdadHombres/contadorHombres;
    promedioEdadMujeres=sumaEdadMujeres/contadorMujeres;

    //para la salida del resultado puedo usar: console.log(que solo lo ve el programador); document.write o alert
    //que feo escribir el choclo del mensaje detro de cualquiera de esas funciones, por lo tanto uso una variable mensaje

    mensaje="las mujeres tienen un promedio de edad de "+promedioEdadMujeres;
    //es mas facil para despues analizar uno, concatenar en renglones distintos, porque cada punto tiene su renglon de mensaje
    mensaje=mensaje+"\nlos hombres tienen un promedio de edad de "+promedioEdadHombres; //mensaje+="xxxxx" - "\"-->(alt 92) "\n" me clave el enter en el mensaje. no funciona para documente wrute, lo descubri de la mala manera

    alert(mensaje);

}
//6.banderas: las banderas me sirven porque hay muchas veces que no ingreso un dato o porque necesito hacer diferencia de la primera vez vs todas las otras. 
//generalmente las usamos con maximos y minimos

{
    //ejercicio 9 de while-Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo ingresado

    var numero;
    var respuesta;
    var numeroMaximo;
    var numeroMinimo;
    var bandera; //le pones el nombre que quieras siempre y cuando sepas que es tu llamada de atencion, puede ser un contador con valor =0.

    respeusta=true;
    numeroMaximo=0;//ante la duda, variable que lleve numero la inicializamos con 0. es mejor 0 que NuN
    numeroMinimo=0;
    //banderas: 2 opciones
    //opcion 1:
    bandera="primera";//la bandera se inicializa siempre, porque si no la ponga al re pedo!
    //opcion 2:
    //bandera=0;
    while(respuesta==true)
    {
        numero=prompt("numero?");
        numero=parseInt(numero);

        //tengo que saber si es mayor o menor! que sucede, la primera vez q ingreso el numero, va a ser tanto maximo como minimo :O
        /*bandera opcion 2:
        if(bandera==0)
        {
            bandera+=1;
        }*/       
        //bandera opcion 1:
        if(bandera=="primera")//lo hago adentro del while de ingreso de numeros, porque tengo que hacer la comprobacion cada vez que ingrese un numero y no sobre totales.
        {
            bandera="ya no";
            numeroMaximo=numero;//aca establezco mis parametos de comparacion para las siguientes veces que ingrese numeros
            numeroMinimo=numero;
        }
        else//la bandera ya no tiene su valor inicial, este if depende de la bandera
        {
            //inicio la compracion con las variables definidas mas arriba, si no hacia la bandera, mis variables no tenian valor de comparacion!
            if(numero>numeroMaximo)
            {
                numeroMaximo=numero;
            }
            else
            {
                if(numero<numeroMinimo)//en esta caso hago otro if porque no necesariamente el siguiente numero ingresado al no ser el maximo, va a ser un minimo! presta atencion forro
                {
                    numeroMinimo=numero;
                }
            }
        }
    }
}
//7extras: yo un if o un switch puedo usarlo para mas de un enunciado, ejemplo. Ingresar discos marca "x", "y" o "z", fijase de cual hay mas cantidad y el promedio de discos y
// adicionalmente fijate cual es el precio maximo y minimo de discos x. de este mirar metodo no contenido de datos POR FAVOR!
{
    switch(marcaDiscos) //si fuesen solo 2 variables podria usar if
    {
        case "x":
            cantidadX+=cantidad;
            if(badera="primero")//meti dentro de un enuncuado anterior uno nuevo, aprovechando las funciones, atencion a no cagar el enunciado anterior, por eso deje lo que me pedia antes arriba.
            {
                bandera="ya no";
                precioCaro=precio;
                precioBarto=precio;
            }
            else
            {
                if(precio<precioBarto)
                {
                    precioBarto=precio;
                }
                else
                {
                    if(precio>precioCaro)
                    {
                        precioCaro=precio;
                    }
                }
            }
        break;
        case "y":
            cantidadY+=cantidad;
            contadorY+=1
        break;
        default://puedo usar default porq ya agote todas las opciones menos 1, si no tambien poner case "z", sin meter default en el switch, el dafault es para ahorra lineas porque quiere decir para todo lo no metido en los cases.
            cantidadZ+=cantidad;
    }
}