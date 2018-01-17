# React Scroll Jacker 
React Scroll Jacker is a ruthless component that takes no ransom for his hijacked components. Rather, he hijacks scrolls for sweet tears of UX designers and users. Your hijacked scroll will only return after a set amount of pixel has been scrolled.

The component lets you use scrolling to transition between elements for a set amount of pixels, instead of using scroll to scroll the page like a sane person. Under the hood, it takes React Children and shows them one by one, depending on the scrolled distance.

Demo coming soon.

## Usage
```
  import React from "react";
  import ReactScrollJacker from 'react-scroll-jacker;

  const randomSFC = () => {
    return <ReactScrollJacker height={1000}>
      <ReactElementOne> Help! </ReactElementOne> 
      <ReactElementTwo> Our scroll has been hijacked! </ReactElementTwo> 
      <ReactElementThree> Won't somebody please think of the UX ? </ReactElementThree>
      
      // you can add any number of ReactElements in here !!
    </ReactScrollJacker>
  };
```

## Props

#### height *(number: required )*
This sets the total amount of pixel that needs to be scrolled before the hijacker lets your precious scroll go. 

This is divided by the number of the React.Children elements and used to create boundaries between the elements. For example, let's say the height is 400 and there are 4 _React.Children_. From 0px to 99px, it will show the first child, 100px to 199px will show the second child and so on.

#### stickyOffset *(number: optional)*
this sets the offset of the stickied element from the top of the viewbox.

#### injectChildren *(optional)*
This will inject the _React.Children_ with a prop({ currentPage: number }).
```
  <ReactScrollJacker injectChildren height={1000}>
    <ReactElementOne> Help! </ReactElementOne>  // ReactElementOne will have get a prop  _currentPage_. 
    <ReactElementOne> I didn't ask for this! </ReactElementOne>
  </ReactScrollJacker>
```

This component is a regular div. _style_ and _className_ props are exposed. Style it however you wish.

## Todo
- [] Add Tests.
- [] Add Demo.
- [] Add option to pass down inject and not hide the children automatically.
- [] apologise to the UX designers and users.



