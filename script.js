let domName = document.getElementById('root');
// let root = createRoot(domName);
const root = ReactDOM.createRoot(domName);
let div = React.createElement('div',{id: 'container'}, 
    React.createElement('h1' , {} , 'Learn React JS'),
    React.createElement('p' , {} , 'React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development.'),
    React.createElement('span' , {} , "The world can't live without mobile and web applications in this day and age. Everything is digitized, from booking cabs to ordering food to make bank transactions. Thanks to the efficient frameworks that provide a seamless user experience. "),
    React.createElement('a', {href : 'https://react.dev/'}, 'React Introduction '),
    React.createElement('span' , {} , "In this article, we will explore React Introduction, what React is, its key features, benefits, and why it’s a great choice for modern web development."),
    React.createElement('p' , {} , 'React, also known as ReactJS, is a popular and powerful JavaScript library used for building dynamic and interactive user interfaces, primarily for single-page applications (SPAs). It was developed and maintained by Facebook and has gained significant popularity due to its efficient rendering techniques, reusable components, and active community support.')


);
root.render(div);