## React Scroll Jacker 
React Scroll Jacker is a ruthless component that takes no ransom for his hijacked components. Rather, he hijacks scrolls for sweet tears of UX designers and users. Your hijacked scroll will only return after a set amount of pixel has been scrolled.

The component lets you use scrolling to transition between elements for a set amount of pixels, instead of using scroll to scroll the page like a sane person. Under the hood, it takes React Children and shows them one by one, depending on the scrolled distance.

Demo coming soon.

### Usage
```
  import React from "react";
  import ScrollJacker from 'scroll-jacker;

  const randomSFC = () => {
    return <ScrollJacker height={1000}>
      <ReactElementOne> Help! </ReactElementOne> 
      <ReactElementTwo> Our scroll has been hijacked! </ReactElementTwo> 
      <ReactElementThree> Won't somebody please think of the UX ? </ReactElementThree>
      
      // you can add any number of ReactElements in here !!
    </ScrollJacker>
  };
```

### Props

####height: number **(required )** 
This sets the total amount of pixel that needs to be scrolled before the hijacker lets your precious scroll go. 

This is divided by the number of the React.Children elements and used to create the boundary between the elements. For example, if the height is 400 and there are 4 React.Children, from 0px~99px, it will show the first child, 100px~199px will show the second child and so on.

####stickyOffset: number *(Optional)*
this sets the offset of the stickied element from the top of the viewbox.

####injectChildren: {} *(Optional)*
This will inject the React.Children with a prop({ currentPage: number }).

The component is a regular div. _style_ and _className_ props are exposed to style it however you wish.

### Todo
[] Add Tests.
[] Add Demo.
[] Add option to pass down inject and not hide the children automatically.
[] apologise to the UX designers and users.



