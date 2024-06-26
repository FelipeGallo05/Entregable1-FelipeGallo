const pi = 3.141592
let areas = {
    
}

function triangulo(b,h){
    let areaTri1 = b * h;
    let areaTri2 = areaTri1 / 2
    return areaTri2
}

function cuadrado(l){
    let areaCuad = l * l
    return areaCuad
}

function rectangulo(baseRect, a){
    let areaRect = baseRect * a;
    return areaRect
}

function circulo(r){
    let areaCirc = pi * r * r;
    return areaCirc
}

function paralelogramo(basePar, hPar){
    let areaPar= basePar * hPar
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
            let areaTri3 = triangulo(b, h)
            alert('El area es = '+ areaTri3 + ' (unidad que tenga, sea cm m dm dam km)^2')
            areas.area1 = 'El area del triangulo obtenida es = ' + areaTri3
            preguntar = true
            break;
    
        case '2':
            let l = Number(prompt('Cual es el valor de cualquiera de los lados?'));
            alert('Calculando...');
            let areaCuad1 = cuadrado(l)
            alert('El area es = '+ areaCuad1 + ' (unidad que tenga, sea cm m dm dam km)^2');
            areas.area2 = 'El area del cuadrado obtenida es = ' + areaCuad1
            preguntar = true
            break;
        
        case '3':
            let baseRect = Number(prompt('Cual es el valor del ancho de la figura?'));
            let a = Number(prompt('Cual es el valor del largo de la figura?'))
            let areaRect1 = rectangulo(baseRect, a)
            alert('Calculando...');
            alert('El area es = '+ areaRect1 + ' (unidad que tenga, sea cm m dm dam km)^2');
            areas.area3 = 'El area del rectangulo obtenida es = ' + areaRect1
            preguntar = true
            break;
    
        case '4':
            let r = Number(prompt('Cual es el valor del radio?'))
            let areaCirc1 = circulo(r)
            alert('Calculando...');
            alert('El area es = '+ areaCirc1 + ' (unidad que tenga, sea cm m dm dam km)^2');
            areas.area4 = 'El area del triangulo obtenida es = ' + areaCirc1
            preguntar = true
            break;
    
        case '5':
            let basePar = Number(prompt('Cual es el valor de la base?'))
            let hPar = Number(prompt('Cual es el valor de la altura?'))
            let areaPar1 = paralelogramo(basePar, hPar)
            alert('Calculando...')
            alert('El area es = ' + areaPar1 + ' (unidad que tenga, sea cm m dm dam km)^2')
            areas.area5 = 'El area del triangulo obtenida es = ' + areaPar1
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