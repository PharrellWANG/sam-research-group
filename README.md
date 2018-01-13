# Note:

For *react-router-hash-link* to bhe able to scroll with offsets when the header is sticky:
After ``yarn``, In ``/lib/index.js`` after ``element.scrollIntoView();`` add:

```javascript
var scrolledY = window.scrollY;

if(scrolledY){
  window.scroll(0, scrolledY - '[your header height in pixels]');
  //E.g.,  window.scroll(0, scrolledY - 64);
}
```
