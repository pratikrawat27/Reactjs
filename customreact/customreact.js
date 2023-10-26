function customRender(reactElement, Container){
    /*
    const domElement = document.createElement(reactElement.type)

    //inner html inject
    domElement.innerHTML = reactElement.children  // asked react element what is its type.
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    Container.appendChild(domElement)
    if there was one more element it would caused error for that we will use loop
    */
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue; // this is use when children is inside prop
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    Container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com/',
        target: '_blank'
    },
    children: 'Click me to vist google.'
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer)
