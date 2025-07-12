export const planets = [
    {
        name: 'Sol',
        description: 'Estrella central de nuestro sistema solar.',
        characteristics: {
            tamaño: '1.392.684 km de diámetro',
            temperatura: '5.500°C (superficie), 15 millones °C (núcleo)',
            duraciónDelDía: '25-35 días (rotación diferencial)',
            distanciaAlSol: '0 km (centro del sistema)',
            masa: '1.989 × 10³⁰ kg (333,000 Tierras)',
            gravedad: '274 m/s² (27.94 g)',
            periodoOrbital: '225-250 millones de años (alrededor del centro galáctico)'
        },
        image: require('../assets/imgs/sol.png')
    },
    {
        name: 'Mercurio',
        description: 'El planeta más pequeño y cercano al Sol.',
        characteristics: {
            tamaño: '4.879 km de diámetro',
            temperatura: '-173°C a 427°C',
            duraciónDelDía: '58 días, 15 horas terrestres',
            distanciaAlSol: '57.9 millones de km',
            masa: '3.3011 × 10²³ kg (0.055 Tierras)',
            gravedad: '3.7 m/s² (0.38 g)',
            periodoOrbital: '88 días terrestres'
        },
        image: require('../assets/imgs/mercurio.png')
    },
    {
        name: 'Venus',
        description: 'El planeta más caliente, con una densa atmósfera tóxica.',
        characteristics: {
            tamaño: '12.104 km de diámetro',
            temperatura: '462°C promedio',
            duraciónDelDía: '243 días terrestres (rotación retrógrada)',
            distanciaAlSol: '108.2 millones de km',
            masa: '4.8675 × 10²⁴ kg (0.815 Tierras)',
            gravedad: '8.87 m/s² (0.904 g)',
            periodoOrbital: '225 días terrestres'
        },
        image: require('../assets/imgs/venus.png')
    },
    {
        name: 'Tierra',
        description: 'Nuestro hogar, el único planeta conocido con vida.',
        characteristics: {
            tamaño: '12.742 km de diámetro',
            temperatura: '-88°C a 58°C',
            duraciónDelDía: '23 horas, 56 minutos',
            distanciaAlSol: '149.6 millones de km (1 UA)',
            masa: '5.972 × 10²⁴ kg',
            gravedad: '9.807 m/s² (1 g)',
            periodoOrbital: '365.25 días'
        },
        image: require('../assets/imgs/tierra.png')
    },
    {
        name: 'Marte',
        description: 'El planeta rojo, con el monte más alto del sistema solar.',
        characteristics: {
            tamaño: '6.779 km de diámetro',
            temperatura: '-140°C a 20°C',
            duraciónDelDía: '24 horas, 37 minutos',
            distanciaAlSol: '227.9 millones de km',
            masa: '6.417 × 10²³ kg (0.107 Tierras)',
            gravedad: '3.71 m/s² (0.38 g)',
            periodoOrbital: '687 días terrestres'
        },
        image: require('../assets/imgs/marte.png')
    },
    {
        name: 'Júpiter',
        description: 'El planeta más grande, un gigante gaseoso con intensos vientos.',
        characteristics: {
            tamaño: '139.820 km de diámetro',
            temperatura: '-108°C promedio',
            duraciónDelDía: '9 horas, 55 minutos',
            distanciaAlSol: '778.5 millones de km',
            masa: '1.899 × 10²⁷ kg (317.8 Tierras)',
            gravedad: '24.79 m/s² (2.528 g)',
            periodoOrbital: '11.86 años terrestres'
        },
        image: require('../assets/imgs/jupiter.png')
    },
    {
        name: 'Saturno',
        description: 'Conocido por sus impresionantes anillos de hielo y roca.',
        characteristics: {
            tamaño: '116.460 km de diámetro',
            temperatura: '-139°C promedio',
            duraciónDelDía: '10 horas, 33 minutos',
            distanciaAlSol: '1.429 millones de km',
            masa: '5.685 × 10²⁶ kg (95.16 Tierras)',
            gravedad: '10.44 m/s² (1.065 g)',
            periodoOrbital: '29.46 años terrestres'
        },
        image: require('../assets/imgs/saturno.png')
    },
    {
        name: 'Urano',
        description: 'Gigante de hielo con una inclinación axial extrema (98°).',
        characteristics: {
            tamaño: '50.724 km de diámetro',
            temperatura: '-197°C promedio',
            duraciónDelDía: '17 horas, 14 minutos (retrógrado)',
            distanciaAlSol: '2.871 millones de km',
            masa: '8.682 × 10²⁵ kg (14.54 Tierras)',
            gravedad: '8.69 m/s² (0.886 g)',
            periodoOrbital: '84.01 años terrestres'
        },
        image: require('../assets/imgs/urano.png')
    },
    {
        name: 'Neptuno',
        description: 'El planeta más ventoso con los vientos más fuertes del sistema solar.',
        characteristics: {
            tamaño: '49.244 km de diámetro',
            temperatura: '-201°C promedio',
            duraciónDelDía: '16 horas, 6 minutos',
            distanciaAlSol: '4.498 millones de km',
            masa: '1.024 × 10²⁶ kg (17.15 Tierras)',
            gravedad: '11.15 m/s² (1.14 g)',
            periodoOrbital: '164.8 años terrestres'
        },
        image: require('../assets/imgs/neptuno.png')
    },
    {
        name: 'Luna',
        description: 'Satélite natural de la Tierra, el quinto más grande del sistema solar.',
        characteristics: {
            tamaño: '3.474 km de diámetro',
            temperatura: '-173°C a 127°C',
            duraciónDelDía: '27.3 días terrestres (rotación sincrónica)',
            distanciaAlSol: '149.6 millones de km (misma que la Tierra)',
            masa: '7.342 × 10²² kg (0.0123 Tierras)',
            gravedad: '1.62 m/s² (0.165 g)',
            periodoOrbital: '27.3 días terrestres'
        },
        image: require('../assets/imgs/luna.png')
    }
];
