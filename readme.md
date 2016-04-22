## About this
This is an angular module with a set of directives that I've found useful for
implementing some UI behaviors related to focus.

The directives are:
- focusOnShow: sets the focus on an element when the attribute focus-on-show
changes to a non null, undefined nor false value
- diva: used mainly for self-destructable messages. It shows an element with the
diva attribute when its value is true. Initially, this element will be visible for
a defined set of milliseconds (defined by dull-time) before disappearing again,
if the user hovers the mouse pointer over the element then it won't disappear
until some time (wait-to-fade) has passed after the mouse leaves the element. The
element won't disappear while the mouse hovers the element, no matter how many
times it has left it before.
- dispersed: makes impossible to focus the marked element, triggering a blur event
as soon as the element is clicked on.

## Version
v1.0

## License

Licensed under MIT.
