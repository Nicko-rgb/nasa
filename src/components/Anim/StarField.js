import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
    useSharedValue,
    useAnimatedProps,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
const TOTAL_STARS = 50;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const StarField = () => {
    const stars = Array.from({ length: TOTAL_STARS }).map(() => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const r = Math.random() * 1.5 + 0.5;
        const opacity = useSharedValue(Math.random());

        opacity.value = withRepeat(
            withTiming(Math.random(), { duration: 2000 }),
            -1,
            true
        );

        return { x, y, r, opacity };
    });
    console.log('Total stars:', stars.length);


    return (
        <Svg
            width={width}
            height={height}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: -1,
            }}
        >
            {stars.map((star, index) => {
                const animatedProps = useAnimatedProps(() => ({
                    opacity: star.opacity.value,
                }));

                return (
                    <AnimatedCircle
                        key={index}
                        cx={star.x}
                        cy={star.y}
                        r={star.r}
                        fill="white"
                        animatedProps={animatedProps}
                    />
                );
            })}
        </Svg>
    );
};

export default StarField;
