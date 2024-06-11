let figura = prompt('De que figura desea encontrar el area? (Triangulo, Cuadrado, Rectangulo, Circulo y Paralelogramo')
figura = figura.toLowerCase()
const pi = 3.141592

switch (figura){
    case 'triangulo':
        let b = Number(prompt('Cual es el valor de la base?'));
        let h = Number(prompt('Cual es el valor de la altura?'));
        alert('Calculando...');
        areaTri1 = b * h;
        areaTri2 = areaTri1 / 2;
        alert('El area es = '+ areaTri2 + ' (unidad que tenga, sea cm m dm dam km)')
        break;

    case 'cuadrado':
        let l = Number(prompt('Cual es el valor de cualquiera de los lados?'));
        areaCuad = l * l;
        alert('Calculando...');
        alert('El area es = '+ areaCuad + ' (unidad que tenga, sea cm m dm dam km)');
        break;
    
    case 'rectangulo':
        let baseRect = Number(prompt('Cual es el valor del ancho de la figura?'));
        let a = Number(prompt('Cual es el valor del largo de la figura?'))
        areaRect = baseRect * a;
        alert('Calculando...');
        alert('El area es = '+ areaRect + ' (unidad que tenga, sea cm m dm dam km)');
        break;

    case 'circulo':
        let r = Number(prompt('Cual es el valor del radio?'))
        areaCirc = pi * r * r
        alert('Calculando...');
        alert('El area es = '+ areaCirc + ' (unidad que tenga, sea cm m dm dam km)');
        break;

    case 'paralelogramo':
        let basePar = Number(prompt('Cual es el valor de la base?'))
        let hPar = Number(prompt('Cual es el valor de la altura?'))
        areaPar = basePar * hPar
        alert('Calculando...')
        alert('El area es = ' + areaPar + ' (unidad que tenga, sea cm m dm dam km)')

    
    default:
        alert('Ingresaste una figura no valida.');
        break;
}