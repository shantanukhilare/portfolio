export const fantasyBackgroundStyles = `
  :root {
    --dark1: #0f1f2c;
    --dark2: #071e31;
    --dark3: #010d1d;
    --dark4: #010b1b;
  }
  
  .fantasy-background {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: radial-gradient(#02142b, var(--dark1));
    opacity: 0.7;
  }
  
  .moon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    top: 50px;
    left: 100px;
    background: rgba(216, 235, 185, 0.849);
    box-shadow: inset 10px 10px 20px var(--dark1),
      50px 50px 100px 80px rgba(145, 142, 142, 0.233);
    position: absolute;
  }
  
  .birds {
    width: 8px;
    height: 8px;
    background: var(--dark1);
    left: 100px;
    bottom: 250px;
    border-radius: 50%;
    animation: bird-move 1.5s linear infinite;
    position: absolute;
  }
  
  @keyframes bird-move {
    0% { margin-bottom: -2px; }
    25% { margin-bottom: 0px; }
    50% { margin-bottom: 2px; }
    75% { margin-bottom: 0px; }
    100% { margin-bottom: -2px; }
  }
  
  .ri-bird {
    left: 50px;
    bottom: 200px;
    animation-delay: 0.8s;
  }
  
  .ri-bird::before,
  .ri-bird::after {
    animation-delay: 0.8s;
  }
  
  .ri-bird1 {
    left: 0px;
    bottom: 230px;
    animation-delay: 0.2s;
  }
  
  .ri-bird1::before,
  .ri-bird1::after {
    animation-delay: 0.2s;
  }
  
  .birds::before {
    content: "";
    width: 20px;
    height: 5px;
    margin-left: -30px;
    background: var(--dark1);
    border-radius: 50%;
    position: absolute;
    animation: birds2 1.5s linear infinite;
  }
  
  .birds::after {
    content: "";
    width: 20px;
    height: 5px;
    margin-left: 10px;
    background: var(--dark1);
    border-radius: 50%;
    position: absolute;
    transform: rotate(-30deg);
    margin-top: -10px;
    animation: birds 1.5s linear infinite;
  }
  
  @keyframes birds {
    0% { transform: rotate(-30deg); margin-top: -5px; margin-left: 5px; }
    25% { transform: rotate(0deg); margin-top: 0px; }
    50% { transform: rotate(30deg); margin-top: 5px; margin-left: 5px; }
    75% { transform: rotate(0deg); margin-top: 0px; }
    100% { transform: rotate(-30deg); margin-top: -5px; margin-left: 5px; }
  }
  
  @keyframes birds2 {
    0% { transform: rotate(30deg); margin-top: -5px; margin-left: -15px; }
    25% { transform: rotate(0deg); margin-top: 0px; }
    50% { transform: rotate(-30deg); margin-top: 5px; margin-left: -15px; }
    75% { transform: rotate(0deg); margin-top: 0px; }
    100% { transform: rotate(30deg); margin-top: -5px; margin-left: -15px; }
  }
  
  .mount {
    background: #01142cc4;
    width: 400px;
    height: 150px;
    left: -100px;
    clip-path: polygon(50% 0, 100% 100%, 0% 100%, 0 100%);
    box-shadow: inset 50px 50px 50px var(--dark2);
    position: absolute;
  }
  
  .mo1 { left: -200px; height: 130px; }
  .mo2 { left: 500px; height: 130px; box-shadow: inset 50px 0px 50px var(--dark2); }
  .mo3 { left: 700px; height: 100px; width: 500px; box-shadow: inset 50px 0px 50px var(--dark2); }
  
  .entire {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 700px;
    height: 350px;
    position: relative;
    top: 200px;
    -webkit-box-reflect: below 0px;
  }
  
  .entire div { position: absolute; }
  
  .island {
    background: var(--dark3);
    box-shadow: inset 5px 5px 10px var(--dark2);
  }
  
  .stone1 { width: 100px; height: 40px; border-radius: 50% 30% 0 0; left: 0px; }
  .stone2 { width: 250px; height: 80px; border-radius: 100% 100% 0 0; left: 90px; box-shadow: inset 5px 5px 10px var(--dark2); }
  .stone3 { width: 300px; height: 60px; border-radius: 40% 100% 0 0; left: 300px; box-shadow: inset 0px 5px 10px var(--dark2); }
  .stone4 { width: 350px; height: 200px; bottom: -100px; border-radius: 150% 150%; left: 200px; clip-path: inset(0 0 50% 0); }
  
  .build {
    width: 50px;
    height: 150px;
    background: var(--dark3);
    bottom: 60px;
    box-shadow: inset 5px 2px 5px var(--dark2);
  }
  
  .windows {
    background: #926504ad;
    position: unset;
    float: left;
    width: 8px;
    height: 10px;
    margin: 20px;
    border: solid 1px #523a06b2;
    box-shadow: 0 0 20px 1px #d19106d2;
    border-radius: 50% 50% 0 0;
  }
  
  .Wa { margin-top: 50px; }
  .Wb { margin-top: 80px; background: #7e5705ad; }
  .Wc { margin-top: 110px; }
  
  .roof {
    width: 80px;
    height: 100px;
    background: var(--dark3);
    bottom: 150px;
    margin-left: -15px;
    clip-path: polygon(50% 0, 100% 100%, 0% 100%, 0 100%);
    box-shadow: inset 30px 2px 20px var(--dark2);
  }
  
  .chiminy {
    width: 30px;
    height: 50px;
    margin-left: 30px;
    bottom: 170px;
    box-shadow: inset 10px 2px 10px var(--dark2);
  }
  
  .tower-style {
    width: 50px;
    height: 150px;
    background: var(--dark3);
    right: 280px;
    bottom: 100px;
    box-shadow: inset 10px 10px 15px #071f33;
  }
  
  .tower-style-side {
    width: 40px;
    height: 150px;
    background: var(--dark3);
    right: 240px;
    bottom: 90px;
  }
  
  .tower-style-side .windows { width: 5px; margin-left: 10px; }
  .tower-style-side .ws1 { margin-left: 25px; width: 4px; }
  
  .windows-square {
    width: 70%;
    height: 25px;
    margin-left: 20%;
    margin-top: 50px;
  }
  
  .wm { margin-top: 60px; }
  .wm .edges { clip-path: polygon(0% 5%, 100% 0%, 100% 100%, 0 95%); }
  
  .edges {
    float: left;
    width: 35%;
    height: 40%;
    background: #926504ad;
    clip-path: polygon(0% 0, 100% 2%, 100% 98%, 0 100%);
    margin: 2.4px;
    box-shadow: inset 2px 2px 2px #201601;
  }
  
  .eve { width: 30%; height: 40%; }
  
  .tower-style-roof {
    width: 70px;
    height: 40px;
    background: var(--dark4);
    right: 260px;
    bottom: 210px;
    clip-path: polygon(0% 0%, 100% 0%, 70% 100%, 0 100%);
    box-shadow: inset 10px 10px 15px #071f33;
  }
  
  .tower-style-roof-back {
    background: var(--dark4);
    width: 70px;
    height: 30px;
    right: 230px;
    bottom: 220px;
    clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 0 100%);
  }
  
  .hall .windows-square { margin: 0; margin-left: 70%; margin-top: 10px; width: 30px; }
  
  .hall-roof {
    background: var(--dark3);
    width: 250px;
    height: 80px;
    bottom: 100px;
    left: 80px;
    box-shadow: inset 10px 10px 50px #051929;
    clip-path: polygon(40% 20%, 100% 10%, 100% 90%, 8% 90%);
  }
  
  .hall {
    background: var(--dark3);
    width: 220px;
    height: 40px;
    bottom: 70px;
    left: 130px;
    -webkit-box-reflect: right -90px;
  }
  
  .hall-pillars {
    width: 10px;
    height: 50px;
    bottom: 70px;
    left: 140px;
    box-shadow: inset 2px 2px 2px var(--dark2);
    background: var(--dark3);
  }
  
  .pillar {
    bottom: 50px;
    height: 40px;
    width: 20px;
    margin-left: -5px;
    box-shadow: inset 5px 5px 5px var(--dark2);
  }
  
  .p1 { left: 170px; width: 11px; height: 51px; }
  .r1 { bottom: 51px; height: 41px; }
  .p2 { left: 200px; width: 12px; height: 52px; }
  .r2 { bottom: 52px; height: 42px; }
  .p3 { left: 230px; width: 14px; height: 54px; }
  .r3 { bottom: 54px; height: 44px; }
  .p4 { left: 270px; width: 15px; height: 55px; }
  .r4 { bottom: 55px; height: 45px; }
  
  .reflect-blur {
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    position: absolute;
    margin-top: 350px;
    -webkit-box-reflect: none;
  }
  
  .c3 { left: 150px; width: 30px; height: 150px; bottom: 50px; }
  .c3 .roof { width: 60px; height: 80px; bottom: 150px; }
  .c3 .chiminy { width: 20px; height: 40px; margin-left: 20px; }
  .c3 .windows { width: 6px; }
  
  .c4 { left: 250px; width: 30px; height: 150px; bottom: 100px; display: flex; justify-content: center; }
  .c4 .roof { width: 60px; height: 20px; bottom: 180px; left: 0; z-index: 2; }
  .c4 .windows { width: 6px; margin-left: 10px; }
  
  .balcany {
    background: var(--dark3);
    bottom: 140px;
    width: 60px;
    height: 20px;
    box-shadow: inset 5px 5px 10px var(--dark2);
  }
  
  .roof-pillar {
    background: #d19106d2;
    width: 4px;
    height: 40px;
    bottom: 140px;
    margin-left: -50px;
    box-shadow: inset 2px 2px 5px var(--dark2);
    z-index: -2;
  }
  
  .rp1 { margin-left: -10px; }
  .rp2 { margin-left: 10px; background: var(--dark2) 41; z-index: 0; }
  .rp3 { margin-left: 50px; }
  
  .light {
    background: #f5c662d2;
    width: 10px;
    height: 10px;
    bottom: 160px;
    border-radius: 50px;
    z-index: -1;
    animation: glow 4s infinite;
  }
  
  @keyframes glow {
    0% { box-shadow: 0 0 10px 10px #d1910686, 0 0 50px 50px #d1910686; }
    50% { box-shadow: 0 0 10px 10px #d1910686, 0 0 30px 30px #d1910686; }
    100% { box-shadow: 0 0 10px 10px #d1910686, 0 0 50px 50px #d1910686; }
  }
  
  .fig-tree {
    width: 30px;
    height: 80px;
    left: -20px;
    display: flex;
    justify-content: center;
    -webkit-box-reflect: right 850px;
  }
  
  .branch {
    width: 30px;
    height: 25px;
    background: var(--dark3);
    margin-top: 20px;
    clip-path: polygon(50% 0, 100% 100%, 0% 100%, 0 100%);
    animation: wave 6s linear infinite;
  }
  
  .top { margin-top: 0px; height: 35px; animation: wave1 6s linear infinite; }
  .m2 { margin-top: 30px; width: 35px; animation: wave3 6s linear infinite; }
  .m3 { margin-top: 40px; width: 35px; animation: wave4 6s linear infinite; }
  .m4 { margin-top: 50px; width: 37px; animation: none; }
  .m5 { margin-top: 60px; width: 40px; animation: none; }
  
  .tr1 { left: -50px; }
  .tr1 .branch { width: 25px; animation-delay: 0.5s; }
  .tr1 .top { animation-delay: 0.5s; }
  .tr1 .m2 { animation-delay: 0.5s; }
  .tr1 .m3 { animation-delay: 0.5s; }
  
  .tr2 { left: -80px; }
  .tr2 .branch { animation-delay: 1s; }
  .tr2 .top { animation-delay: 1s; }
  .tr2 .m2 { animation-delay: 1s; }
  .tr2 .m3 { animation-delay: 1s; }
  
  .tr3 { left: 40px; }
  .tr3 .branch { animation-delay: 1.5s; }
  .tr3 .top { animation-delay: 1.5s; }
  .tr3 .m2 { animation-delay: 1.5s; }
  .tr3 .m3 { animation-delay: 1.5s; }
  
  .tr4 { left: -110px; }
  .tr4 .branch { animation-delay: 2s; }
  .tr4 .top { animation-delay: 2s; }
  .tr4 .m2 { animation-delay: 2s; }
  .tr4 .m3 { animation-delay: 2s; }
  
  .tr5 { left: -140px; }
  .tr5 .branch { width: 27px; animation-delay: 2.5s; }
  .tr5 .top { animation-delay: 2.5s; }
  .tr5 .m2 { animation-delay: 2.5s; }
  .tr5 .m3 { animation-delay: 2.5s; }
  
  .tr6 { left: -170px; }
  .tr6 .branch { animation-delay: 3s; }
  .tr6 .top { animation-delay: 3s; }
  .tr6 .m2 { animation-delay: 3s; }
  .tr6 .m3 { animation-delay: 3s; }
  
  .tr7 { left: -200px; }
  .tr7 .branch { width: 25px; animation-delay: 3.5s; }
  .tr7 .top { animation-delay: 3.5s; }
  .tr7 .m2 { animation-delay: 3.5s; }
  .tr7 .m3 { animation-delay: 3.5s; }
  
  .tr8 { left: -230px; }
  .tr8 .branch { animation-delay: 4s; }
  .tr8 .top { animation-delay: 4s; }
  .tr8 .m2 { animation-delay: 4s; }
  .tr8 .m3 { animation-delay: 4s; }
  
  .tr9 { left: -260px; }
  .tr9 .branch { width: 27px; animation-delay: 4.5s; }
  .tr9 .top { animation-delay: 4.5s; }
  .tr9 .m2 { animation-delay: 4.5s; }
  .tr9 .m3 { animation-delay: 4.5s; }
  
  .tr10 { left: -290px; }
  .tr10 .branch { animation-delay: 5s; }
  .tr10 .top { animation-delay: 5s; }
  .tr10 .m2 { animation-delay: 5s; }
  .tr10 .m3 { animation-delay: 5s; }
  
  @keyframes wave {
    0% { transform: rotate(0deg); margin-left: 0; }
    25% { transform: rotate(15deg); margin-left: 5px; }
    50% { transform: rotate(0deg); margin-left: 0; }
    75% { transform: rotate(-15deg); margin-left: -5px; }
    100% { transform: rotate(0deg); margin-left: 0; }
  }
  
  @keyframes wave1 {
    0% { transform: rotate(0deg); margin-left: 0; }
    25% { transform: rotate(10deg); margin-left: 4px; }
    50% { transform: rotate(0deg); margin-left: 0; }
    75% { transform: rotate(-10deg); margin-left: -4px; }
    100% { transform: rotate(0deg); margin-left: 0; }
  }
  
  @keyframes wave3 {
    0% { transform: rotate(0deg); margin-left: 0; }
    25% { transform: rotate(5deg); margin-left: 2px; }
    50% { transform: rotate(0deg); margin-left: 0; }
    75% { transform: rotate(-5deg); margin-left: -2px; }
    100% { transform: rotate(0deg); margin-left: 0; }
  }
  
  @keyframes wave4 {
    0% { transform: rotate(0deg); margin-left: 0; }
    25% { transform: rotate(2deg); margin-left: 1px; }
    50% { transform: rotate(0deg); margin-left: 0; }
    75% { transform: rotate(-2deg); margin-left: -1px; }
    100% { transform: rotate(0deg); margin-left: 0; }
  }
`
