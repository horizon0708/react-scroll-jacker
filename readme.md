# React Scroll Jacker 
React Scroll Jacker is a component that makes your next scroll-hijacking easy! Instead of using scroll to scroll the page like a sane person, this component lets you use scroll to transition between React elements. Users` hijacked scrolls will return after they spin their mousewheels as many times as you have arbitrarily dictated.
 
Now sit back and enjoy sweet tears of UX designers and users. 



[Demo](https://scroller-jacker-demo.herokuapp.com/)

## Installation

```
$ npm install --save react-scroll-jacker
```

## Usage

1. Add Elements to ```<ReactScrollJacker>``` as its children.
2. (optional) set the scroll sensitivity
3. Sit back and enjoy scroll-jacking.

```javascript
import ReactScrollJacker from "react-scroll-jacker";

const ScrollerJackerTest = props => {
  return <ReactScrollJacker> 
      <ReactElement color="red"> Help! </ReactElement> 
      <ReactElement color="blue"> Our scroll has been hijacked! </ReactElement> 
      <ReactElement color="purple"> Wont somebody please think of the UX ? </ReactElement>
      <ReactElement color="green"> UX?? Where we are going, we dont need UX. </ReactElement>
      
      {/* you can add any number of ReactElements in here !! */}
    </ReactScrollJacker>
};
```
Elements show in the order they are added in.

## Props

### scrollSensitivity _(number[1-9]: optional)_
Decides how sensitive the scrolls are. Lower the number, more you have to scroll to transition to the next element. The default value is 7.

### stickyOffset *(number: optional)*
this sets the offset of the stickied element from the top of the viewbox.

### injectChildren *(optional)*
This will inject the _React.Children_ with props ```currentPage``` which returns the index of the currently rendered child and ```progress``` which returns a float between 0 and 1 representing the current progress to the next transition, 1 being 100%.

```javascript
  <ReactScrollJacker injectChildren height>
    <ReactElementOne> Help! </ReactElementOne>  
    <ReactElementOne> I did not ask for this! </ReactElementOne>
  </ReactScrollJacker>

   // Both ReactElementOnes will have get a prop currentPage that has the index of the current rendered child. 
```

This component is a regular div. _style_ and _className_ props are exposed. Style it however you wish.

## Under the hood
This component uses [stickybits](https://github.com/dollarshaveclub/stickybits) to make child elements sticky. Stickybits uses css property sticky as a default and provides fallback via JS for browsers that are not supported. 

## Todo
- [ ] Add Tests & webpack.
- [x] Add Demo.
- [ ] Add an option to pass down inject and not hide the children automatically.
- [ ] apologise to the UX designers and users.

## Patchnotes

###v0.1.5
 - Now able to pass the progress to the next transition as a prop ```progress``` it returns a float between 0 and 1, 1 being 100%.
  - This can be used to give some kind of visual feedback of progress to users and make scroll-jacking a bit more bearable.
