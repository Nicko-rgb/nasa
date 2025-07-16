import Matter from 'matter-js';
import Rocket from './Rocket';
import Meteor from './Meteor';
import Explosion from './Explosion';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const FOOTER_HEIGHT = 80;
const GAME_HEIGHT = height - FOOTER_HEIGHT;

export default () => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;

  // Desactivar la gravedad para que el cohete no caiga
  engine.world.gravity.y = 0;

  // Posicionar el cohete en el centro horizontal y a una altura segura del footer
  const rocket = Matter.Bodies.rectangle(width / 2, GAME_HEIGHT - 120, 50, 70, { 
    label: 'Rocket', 
    isStatic: false,
    friction: 0,
    frictionAir: 0,
    restitution: 0, // Sin rebote
    density: 0.001 // Muy ligero
  });

  Matter.World.add(world, [rocket]);

  return {
    physics: { engine, world },
    rocket: { body: rocket, size: [50, 70], color: 'white', renderer: Rocket },
    meteor: { meteors: [], renderer: Meteor },
    explosion: { active: false, x: 0, y: 0, timer: 0, renderer: Explosion },
  };
};
