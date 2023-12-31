(()=>{"use strict";var n,r={948:(n,r,A)=>{A.d(r,{Z:()=>l});var e=A(537),i=A.n(e),t=A(645),a=A.n(t),o=A(667),d=A.n(o),p=new URL(A(772),A.b),C=a()(i()),s=d()(p);C.push([n.id,`#restaurants {\n  display: grid;\n  grid-row-gap: 16px;\n}\n.wrapper details{\n  display: grid;\n}\n\n@media screen and (max-width: 499px) {\n\n  .header_inner {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  #menu {\n    font-size: 20px;\n    text-align: center;\n    color: white;\n  }\n  .contents {\n    padding: 0;\n    margin: 60px 0;\n  }\n  .city {\n    font-size: small;\n    font-weight: 500;\n  }\n  .hero {\n    min-height: 490px;\n  }\n\n  .hero__tagline {\n    font-size: 35px;\n  }\n\n  .nav {\n    z-index: 10;\n    background-color: #3d0c11;\n    position: absolute;\n\n    /* This trasform moves the drawer off canvas. */\n    -webkit-transform: translate(-510px, 3.5em);\n    transform: translate(-510px, 3.5em);\n\n    /* Optionally, we animate the drawer. */\n    transition: transform 0.3s ease;\n  }\n\n  .open {\n    -webkit-transform: translate(0, 3.5em);\n    transform: translate(0, 3.5em);\n  }\n\n  .nav_list {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n  }\n\n  .nav_item {\n    display: inline;\n    border: 1px solid #e0e0e0;\n    width: 100%;\n    text-align: center;\n    align-items: center;\n    line-height: 44x;\n  }\n  #restaurants {\n    padding: 16px 32px 32px 32px;\n    text-align: center;\n  }\n  .header__menu {\n    background-color: #3d0c11;\n    border: none;\n  }\n  .rating {\n    top: 145px;\n    right: 0px;\n  }\n\n  footer {\n    font-size: 10px;\n  }\n\n  #drawer {\n    width: 100%;\n  }\n\n  /*detail*/\n  .wrapper_details{\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  \n}\n\n@media screen and (min-width: 500px) {\n  .header__menu {\n    display: none;\n  }\n  .restaurant-item__header {\n    max-height: 275px;\n  }\n  .title_name {\n    font-size: large;\n  }\n  .rating {\n    top: 180px;\n    right: 0px;\n  }\n\n  .wrapper_details{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media screen and (min-width: 650px) {\n  .description {\n    font-size: 14px;\n  }\n  .city {\n    font-size: 18px;\n  }\n  .rating {\n    font-size: 18px;\n  }\n  .title {\n    font-size: 18px;\n  }\n  footer {\n    font-size: 13px;\n}\n}\n\n\n@media screen and (min-width: 700px) {\n  \n  #restaurants {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 10px;\n    grid-row-gap: 16px;\n  }\n  .rating {\n    top: 170px;\n    right: 0px;\n  }\n  .wrapper_details{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  .img_detail{\n    max-height: 455px;\n  }\n  footer {\n    font-size: 11px;\n  }\n}\n\n@media screen and (max-width: 700px) {\n  .hero {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n      url(${s});\n  }\n}\n\n\n@media screen and (min-width: 800px) {\n  .nav__list {\n    max-width: 800px;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  .restaurant__poster {\n    max-height: 150px;\n  }\n\n  #restaurants {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  .rating {\n    top: 128px;\n    right: 0;\n  }\n  .restaurant__menu{\n    justify-content: space-between;\n    padding-right: 20px;\n    padding-left: 20px;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .restaurant__poster {\n    max-height: 175px;\n  }\n  .rating {\n    top: 140px;\n    right: 0;\n  }\n}\n@media screen and (min-width: 1100px) {\n  .restaurant__poster {\n    max-height: 200px;\n  }\n  .rating {\n    top: 140px;\n    right: 0;\n  }\n}\n@media screen and (min-width: 1200px) {\n  main {\n    max-width: 1350px;\n  }\n  .hero {\n    min-width: 1000px;\n  }\n  .contents {\n    max-width: 1200px;\n  }\n}\n`,"",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;;AAEA;;EAEE;IACE,aAAa;IACb,0BAA0B;EAC5B;EACA;IACE,eAAe;IACf,kBAAkB;IAClB,YAAY;EACd;EACA;IACE,UAAU;IACV,cAAc;EAChB;EACA;IACE,gBAAgB;IAChB,gBAAgB;EAClB;EACA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,yBAAyB;IACzB,kBAAkB;;IAElB,+CAA+C;IAC/C,2CAA2C;IAC3C,mCAAmC;;IAEnC,uCAAuC;IACvC,+BAA+B;EACjC;;EAEA;IACE,sCAAsC;IACtC,8BAA8B;EAChC;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;EAClB;EACA;IACE,4BAA4B;IAC5B,kBAAkB;EACpB;EACA;IACE,yBAAyB;IACzB,YAAY;EACd;EACA;IACE,UAAU;IACV,UAAU;EACZ;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA,SAAS;EACT;IACE,aAAa;IACb,0BAA0B;EAC5B;;AAEF;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,iBAAiB;EACnB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,UAAU;IACV,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,8BAA8B;EAChC;AACF;;AAEA;EACE;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;AACnB;AACA;;;AAGA;;EAEE;IACE,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,kBAAkB;EACpB;EACA;IACE,UAAU;IACV,UAAU;EACZ;EACA;IACE,aAAa;IACb,kCAAkC;EACpC;EACA;IACE,iBAAiB;EACnB;EACA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE;6CACyC;EAC3C;AACF;;;AAGA;EACE;IACE,gBAAgB;IAChB,cAAc;EAChB;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,kCAAkC;EACpC;EACA;IACE,UAAU;IACV,QAAQ;EACV;EACA;IACE,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;EACpB;AACF;AACA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,UAAU;IACV,QAAQ;EACV;AACF;AACA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,UAAU;IACV,QAAQ;EACV;AACF;AACA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;AACF",sourcesContent:['#restaurants {\r\n  display: grid;\r\n  grid-row-gap: 16px;\r\n}\r\n.wrapper details{\r\n  display: grid;\r\n}\r\n\r\n@media screen and (max-width: 499px) {\r\n\r\n  .header_inner {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n  }\r\n  #menu {\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: white;\r\n  }\r\n  .contents {\r\n    padding: 0;\r\n    margin: 60px 0;\r\n  }\r\n  .city {\r\n    font-size: small;\r\n    font-weight: 500;\r\n  }\r\n  .hero {\r\n    min-height: 490px;\r\n  }\r\n\r\n  .hero__tagline {\r\n    font-size: 35px;\r\n  }\r\n\r\n  .nav {\r\n    z-index: 10;\r\n    background-color: #3d0c11;\r\n    position: absolute;\r\n\r\n    /* This trasform moves the drawer off canvas. */\r\n    -webkit-transform: translate(-510px, 3.5em);\r\n    transform: translate(-510px, 3.5em);\r\n\r\n    /* Optionally, we animate the drawer. */\r\n    transition: transform 0.3s ease;\r\n  }\r\n\r\n  .open {\r\n    -webkit-transform: translate(0, 3.5em);\r\n    transform: translate(0, 3.5em);\r\n  }\r\n\r\n  .nav_list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .nav_item {\r\n    display: inline;\r\n    border: 1px solid #e0e0e0;\r\n    width: 100%;\r\n    text-align: center;\r\n    align-items: center;\r\n    line-height: 44x;\r\n  }\r\n  #restaurants {\r\n    padding: 16px 32px 32px 32px;\r\n    text-align: center;\r\n  }\r\n  .header__menu {\r\n    background-color: #3d0c11;\r\n    border: none;\r\n  }\r\n  .rating {\r\n    top: 145px;\r\n    right: 0px;\r\n  }\r\n\r\n  footer {\r\n    font-size: 10px;\r\n  }\r\n\r\n  #drawer {\r\n    width: 100%;\r\n  }\r\n\r\n  /*detail*/\r\n  .wrapper_details{\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n  }\r\n  \r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  .header__menu {\r\n    display: none;\r\n  }\r\n  .restaurant-item__header {\r\n    max-height: 275px;\r\n  }\r\n  .title_name {\r\n    font-size: large;\r\n  }\r\n  .rating {\r\n    top: 180px;\r\n    right: 0px;\r\n  }\r\n\r\n  .wrapper_details{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  .description {\r\n    font-size: 14px;\r\n  }\r\n  .city {\r\n    font-size: 18px;\r\n  }\r\n  .rating {\r\n    font-size: 18px;\r\n  }\r\n  .title {\r\n    font-size: 18px;\r\n  }\r\n  footer {\r\n    font-size: 13px;\r\n}\r\n}\r\n\r\n\r\n@media screen and (min-width: 700px) {\r\n  \r\n  #restaurants {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-column-gap: 10px;\r\n    grid-row-gap: 16px;\r\n  }\r\n  .rating {\r\n    top: 170px;\r\n    right: 0px;\r\n  }\r\n  .wrapper_details{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n  .img_detail{\r\n    max-height: 455px;\r\n  }\r\n  footer {\r\n    font-size: 11px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  .hero {\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\r\n      url("../public/hero-image_2-small.jpg");\r\n  }\r\n}\r\n\r\n\r\n@media screen and (min-width: 800px) {\r\n  .nav__list {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n  .restaurant__poster {\r\n    max-height: 150px;\r\n  }\r\n\r\n  #restaurants {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n  .rating {\r\n    top: 128px;\r\n    right: 0;\r\n  }\r\n  .restaurant__menu{\r\n    justify-content: space-between;\r\n    padding-right: 20px;\r\n    padding-left: 20px;\r\n  }\r\n}\r\n@media screen and (min-width: 1024px) {\r\n  .restaurant__poster {\r\n    max-height: 175px;\r\n  }\r\n  .rating {\r\n    top: 140px;\r\n    right: 0;\r\n  }\r\n}\r\n@media screen and (min-width: 1100px) {\r\n  .restaurant__poster {\r\n    max-height: 200px;\r\n  }\r\n  .rating {\r\n    top: 140px;\r\n    right: 0;\r\n  }\r\n}\r\n@media screen and (min-width: 1200px) {\r\n  main {\r\n    max-width: 1350px;\r\n  }\r\n  .hero {\r\n    min-width: 1000px;\r\n  }\r\n  .contents {\r\n    max-width: 1200px;\r\n  }\r\n}\r\n'],sourceRoot:""}]);const l=C},890:(n,r,A)=>{A.d(r,{Z:()=>l});var e=A(537),i=A.n(e),t=A(645),a=A.n(t),o=A(667),d=A.n(o),p=new URL(A(847),A.b),C=a()(i()),s=d()(p);C.push([n.id,`* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: "Poppins", sans-serif;\n  font-size: 12px;\n  color: #000000;\n  background-color: rgb(247, 151, 151);\n  display: flex;\n  flex-direction: column;\n  min-height: 10vh;\n}\n\nbutton {\n  box-sizing: border-box;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n/*skip content*/\n.skip-link {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: -100%;\n  left: 0;\n  z-index: 99;\n  background-color: white;\n  font-size: 1em;\n  padding: 3px;\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n  color: black;\n  text-decoration: none;\n  z-index: 100;\n  min-height: 44px;\n  min-width: 44px;\n  margin-bottom: 100px;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n\n/*header*/\na {\n  text-decoration: none;\n  color: white;\n  box-sizing: border-box;\n  min-width: 44px;\n  min-height: 44px;\n}\n\ndiv {\n  display: block;\n}\n\nli {\n  list-style: none;\n}\n\nimg {\n  overflow-clip-margin: content-box;\n  overflow: clip;\n}\n\nheader {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  background-color: #ae0b0b;\n  position: -webkit-sticky;\n  position: fixed;\n  margin-bottom: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\n\n.header_inner {\n  margin-top: 0.5em;\n  display: grid;\n}\n\n.header_title {\n  display: flex;\n  width: 10rem;\n  text-align: center;\n  line-height: 24px;\n  align-items: center;\n  margin-left: 2rem;\n  color: white\n}\n\n.nav_list {\n  display: flex;\n  flex-direction: row;\n  gap: 1em;\n  margin-top: 0.7em;\n  text-align: center;\n  justify-content: center;\n  font-weight: bold;\n}\n\n.nav_item {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  line-height: 30px;\n  text-transform: uppercase;\n  margin-left: auto;\n  margin-right: 2rem;\n}\n\n.nav_item:hover {\n  color: #140b04;\n  \n}\n\n\n\n\n/*akhir dari header */\n\n/* main*/\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n/*awal dari hero tag*/\n.hero {\n  display: flex;\n  align-items: center;\n  min-height: 624px;\n  width: 100%;\n  text-align: center;\n  background-position: center;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n    url(${s});\n  background-color: white;\n  background-position: center;\n  background-size: cover;\n}\n\n.hero::after {\n  content: "";\n  display: block;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(0deg, rgb(247, 151, 151) 18%, rgba(0, 0, 0, 0) 30%);\n}\n\n\n.hero__inner {\n  color: white;\n  margin: 0 auto;\n  max-width: auto;\n}\n\n.hero__title {\n  font-weight: 500;\n  font-size: 50px;\n  opacity: 1;\n}\n\n.hero__tagline {\n  margin-top: 16px;\n  font-size: 30px;\n  font-weight: 300;\n}\n\n/* akhir dari hero tagline */\n\n#explore {\n  width: 100%;\n  margin: 30px auto;\n  text-align: center;\n}\n\n#kosong {\n  width: 100%;\n  margin: 30px auto;\n  text-align: center;\n}\n\n/* mulai content*/\n.contents {\n  width: 100%;\n  margin: auto auto;\n  padding: 32px;\n}\n\n#restaurants {\n  margin: 32px auto auto;\n  text-align: center;\n}\n\n.restaurant-item {\n  margin: 16px 0;\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  background-color: rgb(255, 255, 255);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);\n}\n.restaurant_name{\n  color: #424242;\n  align-items: center;\n}\n.city {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-color: #f13661;\n  padding: 4px;\n  color: rgb(0, 0, 0);\n}\n.rating {\n  position: absolute;\n  border-radius: 5px;\n  top: 0px;\n  right: 0px;\n  background-color: #f13661;\n  color: white;\n  padding: 4px;\n  text-shadow: 2px 2px 6px rgba(0, 0, 0, 9);\n}\n.restaurant-item__content {\n  padding: 16px 32px 32px 32px;\n}\n\n.restaurant__poster {\n  width: 100%;\n  max-height: 200px;\n}\n\n\n/*detail restaurants*/\n\n.wrapper_details{\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.content_detail{\n  border-style: solid;\n  margin: 20px;\n  background-color: rgb(177, 138, 138);\n  border-radius: 8px;\n  padding: 20px\n}\n.img_detail {\n  width: 100%;\n  position: relative;}\n\n.restaurant__name {\n  text-align: center;\n}\n\n.restaurant__menu {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 10px;\n}\n\n.title_info{\n  text-align: center;\n}\n\n/*\n  Like\n*/\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  z-index: 100;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: rgb(255, 255, 255);\n  cursor: pointer;\n}\n\n\nfooter {\n  background-color: #ae0b0b;\n  color: #ffffff;\n  padding: 2rem 0;\n  text-align: center;\n  font-size: large;\n  padding: 30px;\n}\n\nfooter a {\n  color: #ffffff;\n  margin-left: 10px;\n  margin-right: 10px;\n  height: 45px;\n}\n\nfooter p {\n  height: 45px;\n}\n\na.fa-instagram, a.fa-linkedin-in, a.fa-github {\n  font-size: 44px;\n  \n}\n\n.fa-instagram:hover, .fa-linkedin-in:hover, .fa-github:hover {\n  font-size: 48px; \n  padding: 12px;\n}\n\n`,"",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"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",sourcesContent:['* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: "Poppins", sans-serif;\r\n  font-size: 12px;\r\n  color: #000000;\r\n  background-color: rgb(247, 151, 151);\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 10vh;\r\n}\r\n\r\nbutton {\r\n  box-sizing: border-box;\r\n  min-width: 44px;\r\n  min-height: 44px;\r\n}\r\n\r\n/*skip content*/\r\n.skip-link {\r\n  display: flex;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: -100%;\r\n  left: 0;\r\n  z-index: 99;\r\n  background-color: white;\r\n  font-size: 1em;\r\n  padding: 3px;\r\n  border-top-right-radius: 0.5rem;\r\n  border-bottom-right-radius: 0.5rem;\r\n  color: black;\r\n  text-decoration: none;\r\n  z-index: 100;\r\n  min-height: 44px;\r\n  min-width: 44px;\r\n  margin-bottom: 100px;\r\n}\r\n\r\n.skip-link:focus {\r\n  top: 0;\r\n}\r\n\r\n\r\n/*header*/\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n  box-sizing: border-box;\r\n  min-width: 44px;\r\n  min-height: 44px;\r\n}\r\n\r\ndiv {\r\n  display: block;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nimg {\r\n  overflow-clip-margin: content-box;\r\n  overflow: clip;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  background-color: #ae0b0b;\r\n  position: -webkit-sticky;\r\n  position: fixed;\r\n  margin-bottom: auto;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 999;\r\n}\r\n\r\n.header_inner {\r\n  margin-top: 0.5em;\r\n  display: grid;\r\n}\r\n\r\n.header_title {\r\n  display: flex;\r\n  width: 10rem;\r\n  text-align: center;\r\n  line-height: 24px;\r\n  align-items: center;\r\n  margin-left: 2rem;\r\n  color: white\r\n}\r\n\r\n.nav_list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 1em;\r\n  margin-top: 0.7em;\r\n  text-align: center;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n}\r\n\r\n.nav_item {\r\n  box-sizing: border-box;\r\n  display: inline-block;\r\n  width: 100%;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  text-transform: uppercase;\r\n  margin-left: auto;\r\n  margin-right: 2rem;\r\n}\r\n\r\n.nav_item:hover {\r\n  color: #140b04;\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n/*akhir dari header */\r\n\r\n/* main*/\r\n\r\nmain {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n/*awal dari hero tag*/\r\n.hero {\r\n  display: flex;\r\n  align-items: center;\r\n  min-height: 624px;\r\n  width: 100%;\r\n  text-align: center;\r\n  background-position: center;\r\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\r\n    url("../public/hero-image_2.jpg");\r\n  background-color: white;\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.hero::after {\r\n  content: "";\r\n  display: block;\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  background: linear-gradient(0deg, rgb(247, 151, 151) 18%, rgba(0, 0, 0, 0) 30%);\r\n}\r\n\r\n\r\n.hero__inner {\r\n  color: white;\r\n  margin: 0 auto;\r\n  max-width: auto;\r\n}\r\n\r\n.hero__title {\r\n  font-weight: 500;\r\n  font-size: 50px;\r\n  opacity: 1;\r\n}\r\n\r\n.hero__tagline {\r\n  margin-top: 16px;\r\n  font-size: 30px;\r\n  font-weight: 300;\r\n}\r\n\r\n/* akhir dari hero tagline */\r\n\r\n#explore {\r\n  width: 100%;\r\n  margin: 30px auto;\r\n  text-align: center;\r\n}\r\n\r\n#kosong {\r\n  width: 100%;\r\n  margin: 30px auto;\r\n  text-align: center;\r\n}\r\n\r\n/* mulai content*/\r\n.contents {\r\n  width: 100%;\r\n  margin: auto auto;\r\n  padding: 32px;\r\n}\r\n\r\n#restaurants {\r\n  margin: 32px auto auto;\r\n  text-align: center;\r\n}\r\n\r\n.restaurant-item {\r\n  margin: 16px 0;\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  background-color: rgb(255, 255, 255);\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);\r\n}\r\n.restaurant_name{\r\n  color: #424242;\r\n  align-items: center;\r\n}\r\n.city {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  background-color: #f13661;\r\n  padding: 4px;\r\n  color: rgb(0, 0, 0);\r\n}\r\n.rating {\r\n  position: absolute;\r\n  border-radius: 5px;\r\n  top: 0px;\r\n  right: 0px;\r\n  background-color: #f13661;\r\n  color: white;\r\n  padding: 4px;\r\n  text-shadow: 2px 2px 6px rgba(0, 0, 0, 9);\r\n}\r\n.restaurant-item__content {\r\n  padding: 16px 32px 32px 32px;\r\n}\r\n\r\n.restaurant__poster {\r\n  width: 100%;\r\n  max-height: 200px;\r\n}\r\n\r\n\r\n/*detail restaurants*/\r\n\r\n.wrapper_details{\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.content_detail{\r\n  border-style: solid;\r\n  margin: 20px;\r\n  background-color: rgb(177, 138, 138);\r\n  border-radius: 8px;\r\n  padding: 20px\r\n}\r\n.img_detail {\r\n  width: 100%;\r\n  position: relative;}\r\n\r\n.restaurant__name {\r\n  text-align: center;\r\n}\r\n\r\n.restaurant__menu {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  margin-top: 10px;\r\n}\r\n\r\n.title_info{\r\n  text-align: center;\r\n}\r\n\r\n/*\r\n  Like\r\n*/\r\n.like {\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #db0000;\r\n  z-index: 100;\r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n  \r\n  font-size: 18px;\r\n  color: rgb(255, 255, 255);\r\n  cursor: pointer;\r\n}\r\n\r\n\r\nfooter {\r\n  background-color: #ae0b0b;\r\n  color: #ffffff;\r\n  padding: 2rem 0;\r\n  text-align: center;\r\n  font-size: large;\r\n  padding: 30px;\r\n}\r\n\r\nfooter a {\r\n  color: #ffffff;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  height: 45px;\r\n}\r\n\r\nfooter p {\r\n  height: 45px;\r\n}\r\n\r\na.fa-instagram, a.fa-linkedin-in, a.fa-github {\r\n  font-size: 44px;\r\n  \r\n}\r\n\r\n.fa-instagram:hover, .fa-linkedin-in:hover, .fa-github:hover {\r\n  font-size: 48px; \r\n  padding: 12px;\r\n}\r\n\r\n'],sourceRoot:""}]);const l=C},362:(n,r,A)=>{var e=A(379),i=A.n(e),t=A(795),a=A.n(t),o=A(569),d=A.n(o),p=A(565),C=A.n(p),s=A(216),l=A.n(s),E=A(589),g=A.n(E),B=A(948),m={};m.styleTagTransform=g(),m.setAttributes=C(),m.insert=d().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),i()(B.Z,m),B.Z&&B.Z.locals&&B.Z.locals},915:(n,r,A)=>{var e=A(379),i=A.n(e),t=A(795),a=A.n(t),o=A(569),d=A.n(o),p=A(565),C=A.n(p),s=A(216),l=A.n(s),E=A(589),g=A.n(E),B=A(890),m={};m.styleTagTransform=g(),m.setAttributes=C(),m.insert=d().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),i()(B.Z,m),B.Z&&B.Z.locals&&B.Z.locals}},A={};function e(n){var i=A[n];if(void 0!==i)return i.exports;var t=A[n]={id:n,exports:{}};return r[n](t,t.exports,e),t.exports}e.m=r,n=[],e.O=(r,A,i,t)=>{if(!A){var a=1/0;for(C=0;C<n.length;C++){for(var[A,i,t]=n[C],o=!0,d=0;d<A.length;d++)(!1&t||a>=t)&&Object.keys(e.O).every((n=>e.O[n](A[d])))?A.splice(d--,1):(o=!1,t<a&&(a=t));if(o){n.splice(C--,1);var p=i();void 0!==p&&(r=p)}}return r}t=t||0;for(var C=n.length;C>0&&n[C-1][2]>t;C--)n[C]=n[C-1];n[C]=[A,i,t]},e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var A in r)e.o(r,A)&&!e.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:r[A]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var A=r.getElementsByTagName("script");if(A.length)for(var i=A.length-1;i>-1&&!n;)n=A[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{e.b=document.baseURI||self.location.href;var n={400:0};e.O.j=r=>0===n[r];var r=(r,A)=>{var i,t,[a,o,d]=A,p=0;if(a.some((r=>0!==n[r]))){for(i in o)e.o(o,i)&&(e.m[i]=o[i]);if(d)var C=d(e)}for(r&&r(A);p<a.length;p++)t=a[p],e.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return e.O(C)},A=self.webpackChunkrajarasa=self.webpackChunkrajarasa||[];A.forEach(r.bind(null,0)),A.push=r.bind(null,A.push.bind(A))})(),e.nc=void 0;var i=e.O(void 0,[897,2,193,337,268],(()=>e(253)));i=e.O(i)})();
//# sourceMappingURL=app~4e5ec22b.bundle.js.map