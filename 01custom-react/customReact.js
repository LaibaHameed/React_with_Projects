// in react under the hood 
function CustomRender(renderElem, container) {
    // const domElem = document.createElement(renderElem.type);
    // domElem.innerHTML = renderElem.children;
    // domElem.setAttribute('href', renderElem.props.href);
    // domElem.setAttribute('target', renderElem.props.target);
    // container.appendChild(domElem);

    const domElem = document.createElement(renderElem.type);
    domElem.innerHTML = renderElem.children;
    for(prop in  renderElem.props){
        domElem.setAttribute(prop, renderElem.props[prop]);
    }
    container.appendChild(domElem);
}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children: 'click to visit google'
};

const mainContainer = document.querySelector('#root');

CustomRender(ReactElement, mainContainer);