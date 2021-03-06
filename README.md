# React-Client:
Just a quick-start application for small projects, prototyping, and hackathons. Compiled with babel, and assumes development will happen with ES6 syntax. 

- React is compiled with babel, via Webpack and is set up for hot-loading on development. Routing provided via react-router
- Styles are rendered via PostCSS, locally to the module.


## Prerendering
Even though this is a static seed, we can still benefit from some server-side goodness.

**Why prerender?**

Prerendering allows for (limited) SEO on a static site, and when combined with async loading, it helps increase the percieved speed of your application.

The ```prerender.js``` file also provides a pattern for server side rendering, should you choose to upgrade your project to a full node stack. There is a server side seed in progress over [here](https://github.com/conmused/react-server), but currently lacks all the bells and whistles of this one.


## Installation

Clone the repo:
```
git clone https://github.com/conmused/react-client.git
```

Install npm packages:
```
npm install
```

Run webpack in development mode, with webpack hot loader:
```
npm run serve
```

Run webpack in production mode, prerendering index.html:
```
npm run dist
```

## Changelog

- Depreciation of Browserify Stack. Server Side rendering undergoing rework.

## License
[BSD](http://opensource.org/licenses/bsd-license.php)
Copyright (c) 2015, Matthew Potter
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
