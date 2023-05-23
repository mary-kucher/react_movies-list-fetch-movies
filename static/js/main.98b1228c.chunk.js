(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(6),s=c.n(i),a=(c(13),c(8)),n=c(2),r=c(1),l=(c(14),c(15),c(16),c(0)),d=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(d,{movie:e},e.imdbId)}))})},j=c(7),m=c.n(j);c(18);var b=function(e){var t=e.addingMovies,c=Object(r.useState)(""),i=Object(n.a)(c,2),s=i[0],a=i[1],o=Object(r.useState)(null),j=Object(n.a)(o,2),b=j[0],u=j[1],v=Object(r.useState)(""),h=Object(n.a)(v,2),O=h[0],x=h[1],f=Object(r.useState)(!1),p=Object(n.a)(f,2),g=p[0],N=p[1],y=function(){var e;N(!0),(e=s,fetch("".concat("https://www.omdbapi.com/?i=tt3896198&apikey=8f053653","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))).then((function(e){var t;e.Error?x(e.Error):u({title:(t=e).Title,description:t.Plot,imgUrl:"N/A"!==t.Poster?t.Poster:"https://via.placeholder.com/360x270.png?text=no%20preview",imdbUrl:"https://www.imdb.com/title/".concat(t.imdbID),imdbId:t.imdbID})})).finally((function(){return N(!1)}))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input",value:s,onChange:function(e){a(e.target.value),x("")}})}),O.length&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:O})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button is-light",{"is-loading":g}),disabled:!s.length,onClick:function(e){e.preventDefault(),y()},children:"Find a movie"})}),b&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){t(b),a(""),u(null)},children:"Add to the list"})})]})]}),b&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(d,{movie:b})]})]})},u=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(b,{addingMovies:function(e){c.find((function(t){return t.imdbId===e.imdbId}))||i((function(t){return[].concat(Object(a.a)(t),[e])}))}})})]})};s.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.98b1228c.chunk.js.map