import Matter from 'matter-js';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const FOOTER_HEIGHT = 80;
const GAME_HEIGHT = height - FOOTER_HEIGHT;

let meteorId = 0;
let meteorTimer = 0;
const METEOR_INTERVAL = 3000; // medio segundo

const Physics = (entities, { time, touches, dispatch }) => {
    let engine = entities.physics.engine;
    let rocket = entities.rocket.body;
    
    // Asegurar que la gravedad esté desactivada
    engine.world.gravity.y = 0;
    
    Matter.Engine.update(engine, time.delta);

    // Procesar toques para mover el cohete usando delta
    touches.filter(t => t.type === 'move').forEach(t => {
        const touchX = t.delta.pageX;
        const touchY = t.delta.pageY;

        let newX = rocket.position.x + touchX;
        let newY = rocket.position.y + touchY;

        newX = Math.max(25, Math.min(width - 25, newX));
        newY = Math.max(35, Math.min(GAME_HEIGHT - 35, newY));

        Matter.Body.setVelocity(rocket, { x: 0, y: 0 });
        Matter.Body.setPosition(rocket, { x: newX, y: newY });
    });

    // Meteoritos existentes
    entities.meteor.meteors.forEach((m, index) => {
        // Velocidad más lenta para los meteoritos
        m.body.position.y += 0.3;

        // Eliminar meteoritos que salen de la pantalla
        if (m.body.position.y > GAME_HEIGHT + 50) {
            Matter.World.remove(entities.physics.world, m.body);
            entities.meteor.meteors.splice(index, 1);
            return;
        }

        // Mejor detección de colisión
        const dx = Math.abs(m.body.position.x - rocket.position.x);
        const dy = Math.abs(m.body.position.y - rocket.position.y);
        const collisionDistance = 45; // Radio de colisión
        
        if (dx < collisionDistance && dy < collisionDistance) {
            dispatch({ type: 'game-over' });
        }
    });

    // --- Generar un meteoro cada 500 ms en posición aleatoria ---
    meteorTimer += time.delta;
    if (meteorTimer >= METEOR_INTERVAL) {
        const x = Math.random() * (width - 40) + 20;
        const meteor = Matter.Bodies.circle(x, -30, 20, { 
            label: 'Meteor',
            friction: 0,
            frictionAir: 0,
            restitution: 0
        });
        entities.meteor.meteors.push({ id: meteorId++, body: meteor });
        Matter.World.add(entities.physics.world, [meteor]);
        dispatch({ type: 'score' });
        meteorTimer = 0;
    }

    return entities;
    
};

export default Physics;
