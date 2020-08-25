
/**
 * Shakes it up, down, left, right and rotates.
 * @param {String} element Could be class, id, element etc.
 */
const shake = (element) => {
    xMax = 20;
    anime({
        targets: element,
        easing: 'easeInOutSine',
        translateX: [ xMax * -2, xMax*2, xMax/-2, xMax/2, 0 ],
        translateY: [ xMax * -2, xMax*2, xMax/-2, xMax/2, 0 ],
        rotate: [xMax * -1, xMax, xMax/-2, xMax/2, 0],
        duration: 500,
    })
}

/**
 * Shakes left and right.
 * @param {String} element Could be class, id, element etc.
 */
const shakeLeftRigt = (element) => {
    xMax = 20;
    anime({
        targets: element,
        easing: 'easeInOutSine',
        translateX: [ xMax * -2, xMax*2, xMax/-2, xMax/2, 0 ],
        translateY: [ xMax * -2, xMax*2, xMax/-2, xMax/2, 0 ],
        duration: 500,
    })
}

/**
 * Makes element go up and down
 * @param {String} element Could be class, id, element etc.
 */
const upAndDown = (element) => {
    xMax = 20;
    anime({
        targets: element,
        easing: 'easeInOutSine',
        translateY: [ xMax ],
        direction: 'alternate',
        loop: true,
        duration: 200
    })
}

/**
 * Rotates back and fourth
 * @param {String} element Could be class, id, element etc.
 */
const rotateAnimation = (element) => {
    xMax = 2;
    anime({
        targets: element,
        easing: 'easeInOutSine',
        rotate: [ xMax, xMax*-1 ],
        direction: 'alternate',
        loop: true,
        duration: 1000
    })
}

/**
 * Flips around the y-axis.
 * @param {String} element Could be class, id, element etc.
 */
const flipAnimation = (element) => {
    anime({
        delay: 2000,
        targets: element,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        rotateY: [{ value: "180deg", duration: 700 }],
        loop: 1,
    })
}