## Requirements

*NodeJS 4+*

https://nodejs.org

## Installation

Clone repository into themes folder


```
cd themes/semantica
npm install
```
Install semantic ui in libs/semantic folder.
Set output folder to vendor/semantic

## GULP Tasks

- sass ( compile all source in ./scss )
- jshint ( check all scripts in ./scss )
- clean ( remove all from ./vendor )
- semantic ( rebuild semantic ui to ./vendor/semantic )
- concat ( get all js from bower components and bundle these in ./vendor/js )
- concat_css ( get all css from bower components and bundle these in ./vendor/css )
- watch ( watch all bower, scss and js files )
- rebuild ( clean all and rebuild all )

## Add another sass library

This only works with bower libraries now

```
bower install bourbon --save 
```

In your scss file
```
@import 'bourbon';
```
ready...

## Add another js/css library

```
bower install captionss --save 
```

ready...
