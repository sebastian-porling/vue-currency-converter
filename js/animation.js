
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

const flipAnimation = (element) => {
    anime({
        targets: element,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        rotateY: [{ value: "180deg", duration: 700 }],
        loop: 1
    })
}