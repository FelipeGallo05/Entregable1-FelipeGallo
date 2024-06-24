const pi = 3.141592
let areas = {
    
}

function triangulo(b,h){
    areaTri1 = b * h;
    areaTri2 = areaTri1 / 2
    return areaTri2;
}

function cuadrado(l){
    areaCuad = l * l
    return areaCuad
}

function rectangulo(baseRect, a){
    areaRect = baseRect * a;
    return areaRect
}

function circulo(r){
    areaCirc = pi * r * r;
    return areaCirc
}

function paralelogramo(basePar, hPar){
    areaPar= basePar * hPar
    return areaPar
}
let preguntar = true


while (preguntar ){
    let figura = prompt('De que figura desea encontrar el area? \n (1 = Triangulo, 2 = Cuadrado, 3 = Rectangulo, 4 = Circulo y  5 = Paralelogramo) \n o ingrese X si desea finalizar el programa')
    figura = figura.toLowerCase()
    switch (figura){
        case '1':
            let b = Number(prompt('Cual es el valor de la base?'));
            let h = Number(prompt('Cual es el valor de la altura?'));
            alert('Calculando...');
            triangulo(b, h)
            alert('El area es = '+ areaTri2 + ' (unidad que tenga, sea cm m dm dam km)^2')
            areas.area1 = 'El area del triangulo obtenida es = ' + areaTri2
            preguntar = true
            break;
    
        case '2':
            let l = Number(prompt('Cual es el valor de cualquiera de los lados?'));
            alert('Calculando...');
            cuadrado(l)
            alert('El area es = '+ areaCuad + ' (unidad que tenga, sea cm m dm dam km)^2');
            areas.area2 = 'El area del cuadrado obtenida es = ' + areaCuad
            preguntar = true
            break;
        
        case '3':
            let baseRect = Number(prompt('Cual es el valor del ancho de la figura?'));
            let a = Number(prompt('Cual es el valor del largo de la figura?'))
            rectangulo(baseRect, a)
            alert('Calculando...');
            alert('El area es = '+ areaRect + ' (unidad que tenga, sea cm m dm dam km)^2');
            areas.area3 = 'El area del rectangulo obtenida es = ' + areaRect
            preguntar = true
            break;
    
        case '4':
            let r = Number(prompt('Cual es el valor del radio?'))
            circulo(r)
            alert('Calculando...');
            alert('El area es = '+ areaCirc + ' (unidad que tenga, sea cm m dm dam km)^2');
            areas.area4 = 'El area del triangulo obtenida es = ' + areaCirc
            preguntar = true
            break;
    
        case '5':
            let basePar = Number(prompt('Cual es el valor de la base?'))
            let hPar = Number(prompt('Cual es el valor de la altura?'))
            paralelogramo(basePar, hPar)
            alert('Calculando...')
            alert('El area es = ' + areaPar + ' (unidad que tenga, sea cm m dm dam km)^2')
            areas.area5 = 'El area del triangulo obtenida es = ' + areaPar
            preguntar = true
            break;

        case 'x':
            alert('Programa finalizado.')
            preguntar = false
            break;
        
        default:
            alert('Ingresaste una figura no valida.');
            break;
    }
}

//Para chequear como programador que este funcionando el programa

console.table(areas)