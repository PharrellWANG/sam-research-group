# Hash link scroll with offset

For *react-router-hash-link* to be able to scroll with offsets when the header is sticky:

After ``yarn``, in ``/lib/index.js``, 

right after ``element.scrollIntoView();`` add:

```javascript
var scrolledY = window.scrollY;

if(scrolledY){
  window.scroll(0, scrolledY - '[your header height in pixels]');
  //E.g.,  
  //window.scroll(0, scrolledY - 72);
}

**Note**:
Something strange but acceptable:

The above approach for scrolling with offset is not 
effective in when developing the app using ``yarn start``;

But it is effective when running the app using ``yarn start:production``.
```
