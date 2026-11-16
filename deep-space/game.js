{
const C=64, NS="http://www.w3.org/2000/svg";
const COL={r:{n:"Red",a:"#ff7a6a",b:"#b3261e"},b:{n:"Blue",a:"#78b8ff",b:"#1f4fbf"},g:{n:"Green",a:"#86e08f",b:"#1d7f37"},y:{n:"Yellow",a:"#ffe37e",b:"#c98a00"},v:{n:"Purple",a:"#c9a2ff",b:"#5b2bb3"},o:{n:"Orange",a:"#ffbf73",b:"#c25a00"}};
const GATE={R:"r",B:"b",G:"g",Y:"y",I:"v",L:"o"},PAINT={"1":"r","2":"b","3":"g","4":"y","5":"v","6":"o"};
const gateCol=ch=>GATE[ch]||GATE[ch.toUpperCase()]||null;
/*LEVELS*/
const LV=[
 {name:"Nebula Bloom",hint:"Drag a planet from the rack onto a launch tube and let go (or tap a planet, then tap a tube). New: nebula clouds repaint any planet that drifts through them. Every planet you have is the wrong color, so route them through the right cloud. Two spare planets.",W:7,H:7,funnels:[1,5],grid:[".......",".....O.",".2.....",".......",".Z...3.",".......",".....V."],bins:{1:["b",2],5:["g",2]},supply:{r:6},fog:[]},
 {name:"Twin Thrusters",hint:"New: two sets of deflector vanes. The blue switch flips every blue vane; the orange switch flips every orange vane. Vanes also flip on their own after each planet passes. Two spare planets.",W:7,H:8,funnels:[1,3,5],grid:[".......",".S.Z.W.",".......",".V.F.A.",".......","..J....",".......","......."],bins:{1:["y",1],3:["b",1],4:["r",2],5:["g",1]},supply:{y:2,b:1,r:3,g:1},fog:[]},
 {name:"Dark Matter",hint:"New: dark matter. Shaded panels hide part of the machine until a planet passes through and lights it up. Watch the first planets closely. Two spare planets.",W:9,H:8,funnels:[2,6],grid:[".........",".........","..F...f..",".........",".V.r...A.",".....B...","..O......","........."],bins:{1:["b",2],4:["r",2],6:["r",1],7:["b",1]},supply:{r:4,b:4},fog:[[3,2,6,6]]},
 {name:"Six-Planet Shuffle",hint:"Six colors now: purple and orange join the fleet. Force fields send matching planets left (solid side) and everything else right, or the reverse when the stripe is on the right. Two spare planets.",W:11,H:9,funnels:[2,5,8],grid:["...........","...........","..R..I..Y..","...........",".A.5.......","......L..3.","...O.......",".Z.........","..........."],bins:{1:["r",1],3:["v",1],4:["v",1],5:["o",1],7:["y",1],9:["g",1]},supply:{r:2,b:1,v:2,o:1,y:1,g:1},fog:[]},
 {name:"Launch Window",hint:"In this machine: wormholes, an orange switch, orbital rockers, a docking clamp, blue vanes, a rocket sled, orange vanes and force fields. Dark matter hides part of it. One extra planet for the docking clamp, plus two spares.",W:9,H:11,funnels:[2,5,8],grid:[".........","P.W..O..Z",".........","..t.p....",".M...f..V","..=c<....","......M..",".........",".j.......","..b......","........."],bins:{0:["y",1],3:["g",1],6:["b",1],8:["y",3]},supply:{y:6,g:2,b:1},fog:[[3,3,5,5]]},
 {name:"Escape Velocity",hint:"In this machine: wormholes, asteroid bumpers, a docking clamp, blue vanes, nebula clouds, a tractor beam, a black hole and force fields. Dark matter hides part of it. One extra planet for the docking clamp, plus two spares.",W:9,H:10,funnels:[0,2,5,8],grid:[".........","..p.....Z","u...PM...",".........",".<..F...V",".........","A.1...E..","...E.....","X....B...","........."],bins:{2:["r",1],4:["b",2],6:["g",1],8:["g",3]},supply:{r:1,b:3,g:6},fog:[[2,4,4,6]]},
 {name:"Event Horizon",hint:"In this machine: a rocket sled, wormholes, blue vanes, an orange switch, orange vanes, orbital rockers, a tractor beam and a UFO. Two spare planets.",W:11,H:10,funnels:[0,8,10],grid:["...........","..==c......",">.....P.F.W","..p........",".........J.",".T.....E...","..........V","H....e.....","..A.....O..","..........."],bins:{2:["g",2],8:["b",1],10:["v",3]},supply:{g:3,b:1,v:4},fog:[]},
 {name:"Ion Storm",hint:"In this machine: orange vanes, blue vanes, an orange switch, a tractor beam, force fields, a docking clamp, a blue switch, asteroid bumpers and a rocket sled. Dark matter hides part of it. One extra planet for the docking clamp, plus two spares.",W:11,H:10,funnels:[2,4,7,9],grid:["...........","..J.A..F...",".........W.",".O....F....","........e..","...l...M...",".Z...<.....","....S..U...",".......=c..","..........."],bins:{1:["v",2],2:["b",1],4:["o",3]},supply:{v:3,b:1,o:5},fog:[[3,6,5,8]]},
 {name:"Solar Wind",hint:"In this machine: wormholes, a docking clamp, force fields, blue vanes, a blue switch, a rocket sled, a tractor beam, an orange switch and orange vanes. Dark matter hides part of it. One extra planet for the docking clamp, plus two spares.",W:11,H:10,funnels:[1,5,7,9],grid:["...........",".O........P",".....M.<p..","...........",".B.......F.","..S...=c...","Z.........>","...E.......","G....W..J..","..V........"],bins:{1:["b",3],2:["r",2],5:["o",1]},supply:{b:4,r:3,o:2},fog:[[2,7,4,9]]},
 {name:"Kuiper Belt",hint:"In this machine: asteroid bumpers, an orange switch, wormholes, blue vanes, force fields, a rocket sled, orange vanes and a tractor beam. Two spare planets.",W:9,H:11,funnels:[2,4,6],grid:[".........","..Z...u..","....W....","p......V.","..A......",".....F...","......I..",".......=c",">...J....","...e.Pj..","........."],bins:{1:["b",1],2:["v",2],5:["g",1],7:["r",2]},supply:{b:1,v:3,g:1,r:3},fog:[]},
 {name:"Red Shift",hint:"In this machine: a tractor beam, a UFO, an orange switch, blue vanes, a docking clamp, wormholes, orange vanes, asteroid bumpers and a rocket sled. Dark matter hides part of it. One extra planet for the docking clamp, plus two spares.",W:9,H:11,funnels:[0,2,5,7],grid:[".........","V....A...","..O......",".......<e","......h..","..W......",".........","..F.M...P",".J......p","....U.==c","........."],bins:{0:["r",2],2:["o",2],3:["g",3]},supply:{r:4,o:2,g:4},fog:[[3,6,5,8]]},
 {name:"Gravity Assist",hint:"In this machine: asteroid bumpers, wormholes, blue vanes, a tractor beam, orbital rockers, an orange switch, orange vanes, force fields and a rocket sled. Dark matter hides part of it. Two spare planets.",W:9,H:10,funnels:[1,3,5,8],grid:[".........",".A...U..p","...F.....","Et....W..","J......P.","..O.y..j.",".....F..>",".Z.......","....==c..","........."],bins:{1:["r",1],2:["y",3],3:["b",3]},supply:{r:1,y:4,b:4},fog:[[4,5,6,7]]},
 {name:"Asteroid Alley",hint:"In this machine: an orange switch, orange vanes, blue vanes, a blue switch, asteroid bumpers, force fields, a docking clamp, a tractor beam and a black hole. One extra planet for the docking clamp, plus two spares.",W:9,H:11,funnels:[1,4,8],grid:[".........","....O....",".W......j",".f..S....","..u.b..Z.",".M.......","E..V.....",".......X.",".....<...",".........","........."],bins:{1:["y",2],3:["r",2],4:["b",2]},supply:{y:4,r:3,b:2},fog:[]},
 {name:"Aurora Drift",hint:"In this machine: orange vanes, blue vanes, a UFO, force fields, wormholes, nebula clouds, a blue switch, an orange switch, a tractor beam and a rocket sled. Dark matter hides part of it. Two spare planets.",W:11,H:10,funnels:[1,6,9],grid:["...........",".J....Z..V.","F..........","......h..Y.",".........P5","pf..S......","W.......e.A","...==c.E...","...........","..........."],bins:{0:["y",2],2:["r",2],10:["v",2]},supply:{y:3,r:3,v:2},fog:[[4,8,6,10]]},
 {name:"Pulsar Run",hint:"In this machine: a blue switch, orange vanes, blue vanes, nebula clouds, a UFO, an orange switch, a docking clamp and a black hole. Dark matter hides part of it. One extra planet for the docking clamp, plus two spares.",W:9,H:11,funnels:[0,2,5,8],grid:[".........","V....A..S","..O......",".....J...",".........","..f......",".2.......",".F..h....","...W....M","...<....X","........."],bins:{0:["y",3],2:["b",2],6:["o",1]},supply:{y:5,b:3,o:1},fog:[[5,0,7,2]]},
 {name:"Dark Side",hint:"In this machine: wormholes, blue vanes, an orange switch, force fields, a rocket sled, asteroid bumpers, a docking clamp, a blue switch and orange vanes. One extra planet for the docking clamp, plus two spares.",W:9,H:10,funnels:[0,2,4,7],grid:[".........","A...O..P.","..Z......",".......F.","W...R==c.","....U....","..Y......",".M...p...","...S.J...","........."],bins:{3:["r",2],4:["b",2],6:["g",2],8:["v",1]},supply:{r:3,b:3,g:2,v:2},fog:[]},
 {name:"Comet Chaser",hint:"In this machine: asteroid bumpers, a docking clamp, force fields, orange vanes, wormholes, orbital rockers, an orange switch, blue vanes and a blue switch. Dark matter hides part of it. One extra planet for the docking clamp, plus two spares.",W:9,H:10,funnels:[1,3,5,8],grid:[".........","...u.O..U",".M.......","....rJp..",".Z.......","......T..","....W....",".V.f>S...",".......P.","........."],bins:{1:["o",3],2:["r",2],5:["b",2]},supply:{o:4,r:4,b:2},fog:[[3,4,5,6]]},
 {name:"Orbital Decay",hint:"In this machine: an orange switch, wormholes, asteroid bumpers, blue vanes, a UFO, orange vanes, a rocket sled and a docking clamp. Dark matter hides part of it. One extra planet for the docking clamp, plus two spares.",W:9,H:10,funnels:[0,3,5,7],grid:[".........","W.....Pup","...F....h","Z.....f..","..V......","....<j.j.","A.==c....","......M..",".........","........."],bins:{0:["r",1],1:["y",2],6:["o",3],8:["r",1]},supply:{r:4,y:2,o:4},fog:[[5,4,7,6]]},
 {name:"Magnetosphere",hint:"In this machine: blue vanes, asteroid bumpers, force fields, orange vanes, a blue switch, wormholes, a tractor beam, an orange switch and a UFO. Two spare planets.",W:9,H:10,funnels:[1,4,6],grid:[".........",".V....F..","....fU...",".B.y.j.A.",".........","<.S.O..Pe",".........",".......W.","..h.p....","........."],bins:{0:["y",3],4:["b",1],6:["r",3],7:["y",1]},supply:{y:5,b:1,r:4},fog:[]},
 {name:"Binary Star",hint:"In this machine: an orange switch, a blue switch, orange vanes, force fields, nebula clouds, blue vanes, a docking clamp, a rocket sled, asteroid bumpers and orbital rockers. Dark matter hides part of it. One extra planet for the docking clamp, plus two spares.",W:9,H:10,funnels:[0,2,5,8],grid:[".........","W.A.....O","S....j...","......r.3","Z.F..M...","...==c...","..u.....T",".........",".........","........."],bins:{0:["r",3],1:["b",2],7:["g",2]},supply:{r:5,b:3,g:2},fog:[[2,4,4,6]]},
 {name:"Supernova",hint:"In this machine: wormholes, asteroid bumpers, force fields, orbital rockers, a docking clamp, a blue switch, a black hole, blue vanes and nebula clouds. Dark matter hides part of it. One extra planet for the docking clamp, plus two spares.",W:9,H:10,funnels:[0,4,6,8],grid:[".........","O..p..u..","...b....t","....M..S.","Z....S...","..V......",".......X.",".....F...","P...2....","........."],bins:{2:["r",2],4:["b",1],6:["g",3]},supply:{r:3,b:1,g:5},fog:[[2,3,4,5]]},
 {name:"Lagrange Point",hint:"In this machine: force fields, a blue switch, orange vanes, wormholes, blue vanes, orbital rockers, a rocket sled, an orange switch and a UFO. Two spare planets.",W:9,H:10,funnels:[0,2,5,7],grid:[".........","B.S..j...","pF<...T..","..P......","Z.=c.V...",".......A.",".........","W...h....",".......J.","........."],bins:{0:["o",3],2:["b",2],5:["g",2],8:["v",1]},supply:{o:4,b:3,g:2,v:1},fog:[]},
 {name:"Cosmic Ray",hint:"In this machine: orange vanes, a tractor beam, orbital rockers, wormholes, a UFO, blue vanes, an orange switch and force fields. Dark matter hides part of it. Two spare planets.",W:11,H:10,funnels:[0,4,6,8],grid:["...........","V...J.A....","........O..","..Et.......","........<P.","..H........",".........F.","p.......W.F",".......Y...","..........."],bins:{4:["y",2],5:["g",1],6:["v",3],8:["r",2]},supply:{y:3,g:1,v:4,r:2},fog:[[3,2,5,4]]},
 {name:"Wormhole Junction",hint:"In this machine: force fields, blue vanes, asteroid bumpers, orange vanes, a blue switch, a UFO, an orange switch and a black hole. Dark matter hides part of it. Two spare planets.",W:9,H:10,funnels:[1,3,7],grid:[".........",".A.......","...Y...f.","......U..",".J...>..O","......S..","..h......","Z...j...W","......I.X","........."],bins:{0:["r",3],3:["b",3],5:["g",3]},supply:{r:4,b:4,g:3},fog:[[3,5,5,7]]},
 {name:"Quasar",hint:"In this machine: an orange switch, force fields, a tractor beam, orange vanes, wormholes, orbital rockers, a black hole and nebula clouds. One spare planet.",W:9,H:10,funnels:[0,3,5,7],grid:[".........","O..Z.W...",".......>.","I.e..V...","...J.....","P....t...",".X...p..W",".........","........5","........."],bins:{2:["o",1],4:["b",2],6:["g",2],8:["v",2]},supply:{o:1,b:3,g:2,v:2},fog:[]},
 {name:"Hyperdrive",hint:"In this machine: blue vanes, a docking clamp, force fields, a black hole, nebula clouds, a tractor beam, a rocket sled, orbital rockers and asteroid bumpers. Dark matter hides part of it. One extra planet for the docking clamp, plus one spare.",W:9,H:11,funnels:[1,3,8],grid:[".........","...Z....V",".f.......","M........","r..b....A",".........",".X..2E=c.",".........",".........","..T.U....","........."],bins:{1:["g",2],3:["r",2],5:["b",2],8:["b",2]},supply:{g:2,r:2,b:6},fog:[[2,0,4,2],[6,4,8,6]]},
 {name:"Nebula Maze",hint:"In this machine: a blue switch, a tractor beam, a docking clamp, force fields, blue vanes, wormholes, a black hole, an orange switch and orange vanes. Dark matter hides part of it. One extra planet for the docking clamp, plus one spare.",W:9,H:10,funnels:[2,4,8],grid:[".........","..V......","....A...S",".eM......","........O","..y.fp...",".....X..W",".........",".JP......","........."],bins:{0:["v",3],2:["b",2],3:["g",1],8:["y",2]},supply:{v:5,b:2,g:1,y:2},fog:[[3,1,5,3],[4,5,6,7]]},
 {name:"Starfall",hint:"In this machine: asteroid bumpers, wormholes, a rocket sled, an orange switch, orange vanes, a docking clamp, orbital rockers, a tractor beam and force fields. One extra planet for the docking clamp, plus one spare.",W:9,H:10,funnels:[0,2,5,7],grid:[".........","u..p.....","..C=.W.j.","......J..",".....M..T","......P..",".e..b....","....C=.A.",".........","...O..Z.."],bins:{3:["y",3],6:["b",3],7:["v",3]},supply:{y:4,b:3,v:4},fog:[]},
 {name:"Ring World",hint:"In this machine: orbital rockers, wormholes, a docking clamp, force fields, orange vanes, nebula clouds, an orange switch, blue vanes and a blue switch. Dark matter hides part of it. One extra planet for the docking clamp, plus one spare.",W:9,H:10,funnels:[1,4,8],grid:[".........","....t..pM","P........",".l.O.j..2",".........","W.f.Z...S",".T.......","...J..>.V","S........","........."],bins:{0:["y",3],2:["v",1],7:["o",2],8:["b",1]},supply:{y:5,v:1,o:2,b:1},fog:[[3,0,5,2],[5,6,7,8]]},
 {name:"Deep Field",hint:"In this machine: a rocket sled, blue vanes, wormholes, a blue switch, nebula clouds, force fields, a UFO and a docking clamp. Dark matter hides part of it. One extra planet for the docking clamp, plus one spare.",W:9,H:10,funnels:[1,3,5,7],grid:[".........",".Z..C=...","......<..","...F.....",".V....P..",".......Sp",".4...B...","C=.......","....H..M.","..A......"],bins:{2:["y",3],6:["r",3],7:["b",2]},supply:{y:4,r:4,b:2},fog:[[4,6,6,8],[5,0,7,2]]},
 {name:"Singularity",hint:"In this machine: asteroid bumpers, wormholes, blue vanes, an orange switch, a rocket sled, force fields, orange vanes, a blue switch and a UFO. One spare planet.",W:9,H:10,funnels:[1,4,6],grid:[".........","....V....",".U.....P.","....F....","A..W..O..","....p....",".=c..Y...","....j.S..","......h..","........."],bins:{0:["r",3],3:["o",3],4:["b",3],5:["y",1]},supply:{r:4,o:3,b:3,y:1},fog:[]},
 {name:"Galactic Core",hint:"In this machine: nebula clouds, a rocket sled, blue vanes, force fields, a black hole, a docking clamp, wormholes, orbital rockers and a tractor beam. Dark matter hides part of it. One extra planet for the docking clamp, plus one spare.",W:11,H:10,funnels:[0,2,4,6],grid:["...........","1.A....==c.","....F......","O.....g....","..X........","M......Z.P.",".....t.....","...........",">E.<..p....","..........."],bins:{1:["r",2],2:["b",2],4:["g",2],9:["r",3]},supply:{r:7,b:2,g:2},fog:[[4,0,6,2],[6,4,8,6]]},
 {name:"Andromeda",hint:"In this machine: a blue switch, asteroid bumpers, a docking clamp, a rocket sled, blue vanes, an orange switch, orange vanes and force fields. Dark matter hides part of it. One extra planet for the docking clamp, plus one spare.",W:9,H:10,funnels:[1,3,5,8],grid:[".........",".O.S.U..Z",".........",".M......<","..C=F..W.",".f.....>.",".........","V...J.r..",".........","........."],bins:{0:["r",3],2:["v",3],5:["b",3],8:["y",1]},supply:{r:5,v:3,b:3,y:1},fog:[[3,1,5,3],[3,6,5,8]]},
 {name:"Big Crunch",hint:"In this machine: a blue switch, blue vanes, wormholes, orange vanes, orbital rockers, force fields, a docking clamp, asteroid bumpers, an orange switch and nebula clouds. One extra planet for the docking clamp, plus one spare.",W:9,H:10,funnels:[2,4,6,8],grid:[".........","..S...f..",".P..j...T",".p...J...","..I.M..U.",".f....F..","...W....Z","5....V...","..A......","........."],bins:{2:["v",3],3:["b",2],4:["r",3],5:["y",1]},supply:{v:5,b:2,r:3,y:1},fog:[]},
 {name:"Multiverse",hint:"In this machine: force fields, a blue switch, a rocket sled, orange vanes, a docking clamp, orbital rockers, an orange switch, blue vanes and a black hole. Dark matter hides part of it. One extra planet for the docking clamp, plus one spare.",W:9,H:10,funnels:[2,4,6,8],grid:[".........","..b...V..","...S....A","...==cj..",".M.......",".T...W.O.","..F......",".X.......",".......F.","........."],bins:{0:["r",1],3:["b",3],5:["y",3],6:["v",1],8:["g",2]},supply:{r:1,b:4,y:3,v:2,g:2},fog:[[5,0,7,2],[3,5,5,7]]},
 {name:"Cosmic Finale",hint:"In this machine: blue vanes, wormholes, asteroid bumpers, an orange switch, nebula clouds, a tractor beam, a blue switch, a docking clamp and orange vanes. Dark matter hides part of it. One extra planet for the docking clamp, plus one spare.",W:11,H:10,funnels:[0,4,6,9],grid:["...........","f...A.....p",".U....W....","U.3..E...O.",".S.........","....Z......","..M......J.","..........S",".......P...","..........."],bins:{1:["o",3],4:["g",2],6:["b",3],8:["y",1],10:["r",3]},supply:{o:4,g:3,b:3,y:1,r:3},fog:[[2,0,4,2],[2,5,4,7]]}
];
/*ENGINE*/
const ROAD="Cc=";
function flipAll(g,grp){const A=grp==="W"?"J":"F",a=A.toLowerCase();g.forEach(row=>row.forEach((v,j)=>{if(v===A)row[j]=a;else if(v===a)row[j]=A}))}
function snap(st){return {g:st.g.map(r=>r.join("")),hold:{...st.hold},tt:{...st.tt}}}
function seeFog(L,st,r,c){(L.fog||[]).forEach((z,i)=>{if(r>=z[0]&&r<=z[2]&&c>=z[1]&&c<=z[3])st.seen[i]=true})}
function roll(L,st,k,c){
  const ev=[];let r=0,cc=c,n=0,pc=c;
  const lose=f=>{st.lost++;ev.push({t:"lost",fate:f});return ev};
  ev.push({t:"to",r:0,c:cc});seeFog(L,st,0,cc);
  while(true){
    if(++n>90)return lose("It got stuck in orbit");
    const ch=st.g[r][cc];let nc=cc,nr=r+1,from=cc;const entry=Math.sign(cc-pc);
    if(ch==="<")nc--;else if(ch===">")nc++;
    else if("FfJj".includes(ch)){const lo=ch===ch.toLowerCase();nc+=lo?1:-1;st.g[r][cc]=lo?ch.toUpperCase():ch.toLowerCase();ev.push({t:"grid",s:snap(st),snd:"flip"})}
    else if(ch==="S"||ch==="W"){flipAll(st.g,ch);ev.push({t:"grid",s:snap(st),btn:[r,cc],snd:"button"})}
    else if(ch==="X"){ev.push({t:"saw"});return lose("The black hole swallowed it")}
    else if(GATE[ch]){nc+=GATE[ch]===k?-1:1;ev.push({t:"snd",snd:"gate"})}
    else if(GATE[ch.toUpperCase()]&&ch!==ch.toUpperCase()){nc+=GATE[ch.toUpperCase()]===k?1:-1;ev.push({t:"snd",snd:"gate"})}
    else if(PAINT[ch]){if(PAINT[ch]!==k){k=PAINT[ch];ev.push({t:"paint",k,r,c:cc})}}
    else if(ch==="H"||ch==="h"){nc+=ch==="H"?2:-2;from=nc;ev.push({t:"heli",r,c:cc,c2:nc})}
    else if(ch==="T"||ch==="t"){const key=r+","+cc;nc+=ch==="T"?-1:1;const n2=(st.tt[key]||0)+1;if(n2>=2){st.g[r][cc]=ch==="T"?"t":"T";st.tt[key]=0}else st.tt[key]=n2;ev.push({t:"grid",s:snap(st),snd:n2>=2?"teeter":"tick2"})}
    else if(ch==="U"||ch==="u"){nc+=entry!==0?-entry:(ch==="U"?1:-1);ev.push({t:"bump",r,c:cc})}
    else if("OVZA".includes(ch)){ev.push({t:"show",k:ch,r,c:cc})}
    else if(ch==="E"||ch==="e"){ev.push({t:"lift",r,c:cc});nr=1;nc=cc+(ch==="E"?1:-1)}
    else if(ROAD.includes(ch)){
      let a=cc,b=cc;while(a>0&&ROAD.includes(st.g[r][a-1]))a--;while(b<L.W-1&&ROAD.includes(st.g[r][b+1]))b++;
      let dir=1,car=-1;for(let j=a;j<=b;j++){if(st.g[r][j]==="C"){dir=1;car=j}if(st.g[r][j]==="c"){dir=-1;car=j}}
      const e=dir>0?b:a;ev.push({t:"car",r,c:cc,c2:e,car});nc=e+dir;from=e;
    }
    else if(ch==="P"||ch==="p"){
      const o=ch==="P"?"p":"P";let pr=-1,pq=-1;st.g.forEach((row,i)=>row.forEach((v,j)=>{if(v===o){pr=i;pq=j}}));
      if(pr>=0){ev.push({t:"warp",r2:pr,c2:pq});nr=pr+1;nc=pq;from=pq}
    }
    else if(ch==="M"){
      const key=r+","+cc,h=st.hold[key];st.hold[key]=k;ev.push({t:"grid",s:snap(st),snd:"clunk"});
      if(!h){ev.push({t:"park"});return ev}
      k=h;ev.push({t:"swap",k});
    }
    if(nc<0||nc>=L.W){ev.push({t:"off",r:nr,c:nc});return lose("It drifted into deep space")}
    pc=from;r=nr;cc=nc;
    if(r>=L.H){
      ev.push({t:"to",r:L.H,c:cc});
      const bn=st.bins[cc];
      if(!bn)return lose("No dock there");
      if(bn.k!==k)return lose("Wrong color for that dock");
      if(bn.have>=bn.need)return lose("That dock is already full");
      bn.have++;st.score+=100;ev.push({t:"bin",full:bn.have>=bn.need});return ev;
    }
    ev.push({t:"to",r,c:cc});seeFog(L,st,r,cc);
  }
}
function tracks(L){
  const g=L.grid,E=new Map(),seen=new Set(),q=[];
  const add=(r1,c1,r2,c2)=>{if(c2<0||c2>=L.W)return;const k=r1+","+c1+">"+r2+","+c2;if(!E.has(k))E.set(k,[r1,c1,r2,c2]);if(r2<L.H&&!seen.has(r2+","+c2)){seen.add(r2+","+c2);q.push([r2,c2])}};
  L.funnels.forEach(c=>add(-1,c,0,c));
  while(q.length){const [r,c]=q.shift(),ch=g[r][c];
    if(ch==="X")continue;
    if(ch==="<")add(r,c,r+1,c-1);else if(ch===">")add(r,c,r+1,c+1);
    else if("FfJjTtUu".includes(ch)||gateCol(ch)){add(r,c,r+1,c-1);add(r,c,r+1,c+1)}
    else if(ch==="H"||ch==="h"){const c2=c+(ch==="H"?2:-2);add(r,c2,r+1,c2)}
    else if(ROAD.includes(ch)){let a=c,b=c;while(a>0&&ROAD.includes(g[r][a-1]))a--;while(b<L.W-1&&ROAD.includes(g[r][b+1]))b++;let d=1;for(let j=a;j<=b;j++){if(g[r][j]==="C")d=1;if(g[r][j]==="c")d=-1}const e=d>0?b:a;add(r,e,r+1,e+d)}
    else if(ch==="P"||ch==="p"){const o=ch==="P"?"p":"P";g.forEach((row,i)=>{const j=row.indexOf(o);if(j>=0)add(i,j,i+1,j)})}
    else if(ch==="E"||ch==="e"){add(0,c,1,c+(ch==="E"?1:-1))}
    else add(r,c,r+1,c);
  }
  return [...E.values()];
}
function newState(L){const st={g:L.grid.map(r=>r.split("")),hold:{},tt:{},seen:{},sup:{...L.supply},bins:{},score:0,lost:0};for(const [c,[k,n]] of Object.entries(L.bins))st.bins[c]={k,need:n,have:0};return st}
/*END*/
if(typeof document!=="undefined"){
const $=id=>document.getElementById(id);
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const SP=reduce?40:150;
let li=0,L=null,st=null,sel=null,busy=false,hist=[],tt=null;
let best={},muted=false,relax=false;
try{best=JSON.parse(localStorage.getItem("tumblepro-best")||"{}");muted=localStorage.getItem("tumblepro-mute")==="1";relax=localStorage.getItem("tumblepro-relax")==="1"}catch(e){}
const saveBest=()=>{try{localStorage.setItem("tumblepro-best",JSON.stringify(best))}catch(e){}};
const cx=c=>c*C+C/2, cy=r=>C+r*C+C/2;

/* sound: synthesized with Web Audio, no files */
let AC=null;
function ac(){if(muted)return null;try{if(!AC)AC=new (window.AudioContext||window.webkitAudioContext)();if(AC.state==="suspended")AC.resume();return AC}catch(e){return null}}
function tone(f,d,type,vol,when,slide){const a=ac();if(!a)return;const t=a.currentTime+(when||0),o=a.createOscillator(),g=a.createGain();o.type=type||"sine";o.frequency.setValueAtTime(f,t);if(slide)o.frequency.exponentialRampToValueAtTime(slide,t+d);g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(vol||.2,t+.01);g.gain.exponentialRampToValueAtTime(0.0001,t+d);o.connect(g).connect(a.destination);o.start(t);o.stop(t+d+.05)}
function noise(d,vol,freq,when){const a=ac();if(!a)return;const t=a.currentTime+(when||0),len=Math.floor(a.sampleRate*d),buf=a.createBuffer(1,len,a.sampleRate),ch=buf.getChannelData(0);for(let i=0;i<len;i++)ch[i]=Math.random()*2-1;const s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();s.buffer=buf;f.type="bandpass";f.frequency.value=freq||1200;g.gain.setValueAtTime(vol||.2,t);g.gain.exponentialRampToValueAtTime(0.0001,t+d);s.connect(f).connect(g).connect(a.destination);s.start(t)}
const SFX={
  drop:()=>tone(520,.12,"triangle",.18,0,260),
  tick:()=>tone(1500+Math.random()*300,.03,"square",.03),
  flip:()=>{noise(.05,.25,2500);tone(300,.06,"square",.06)},
  gate:()=>tone(880,.08,"sine",.08,0,1100),
  button:()=>{tone(200,.25,"sine",.25,0,600);tone(400,.15,"triangle",.08,.08,800)},
  heli:()=>{for(let i=0;i<8;i++)noise(.04,.18,300,i*.055)},
  car:()=>{tone(392,.13,"square",.09);tone(392,.16,"square",.09,.18)},
  warp:()=>tone(200,.35,"sawtooth",.08,0,1800),
  clunk:()=>{tone(120,.12,"square",.15,0,70);noise(.06,.15,600)},
  bell:()=>{tone(1318,.6,"sine",.18);tone(1976,.5,"sine",.07)},
  full:()=>{[1046,1318,1568].forEach((f,i)=>tone(f,.45,"sine",.15,i*.08))},
  saw:()=>{noise(.35,.3,3500);tone(90,.3,"sawtooth",.08)},
  lost:()=>tone(330,.4,"triangle",.15,0,140),
  win:()=>{[523,659,784,1046,784,1046].forEach((f,i)=>tone(f,.28,"triangle",.17,i*.12));tone(1568,.8,"sine",.1,.75)},
  loop:()=>{tone(300,.45,"sine",.1,0,900);tone(900,.35,"sine",.06,.35,300)},
  vortex:()=>{for(let i=0;i<10;i++)tone(500+i*90,.09,"triangle",.05,i*.07)},
  cork:()=>{for(let i=0;i<8;i++)tone(i%2?1200:900,.05,"square",.03,i*.06)},
  hill:()=>{tone(260,.25,"sine",.12,0,520);tone(520,.25,"sine",.1,.22,260)},
  bump:()=>{tone(880,.08,"square",.1);tone(1320,.18,"sine",.12,.04);noise(.05,.15,4000)},
  teeter:()=>{tone(180,.18,"triangle",.15,0,120);noise(.08,.2,900,.05)},
  tick2:()=>tone(700,.06,"triangle",.08),
  paint:()=>{noise(.25,.2,6000);tone(600,.15,"sine",.06,0,1200)},
  lift:()=>{tone(110,.9,"square",.05,0,330);tone(220,.9,"triangle",.05,0,660)},
  stuck:()=>{tone(311,.3,"sawtooth",.08);tone(233,.5,"sawtooth",.08,.25)}
};
const sfx=n=>{try{SFX[n]&&SFX[n]()}catch(e){}};

function start(i){
  li=i;L=LV[i];hist=[];busy=false;st=newState(L);
  sel=Object.keys(st.sup)[0];
  $("lvl").innerHTML="Level "+(i+1)+" · "+L.name+'<small>'+stars(best[i]||0,true)+'</small>';
  $("hint").textContent=L.hint;
  drawBoard();side();closeOv();
}
function stars(n,plain){return plain?(n?"★".repeat(n)+"☆".repeat(3-n):""):"★".repeat(n)+'<span class="o">'+"★".repeat(3-n)+"</span>"}
function grad(k){const c=COL[k];return '<radialGradient id="m-'+k+'" cx=".38" cy=".32" r=".75"><stop offset="0" stop-color="#fff" stop-opacity=".85"/><stop offset=".18" stop-color="'+c.a+'"/><stop offset=".55" stop-color="'+c.a+'"/><stop offset=".62" stop-color="'+c.b+'"/><stop offset=".7" stop-color="'+c.a+'" stop-opacity=".9"/><stop offset=".92" stop-color="'+c.b+'"/><stop offset="1" stop-color="#05070f"/></radialGradient>'}
function drawBoard(){
  const W=L.W*C,H=(L.H+2)*C,s=$("sv");
  s.setAttribute("viewBox","0 0 "+W+" "+H);
  let h='<defs>'+Object.keys(COL).map(grad).join("")+'<pattern id="peg" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="16" cy="16" r="2.2" fill="rgba(110,70,30,.22)"/></pattern><radialGradient id="fogg" cx=".5" cy=".5" r=".75"><stop offset="0" stop-color="#2a1748" stop-opacity=".98"/><stop offset="1" stop-color="#07060f" stop-opacity=".98"/></radialGradient><radialGradient id="bh"><stop offset=".3" stop-color="#000"/><stop offset=".7" stop-color="#3a1206" stop-opacity=".9"/><stop offset="1" stop-color="#ff6a1c" stop-opacity="0"/></radialGradient><radialGradient id="wh"><stop offset="0" stop-color="#000"/><stop offset=".75" stop-color="#1a0f3a"/><stop offset="1" stop-color="#5b2bb3" stop-opacity=".4"/></radialGradient><radialGradient id="sun" cx=".4" cy=".4"><stop offset="0" stop-color="#fff8d0"/><stop offset=".6" stop-color="#ffc14d"/><stop offset="1" stop-color="#ff7a1c"/></radialGradient><radialGradient id="ast" cx=".35" cy=".3"><stop offset="0" stop-color="#a59aa8"/><stop offset="1" stop-color="#4e4552"/></radialGradient><linearGradient id="tb" x1="0" x2="1"><stop offset="0" stop-color="#9fffd8" stop-opacity="0"/><stop offset=".5" stop-color="#9fffd8" stop-opacity=".22"/><stop offset="1" stop-color="#9fffd8" stop-opacity="0"/></linearGradient><linearGradient id="aur" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3dffb0" stop-opacity=".0"/><stop offset=".35" stop-color="#3dffb0" stop-opacity=".16"/><stop offset=".6" stop-color="#8a5cff" stop-opacity=".14"/><stop offset="1" stop-color="#ff5cc8" stop-opacity="0"/></linearGradient><radialGradient id="bm" cx=".35" cy=".3"><stop offset="0" stop-color="#ff9a8a"/><stop offset="1" stop-color="#b3261e"/></radialGradient><radialGradient id="vx"><stop offset="0" stop-color="#2a2e33"/><stop offset=".55" stop-color="#8f979f"/><stop offset="1" stop-color="#dfe5ea"/></radialGradient><linearGradient id="fb" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#3b4560"/><stop offset=".45" stop-color="#c9d3e6"/><stop offset="1" stop-color="#3b4560"/></linearGradient></defs>';
  let sd=L.W*97+L.H*31+L.grid.join("").length;const rn=()=>{sd=sd*16807%2147483647;return sd/2147483647};let stars="";for(let i=0;i<L.W*L.H*1.6;i++){const R=rn()<.9?.7+rn()*.8:1.6+rn();stars+='<circle cx="'+(rn()*W).toFixed(1)+'" cy="'+(rn()*H).toFixed(1)+'" r="'+R.toFixed(2)+'" fill="#fff" opacity="'+(.3+rn()*.6).toFixed(2)+'"'+(R>1.6?' class="tw"':'')+'/>'}
  h+='<g aria-hidden="true">'+stars+'<path class="aurora" d="M0 '+(H*.25)+' C'+(W*.3)+' '+(H*.05)+' '+(W*.6)+' '+(H*.45)+' '+W+' '+(H*.2)+' V'+(H*.42)+' C'+(W*.6)+' '+(H*.65)+' '+(W*.3)+' '+(H*.28)+' 0 '+(H*.5)+' Z" fill="url(#aur)"/><circle cx="'+(W*.86)+'" cy="'+(H*.78)+'" r="'+(C*.9)+'" fill="#20283f" opacity=".55"/><path d="M'+(W*.86-C*1.5)+' '+(H*.78+8)+' Q'+(W*.86)+' '+(H*.78-18)+' '+(W*.86+C*1.5)+' '+(H*.78+8)+'" fill="none" stroke="#c38bff" stroke-opacity=".3" stroke-width="5"/></g>';
  h+='<line x1="0" x2="'+W+'" y1="'+(C-2)+'" y2="'+(C-2)+'" stroke="#2c3a5c" stroke-width="3"/><line x1="0" x2="'+W+'" y1="'+(C+L.H*C+2)+'" y2="'+(C+L.H*C+2)+'" stroke="#2c3a5c" stroke-width="3"/>';
  h+='<g id="tk">'+rails()+'</g>';
  h+=L.funnels.map(c=>{const x=cx(c);return '<g class="fn" data-c="'+c+'" tabindex="0" role="button" aria-label="Launch into tube '+(c+1)+'"><rect x="'+(x-30)+'" y="0" width="60" height="'+C+'" fill="transparent"/><path class="fbody" d="M'+(x-28)+' 6 H'+(x+28)+' L'+(x+11)+' '+(C-6)+' H'+(x-11)+' Z" fill="url(#fb)" stroke="#1c2336" stroke-width="2"/><ellipse cx="'+x+'" cy="8" rx="27" ry="5" fill="#05070f" opacity=".8"/><path d="M'+(x-11)+' '+(C-10)+' H'+(x+11)+'" stroke="#5fd0ff" stroke-width="3"/></g>'}).join("");
  h+='<g id="pz"></g><g id="bz"></g><g id="ml"></g><g id="fz"></g>';
  s.innerHTML=h;
  pieces();bins();fog();
}
const ry=r=>r<0?C/2:r>=L.H?C+L.H*C+22:cy(r);
const curve=(x1,y1,x2,y2)=>{const ym=(y1+y2)/2;return 'M'+x1+' '+y1+' C'+x1+' '+ym+' '+x2+' '+ym+' '+x2+' '+y2};
function rails(){
  let ties="",sh="",rl="";
  tracks(L).forEach(([r1,c1,r2,c2])=>{const d=curve(cx(c1),ry(r1),cx(c2),ry(r2));ties+='<path d="'+d+'"/>';for(const o of [-7,7]){sh+='<path transform="translate('+(o+1.5)+',2)" d="'+d+'"/>';rl+='<path transform="translate('+o+',0)" d="'+d+'"/>'}});
  return '<g fill="none" stroke="#5fd0ff" stroke-opacity=".07" stroke-width="26">'+ties+'</g><g fill="none" stroke="#5fd0ff" stroke-opacity=".22" stroke-width="7" stroke-linecap="round">'+rl+'</g><g fill="none" stroke="#c9f3ff" stroke-width="2" stroke-linecap="round">'+rl+'</g>';
}
function roads(g){
  let h="";
  g.forEach((row,r)=>{let j=0;while(j<row.length){if(ROAD.includes(row[j])){let a=j;while(j<row.length&&ROAD.includes(row[j]))j++;const b=j-1,y=cy(r);
    h+='<rect x="'+(a*C+2)+'" y="'+(y+6)+'" width="'+((b-a+1)*C-4)+'" height="20" rx="4" fill="#141b2e" stroke="#2c3a5c" stroke-width="2"/><line x1="'+(a*C+10)+'" x2="'+((b+1)*C-10)+'" y1="'+(y+16)+'" y2="'+(y+16)+'" stroke="#ff9a3c" stroke-width="2" stroke-dasharray="3 7"/>'}else j++}});
  return h;
}
function piece(ch,r,c,hold,tt){
  const x=cx(c),y=cy(r);
  if(ch==="<"||ch===">"){const d=ch===">"?1:-1;return '<line class="rail" x1="'+(x-d*24)+'" y1="'+(y-20)+'" x2="'+(x+d*20)+'" y2="'+(y+18)+'"/><line class="rail2" x1="'+(x-d*24)+'" y1="'+(y-21)+'" x2="'+(x+d*20)+'" y2="'+(y+17)+'"/><circle class="nail" cx="'+(x-d*24)+'" cy="'+(y-20)+'" r="4"/>'}
  const vane=(d,col,dark)=>'<g class="flipg" style="transform-origin:'+x+'px '+(y-2)+'px;transform:scaleX('+(-d)+')"><line x1="'+(x+18)+'" y1="'+(y-20)+'" x2="'+(x-20)+'" y2="'+(y+16)+'" stroke="'+col+'" stroke-opacity=".25" stroke-width="14" stroke-linecap="round"/><line x1="'+(x+18)+'" y1="'+(y-20)+'" x2="'+(x-20)+'" y2="'+(y+16)+'" stroke="'+dark+'" stroke-width="8" stroke-linecap="round"/><line x1="'+(x+18)+'" y1="'+(y-21)+'" x2="'+(x-20)+'" y2="'+(y+15)+'" stroke="'+col+'" stroke-width="3.5" stroke-linecap="round"/></g><circle cx="'+x+'" cy="'+(y-2)+'" r="6" fill="'+col+'" stroke="'+dark+'" stroke-width="2"/>';
  if(ch==="F"||ch==="f")return vane(ch==="f"?1:-1,"#5fd0ff","#0b3a5c");
  if(ch==="J"||ch==="j")return vane(ch==="j"?1:-1,"#ff9a3c","#5c2600");
  const sw=(col,dark)=>'<g id="btn-'+r+'-'+c+'" style="transform-box:fill-box;transform-origin:center"><circle cx="'+x+'" cy="'+y+'" r="19" fill="'+col+'" opacity=".18"/><path d="M'+(x-15)+' '+y+' L'+(x-7.5)+' '+(y-13)+' H'+(x+7.5)+' L'+(x+15)+' '+y+' L'+(x+7.5)+' '+(y+13)+' H'+(x-7.5)+' Z" fill="#101626" stroke="'+col+'" stroke-width="2"/><circle cx="'+x+'" cy="'+y+'" r="7" fill="'+col+'" stroke="'+dark+'" stroke-width="2"/><circle cx="'+(x-2)+'" cy="'+(y-2)+'" r="2" fill="#fff" opacity=".8"/></g>';
  if(ch==="S")return sw("#5fd0ff","#0b3a5c");
  if(ch==="W")return sw("#ff9a3c","#5c2600");
  if(PAINT[ch]){const k=PAINT[ch],c2=COL[k];return '<g class="neb"><circle cx="'+(x-10)+'" cy="'+(y+2)+'" r="14" fill="'+c2.a+'" opacity=".35"/><circle cx="'+(x+9)+'" cy="'+(y-4)+'" r="15" fill="'+c2.b+'" opacity=".45"/><circle cx="'+(x+2)+'" cy="'+(y+9)+'" r="12" fill="'+c2.a+'" opacity=".3"/><circle cx="'+x+'" cy="'+y+'" r="9" fill="url(#m-'+k+')" opacity=".9"/></g><circle cx="'+(x-14)+'" cy="'+(y-12)+'" r="1.6" fill="#fff"/><circle cx="'+(x+15)+'" cy="'+(y+12)+'" r="1.3" fill="#fff"/><circle cx="'+(x+17)+'" cy="'+(y-16)+'" r="1" fill="#fff"/>'}
  if(gateCol(ch)){const k=gateCol(ch),d=ch===ch.toLowerCase()?1:-1,c2=COL[k];
    return '<path d="M'+x+' '+(y-22)+' L'+(x+22)+' '+y+' L'+x+' '+(y+22)+' L'+(x-22)+' '+y+' Z" fill="'+c2.a+'" opacity=".18"/><path d="M'+x+' '+(y-18)+' L'+(x+18)+' '+y+' L'+x+' '+(y+18)+' L'+(x-18)+' '+y+' Z" fill="none" stroke="'+c2.a+'" stroke-width="2.5"/><path d="M'+x+' '+(y-11)+' L'+(x+11)+' '+y+' L'+x+' '+(y+11)+' L'+(x-11)+' '+y+' Z" fill="url(#m-'+k+')"/><path d="M'+(x+d*25)+' '+(y-8)+' L'+(x+d*34)+' '+y+' L'+(x+d*25)+' '+(y+8)+' Z" fill="'+c2.a+'"/><path d="M'+(x-d*25)+' '+(y-6)+' L'+(x-d*32)+' '+y+' L'+(x-d*25)+' '+(y+6)+' Z" fill="#8a93b8" opacity=".55"/>'}
  if(ch==="X")return '<circle cx="'+x+'" cy="'+y+'" r="25" fill="url(#bh)"/><g class="saw"><ellipse cx="'+x+'" cy="'+y+'" rx="24" ry="8" fill="none" stroke="#ffb35c" stroke-width="3" stroke-dasharray="10 5 3 6"/><ellipse cx="'+x+'" cy="'+y+'" rx="18" ry="5.5" fill="none" stroke="#ffe3a8" stroke-width="1.5" stroke-dasharray="4 6"/></g><circle cx="'+x+'" cy="'+y+'" r="9" fill="#000" stroke="#ff8a3c" stroke-width="1.5"/>';
  if(ch==="H"||ch==="h"){const d=ch==="H"?1:-1;
    return '<g id="heli-'+r+'-'+c+'" class="veh"><path d="M'+(x-8)+' '+(y+2)+' L'+(x-20)+' '+(y+22)+' H'+(x+20)+' L'+(x+8)+' '+(y+2)+' Z" fill="#9fffd8" opacity=".18"/><ellipse cx="'+x+'" cy="'+(y-18)+'" rx="10" ry="9" fill="#bff6ff" fill-opacity=".55" stroke="#7fe3ff" stroke-width="1.5"/><ellipse cx="'+x+'" cy="'+(y-9)+'" rx="27" ry="8" fill="#8b95a8" stroke="#2c3346" stroke-width="2"/><ellipse cx="'+x+'" cy="'+(y-11)+'" rx="27" ry="4" fill="#c7cfdc"/><g class="rotor2">'+[-18,-6,6,18].map(o=>'<circle cx="'+(x+o)+'" cy="'+(y-7)+'" r="2.3" fill="#9fffd8"/>').join("")+'</g><path d="M'+(x+d*30)+' '+(y-10)+' l'+(d*8)+' 4 l'+(-d*8)+' 4 z" fill="#9fffd8"/></g>'}
  if(ch==="C"||ch==="c"){const d=ch==="C"?1:-1;
    return '<g id="car-'+r+'-'+c+'" class="veh"><path class="flame" d="M'+(x-d*18)+' '+(y-3)+' L'+(x-d*34)+' '+(y+2)+' L'+(x-d*18)+' '+(y+7)+' Z" fill="#ffb347"/><path d="M'+(x-d*18)+' '+(y-1)+' L'+(x-d*27)+' '+(y+2)+' L'+(x-d*18)+' '+(y+5)+' Z" fill="#fff3b0"/><path d="M'+(x-d*18)+' '+(y-7)+' H'+(x+d*10)+' Q'+(x+d*24)+' '+(y+2)+' '+(x+d*10)+' '+(y+11)+' H'+(x-d*18)+' Z" fill="#e8ecf4" stroke="#53607a" stroke-width="2"/><path d="M'+(x-d*16)+' '+(y-7)+' L'+(x-d*22)+' '+(y-14)+' H'+(x-d*10)+' L'+(x-d*4)+' '+(y-7)+' Z M'+(x-d*16)+' '+(y+11)+' L'+(x-d*22)+' '+(y+18)+' H'+(x-d*10)+' L'+(x-d*4)+' '+(y+11)+' Z" fill="#e9493b"/><circle cx="'+(x+d*6)+'" cy="'+(y+2)+'" r="4" fill="#7fe3ff" stroke="#53607a" stroke-width="1.5"/></g>'}
  if(ch==="T"||ch==="t"){const d=ch==="T"?-1:1,n=(tt&&tt[r+","+c])||0;
    return '<path d="M'+x+' '+(y+2)+' L'+(x-9)+' '+(y+18)+' H'+(x+9)+' Z" fill="#2c3346" stroke="#7fe3ff" stroke-width="1.5"/><line x1="'+(x-28)+'" y1="'+(y+d*-9)+'" x2="'+(x+28)+'" y2="'+(y+d*9)+'" stroke="#0e1424" stroke-width="7" stroke-linecap="round"/><line x1="'+(x-28)+'" y1="'+(y+d*-9-1)+'" x2="'+(x+28)+'" y2="'+(y+d*9-1)+'" stroke="#c38bff" stroke-width="3" stroke-linecap="round"/><circle cx="'+x+'" cy="'+y+'" r="4" fill="#c38bff"/>'+[0,1].map(i=>'<circle cx="'+(x-d*(12+i*9))+'" cy="'+(y-7-(12+i*9)*0.32).toFixed(1)+'" r="3.5" fill="'+(i<n?"#c38bff":"none")+'" stroke="#c38bff" stroke-width="1.5"/>').join("")}
  if(ch==="U"||ch==="u"){const d=ch==="U"?1:-1;
    return '<g id="bmp-'+r+'-'+c+'" style="transform-box:fill-box;transform-origin:center"><circle cx="'+x+'" cy="'+y+'" r="22" fill="#ff6a3c" opacity=".2"/><path d="M'+(x-17)+' '+(y-6)+' L'+(x-9)+' '+(y-17)+' L'+(x+6)+' '+(y-18)+' L'+(x+17)+' '+(y-8)+' L'+(x+18)+' '+(y+7)+' L'+(x+8)+' '+(y+17)+' L'+(x-8)+' '+(y+16)+' L'+(x-18)+' '+(y+6)+' Z" fill="url(#ast)" stroke="#ff8a5c" stroke-width="2.5"/><circle cx="'+(x-5)+'" cy="'+(y-5)+'" r="4" fill="#3b3540"/><circle cx="'+(x+7)+'" cy="'+(y+5)+'" r="3" fill="#3b3540"/></g><path d="M'+(x+d*22)+' '+(y+10)+' l'+(d*9)+' 5 l'+(-d*9)+' 5 z" fill="#ff8a5c"/>'}
  if(ch==="O")return '<ellipse cx="'+x+'" cy="'+(y-2)+'" rx="26" ry="23" fill="none" stroke="#7fe3ff" stroke-opacity=".25" stroke-width="9"/><ellipse cx="'+x+'" cy="'+(y-2)+'" rx="26" ry="23" fill="none" stroke="#bff6ff" stroke-width="2"/><circle cx="'+x+'" cy="'+(y-2)+'" r="7" fill="url(#sun)"/><circle cx="'+(x+26)+'" cy="'+(y-2)+'" r="2.5" fill="#fff"/>';
  if(ch==="V")return '<g class="warp"><path d="M'+x+' '+(y-4)+' m0 0 c10 -2 14 8 4 12 c-14 5 -24 -8 -14 -18 c14 -13 34 0 30 16" fill="none" stroke="#c38bff" stroke-width="3" stroke-linecap="round"/><path d="M'+x+' '+(y-4)+' c-10 2 -14 -8 -4 -12 c14 -5 24 8 14 18 c-14 13 -34 0 -30 -16" fill="none" stroke="#7fe3ff" stroke-width="3" stroke-linecap="round" opacity=".8"/></g><circle cx="'+x+'" cy="'+(y-4)+'" r="5" fill="#fff4d0"/>';
  if(ch==="Z"){let p1="",p2="";for(let i=0;i<=24;i++){const t=i/24,yy=y-26+t*52,ph=t*Math.PI*4;p1+=(i?"L":"M")+(x+16*Math.sin(ph)).toFixed(1)+" "+yy.toFixed(1);p2+=(i?"L":"M")+(x+16*Math.sin(ph+.9)).toFixed(1)+" "+(yy+3).toFixed(1)}return '<path d="'+p1+'" fill="none" stroke="#7fe3ff" stroke-opacity=".25" stroke-width="8"/><path d="'+p1+'" fill="none" stroke="#bff6ff" stroke-width="2.5"/><path d="'+p2+'" fill="none" stroke="#5fd0ff" stroke-width="2"/><circle cx="'+x+'" cy="'+(y-27)+'" r="5" fill="#fff"/><path d="M'+(x-3)+' '+(y-30)+' l-12 -8 M'+(x+2)+' '+(y-31)+' l-6 -10" stroke="#bff6ff" stroke-width="2" stroke-linecap="round" opacity=".7"/>'}
  if(ch==="A"){const d='M'+(x-30)+' '+(y+14)+' C'+(x-14)+' '+(y+14)+' '+(x-14)+' '+(y-26)+' '+x+' '+(y-26)+' C'+(x+14)+' '+(y-26)+' '+(x+14)+' '+(y+14)+' '+(x+30)+' '+(y+14);return '<path d="'+d+'" fill="none" stroke="#ff9a3c" stroke-opacity=".3" stroke-width="12"/><path d="'+d+'" fill="none" stroke="#ffd27a" stroke-width="3" transform="translate(0,-6)"/><path d="'+d+'" fill="none" stroke="#ff9a3c" stroke-width="3" transform="translate(0,4)"/><ellipse cx="'+x+'" cy="'+(y+18)+'" rx="16" ry="4" fill="url(#sun)" opacity=".8"/>'}
  if(ch==="E"||ch==="e"){const d=ch==="E"?1:-1,top=cy(0)-24;
    return '<rect class="beam" x="'+(x-18)+'" y="'+top+'" width="36" height="'+(y+20-top)+'" fill="url(#tb)"/><line x1="'+(x-18)+'" y1="'+top+'" x2="'+(x-18)+'" y2="'+(y+20)+'" stroke="#9fffd8" stroke-opacity=".5" stroke-width="1.5"/><line x1="'+(x+18)+'" y1="'+top+'" x2="'+(x+18)+'" y2="'+(y+20)+'" stroke="#9fffd8" stroke-opacity=".5" stroke-width="1.5"/><ellipse cx="'+x+'" cy="'+(top-3)+'" rx="27" ry="7" fill="#8b95a8" stroke="#2c3346" stroke-width="2"/><circle cx="'+x+'" cy="'+(top+1)+'" r="4" fill="#9fffd8"/><path d="M'+(x+d*24)+' '+(top+16)+' l'+(d*10)+' 4 l'+(-d*7)+' 7 z" fill="#9fffd8"/><g id="lift-'+r+'-'+c+'" class="veh"><ellipse cx="'+x+'" cy="'+(y+10)+'" rx="20" ry="6" fill="none" stroke="#9fffd8" stroke-width="3"/><ellipse cx="'+x+'" cy="'+(y-6)+'" rx="14" ry="4" fill="none" stroke="#9fffd8" stroke-width="2" opacity=".6"/></g>'}
  if(ch==="P"||ch==="p"){const col=ch==="P"?"#c38bff":"#7fe3ff";return '<circle cx="'+x+'" cy="'+y+'" r="23" fill="url(#wh)"/><circle cx="'+x+'" cy="'+y+'" r="20" fill="none" stroke="'+col+'" stroke-width="3"/><g class="warp"><path d="M'+(x-12)+' '+y+' a12 12 0 1 1 12 12" fill="none" stroke="'+col+'" stroke-width="2.5" stroke-linecap="round"/><path d="M'+(x+6)+' '+y+' a6 6 0 1 1 -6 -6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>'}
  if(ch==="M"){const k=hold[r+","+c];return '<path d="M'+(x-21)+' '+(y-16)+' Q'+(x-21)+' '+(y+20)+' '+x+' '+(y+20)+' Q'+(x+21)+' '+(y+20)+' '+(x+21)+' '+(y-16)+'" fill="none" stroke="#53607a" stroke-width="7" stroke-linecap="round"/><path d="M'+(x-21)+' '+(y-16)+' Q'+(x-21)+' '+(y+20)+' '+x+' '+(y+20)+' Q'+(x+21)+' '+(y+20)+' '+(x+21)+' '+(y-16)+'" fill="none" stroke="#7fe3ff" stroke-width="2"/><circle cx="'+(x-21)+'" cy="'+(y-16)+'" r="4" fill="#9fffd8"/><circle cx="'+(x+21)+'" cy="'+(y-16)+'" r="4" fill="#9fffd8"/>'+(k?'<circle cx="'+x+'" cy="'+(y+2)+'" r="15" fill="url(#m-'+k+')"/>':"")}
  return "";
}
function fog(){
  const f=$("fz");if(!f)return;let h="";
  (L.fog||[]).forEach((z,i)=>{if(st.seen[i])return;const [r1,c1,r2,c2]=z,x=c1*C+4,y=C+r1*C+4,w=(c2-c1+1)*C-8,hh=(r2-r1+1)*C-8;
    h+='<g><rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+hh+'" rx="10" fill="url(#fogg)" stroke="#8a5cff" stroke-opacity=".6" stroke-width="2" stroke-dasharray="2 6"/><circle cx="'+(x+w*.2)+'" cy="'+(y+hh*.3)+'" r="1.4" fill="#fff" opacity=".6"/><circle cx="'+(x+w*.75)+'" cy="'+(y+hh*.7)+'" r="1.2" fill="#fff" opacity=".5"/><circle cx="'+(x+w*.6)+'" cy="'+(y+hh*.2)+'" r="1" fill="#fff" opacity=".5"/><text x="'+(x+w/2)+'" y="'+(y+hh/2+6)+'" text-anchor="middle" font-family="Fredoka,sans-serif" font-size="15" letter-spacing="3" fill="#c38bff" opacity=".7">DARK MATTER</text></g>'});
  f.innerHTML=h;
}
function pieces(s){
  const g=s?s.g.map(r=>r.split("")):st.g,hold=s?s.hold:st.hold,tt=s?s.tt:st.tt;
  let h=roads(g);g.forEach((row,r)=>row.forEach((ch,c)=>{if(ch!=="="&&ch!==".")h+=piece(ch,r,c,hold,tt)}));$("pz").innerHTML=h;
}
function bins(){
  const y0=C+L.H*C+6;let h="";
  for(const [c,b] of Object.entries(st.bins)){
    const x=cx(+c),k=COL[b.k];
    h+='<path d="M'+(x-27)+' '+y0+' L'+(x-22)+' '+(y0+50)+' H'+(x+22)+' L'+(x+27)+' '+y0+'" fill="'+k.a+'" fill-opacity=".28" stroke="'+k.b+'" stroke-width="4" stroke-linejoin="round"/>';
    for(let i=0;i<b.need;i++){const dx=(i-(b.need-1)/2)*15;h+='<circle cx="'+(x+dx)+'" cy="'+(y0+32)+'" r="6.5" '+(i<b.have?'fill="url(#m-'+b.k+')"':'fill="none" stroke="'+k.b+'" stroke-width="2" stroke-dasharray="3 3"')+'/>'}
  }
  $("bz").innerHTML=h;
}
const ball=k=>"radial-gradient(circle at 35% 30%,#fff 0,"+COL[k].a+" 22%,"+COL[k].b+" 100%)";
function side(){
  $("rack").innerHTML=Object.keys(L.supply).map(k=>'<button class="rm" data-k="'+k+'" aria-pressed="'+(k===sel)+'" aria-label="'+COL[k].n+' planets, '+(relax?"unlimited":st.sup[k]+" left")+'"'+(relax||st.sup[k]?"":" disabled")+'><span class="ball" style="background:'+ball(k)+'"></span><span class="n">'+(relax?"∞":st.sup[k])+'</span></button>').join("");
  $("cups").innerHTML=Object.values(st.bins).map(b=>'<div class="cup'+(b.have>=b.need?" done":"")+'"><span class="dot" style="background:'+COL[b.k].b+'"></span><span>'+COL[b.k].n+' dock</span><span>'+b.have+" of "+b.need+'</span></div>').join("");
  $("score").textContent=st.score;$("lost").textContent=st.lost;
  $("undo").disabled=!hist.length;
  $("mute").textContent=muted?"Sound off":"Sound on";$("relax").textContent=relax?"Relaxed: on":"Relaxed: off";if($("music")){$("music").textContent=music?"Music: on":"Music: off";$("music").setAttribute("aria-pressed",String(music))}$("relax").setAttribute("aria-pressed",String(relax));$("mute").setAttribute("aria-pressed",String(muted));
}
function toast(t){const e=$("toast");e.textContent=t;e.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>e.classList.remove("on"),1800)}
function tw(m,x1,y1,x2,y2,ms,on){return new Promise(res=>{const t0=performance.now();const f=t=>{const k=Math.min(1,(t-t0)/ms),e=k<.5?2*k*k:1-((-2*k+2)**2)/2,px=x1+(x2-x1)*e,py=y1+(y2-y1)*e;m.setAttribute("cx",px);m.setAttribute("cy",py);if(on)on(px,py);k<1?requestAnimationFrame(f):res()};requestAnimationFrame(f)})}
function path(m,fn,ms){return new Promise(res=>{const t0=performance.now();const f=t=>{const k=Math.min(1,(t-t0)/ms),p=fn(k);m.setAttribute("cx",p[0]);m.setAttribute("cy",p[1]);k<1?requestAnimationFrame(f):res()};requestAnimationFrame(f)})}
async function show(m,k,x,y){
  if(reduce)return;
  if(k==="O"){sfx("loop");await tw(m,x,y,x,y+19,SP*.5);await path(m,t=>{const a=Math.PI/2-t*Math.PI*2;return [x+21*Math.cos(a)*(1),y-2+21*Math.sin(a)]},SP*3);return [x,y+19]}
  else if(k==="V"){sfx("vortex");await path(m,t=>{const a=t*Math.PI*6,R=28*(1-t)+2;return [x+R*Math.cos(a),y-6+R*.42*Math.sin(a)]},SP*5);await tw(m,x,y-4,x,y+12,SP*.6);return [x,y+12]}
  else if(k==="Z"){sfx("cork");await tw(m,x,y,x,y-24,SP*.4);await path(m,t=>[x+16*Math.sin(t*Math.PI*4),y-24+t*48],SP*3.2);return [x,y+24]}
  else if(k==="A"){sfx("hill");await tw(m,x,y,x-26,y+8,SP*.4);await path(m,t=>{const u=1-t,px=u*u*u*(x-26)+3*u*u*t*(x-12)+3*u*t*t*(x+12)+t*t*t*(x+26);return [px,y+8-Math.sin(t*Math.PI)*34]},SP*2.2);return [x+26,y+8]}
}
function twc(m,x1,y1,x2,y2,ms){if(x1===x2)return tw(m,x1,y1,x2,y2,ms);const ym=(y1+y2)/2;return new Promise(res=>{const t0=performance.now();const f=t=>{const k=Math.min(1,(t-t0)/ms),u=1-k,bx=u*u*u*x1+3*u*u*k*x1+3*u*k*k*x2+k*k*k*x2,by=u*u*u*y1+3*u*u*k*ym+3*u*k*k*ym+k*k*k*y2;m.setAttribute("cx",bx);m.setAttribute("cy",by);k<1?requestAnimationFrame(f):res()};requestAnimationFrame(f)})}
const wait=ms=>new Promise(r=>setTimeout(r,ms));
function fade(m){m.style.transition="opacity .35s";m.style.opacity="0";setTimeout(()=>m.remove(),400)}

async function drop(c){
  if(busy||!sel||(!relax&&!st.sup[sel]))return;
  busy=true;hist.push(JSON.stringify(st));
  const k=sel;if(!relax)st.sup[k]--;side();sfx("drop");
  const ev=roll(L,st,k,c);
  const m=document.createElementNS(NS,"circle");m.setAttribute("r","16");m.setAttribute("fill","url(#m-"+k+")");m.setAttribute("stroke",COL[k].a);m.setAttribute("stroke-opacity",".45");m.setAttribute("stroke-width","3");$("ml").appendChild(m);
  let x=cx(c),y=C/2;m.setAttribute("cx",x);m.setAttribute("cy",y);
  for(const e of ev){
    if(e.t==="to"){const nx=cx(e.c),ny=e.r>=L.H?C+L.H*C+34:cy(e.r);await twc(m,x,y,nx,ny,SP*(x===nx?1:1.25));x=nx;y=ny;sfx("tick")}
    else if(e.t==="bump"){sfx("bump");const b=document.getElementById("bmp-"+e.r+"-"+e.c);if(b){b.classList.remove("pop");void b.getBBox();b.classList.add("pop")}}
    else if(e.t==="show"){const p=await show(m,e.k,x,y);if(p){x=p[0];y=p[1]}}
    else if(e.t==="lift"){
      const v=document.getElementById("lift-"+e.r+"-"+e.c),y0=y,ty=cy(0);sfx("lift");
      await tw(m,x,y,x,ty,SP*(1+e.r*.7),(px,py)=>v&&v.setAttribute("transform","translate(0,"+(py-y0)+")"));
      y=ty;sfx("gate");const vv=v;setTimeout(()=>{if(vv&&vv.isConnected)vv.setAttribute("transform","")},SP*3);
    }
    else if(e.t==="grid"){pieces(e.s);sfx(e.snd);if(e.btn){const b=document.getElementById("btn-"+e.btn[0]+"-"+e.btn[1]);if(b)b.classList.add("pulse")}}
    else if(e.t==="snd")sfx(e.snd);
    else if(e.t==="heli"){
      const v=document.getElementById("heli-"+e.r+"-"+e.c),x0=x;sfx("heli");
      await tw(m,x,y,x,y-4,SP*.5);const tx=cx(e.c2);
      await tw(m,x,y-4,tx,y-4,SP*2.4,px=>v&&v.setAttribute("transform","translate("+(px-x0)+",0)"));
      x=tx;y=y-4;const vv=v;setTimeout(()=>{if(vv&&vv.isConnected)vv.setAttribute("transform","")},SP*4);
    }
    else if(e.t==="car"){
      const v=document.getElementById("car-"+e.r+"-"+e.car),x0=cx(e.car);sfx("car");
      if(v)v.setAttribute("transform","translate("+(x-x0)+",0)");
      const tx=cx(e.c2);await tw(m,x,y-14,tx,y-14,SP*(1+Math.abs(e.c2-e.c)),px=>v&&v.setAttribute("transform","translate("+(px-x0)+",0)"));
      x=tx;y=y-14;const vv=v;setTimeout(()=>{if(vv&&vv.isConnected)vv.setAttribute("transform","")},SP*4);
    }
    else if(e.t==="warp"){sfx("warp");for(let i=8;i>=0;i--){m.setAttribute("r",i*2);await wait(14)}x=cx(e.c2);y=cy(e.r2);m.setAttribute("cx",x);m.setAttribute("cy",y);for(let i=0;i<=8;i++){m.setAttribute("r",i*2);await wait(14)}}
    else if(e.t==="paint"){sfx("paint");m.setAttribute("fill","url(#m-"+e.k+")");await wait(SP*.6)}
    else if(e.t==="swap"){m.setAttribute("fill","url(#m-"+e.k+")");await wait(SP)}
    else if(e.t==="park"){m.remove()}
    else if(e.t==="saw")sfx("saw");
    else if(e.t==="off"){await tw(m,x,y,cx(e.c),y+C,SP*1.2)}
    else if(e.t==="lost"){toast(e.fate+": planet lost");sfx("lost");fade(m)}
    else if(e.t==="bin"){m.remove();sfx(e.full?"full":"bell")}
  }
  pieces();bins();fog();
  if(!relax&&!st.sup[sel]){const n=Object.keys(st.sup).find(q=>st.sup[q]>0);if(n)sel=n}
  busy=false;side();check();
}
function check(){
  const bs=Object.values(st.bins);
  if(bs.every(b=>b.have>=b.need)){
    const spare=relax?0:Object.values(st.sup).reduce((a,b)=>a+b,0);st.score+=spare*50;side();
    const n=relax?1:st.lost===0?3:st.lost<=2?2:1;
    if(n>(best[li]||0)){best[li]=n;saveBest()}
    const last=li===LV.length-1;sfx("win");
    ov('<h2>'+(last?"You conquered the galaxy!":"Level complete")+'</h2><div class="stars">'+stars(n)+'</div><p>Score '+st.score+' · '+st.lost+' lost · '+(relax?'relaxed mode</p><p style="font-size:14px;opacity:.8">Relaxed mode earns one star. Switch it off to go for three.':spare+' spare planet'+(spare===1?"":"s")+' (+'+(spare*50)+')')+'</p><div class="btns" style="justify-content:center">'+(last?"":'<button class="b" data-go="next">Next level</button>')+'<button class="b q" data-go="replay">Play again</button><button class="b q" data-go="levels">Levels</button></div>');
    return;
  }
  if(relax)return;
  const held=Object.values(st.hold);
  const painted=/[1-6]/.test(L.grid.join(""));
  const short=painted?(bs.reduce((a,b)=>a+b.need-b.have,0)>Object.values(st.sup).reduce((a,b)=>a+b,0)+held.length?"any":null):Object.keys(COL).find(k=>bs.filter(b=>b.k===k).reduce((a,b)=>a+b.need-b.have,0)>(st.sup[k]||0)+held.filter(h=>h===k).length);
  const none=Object.values(st.sup).every(v=>!v);
  if(short||none){sfx("stuck");const sn=short&&short!=="any"?COL[short].n.toLowerCase():null;ov('<h2>'+(sn?"Out of "+sn+" planets":"Out of planets")+'</h2><p>'+(sn?"There aren't enough "+sn+" planets left to fill the docks.":"There aren't enough planets left to fill the docks.")+'</p><div class="btns" style="justify-content:center"><button class="b" data-go="undo">Undo last drop</button><button class="b q" data-go="replay">Restart</button></div>')}
}
function ov(h){$("panel").innerHTML=h;$("ov").classList.add("on")}
function closeOv(){$("ov").classList.remove("on")}
function levels(){ov('<h2>Pick a level</h2><div class="lvls">'+LV.map((l,i)=>'<button class="lb" data-lv="'+i+'"><b>'+(i+1)+". "+l.name+'</b><span class="s">'+(best[i]?"★".repeat(best[i]):"Not solved yet")+'</span></button>').join("")+'</div><div class="btns" style="justify-content:center;margin-top:14px"><button class="b q" data-go="close">Close</button></div>')}
function undo(){if(busy||!hist.length)return;st=JSON.parse(hist.pop());const n=Object.keys(st.sup).find(q=>st.sup[q]>0);if(!st.sup[sel]&&n)sel=n;pieces();bins();fog();$("ml").innerHTML="";side();closeOv()}

$("sv").addEventListener("click",e=>{const f=e.target.closest(".fn");if(f)drop(+f.dataset.c)});
$("sv").addEventListener("keydown",e=>{const f=e.target.closest&&e.target.closest(".fn");if(f&&(e.key==="Enter"||e.key===" ")){e.preventDefault();drop(+f.dataset.c)}});
let drag=null;
const fnAt=(x,y)=>{const el=document.elementFromPoint(x,y);return el&&el.closest?el.closest(".fn"):null};
const clearHot=f=>document.querySelectorAll(".fn.hot").forEach(x=>{if(x!==f)x.classList.remove("hot")});
$("rack").addEventListener("pointerdown",e=>{const b=e.target.closest(".rm");if(!b||b.disabled)return;e.preventDefault();sel=b.dataset.k;side();sfx("tick");if(busy)return;
  const d=document.createElement("div");d.className="drag";d.style.background=ball(sel);d.style.left=e.clientX+"px";d.style.top=e.clientY+"px";document.body.appendChild(d);drag={d,x0:e.clientX,y0:e.clientY,moved:false}});
document.addEventListener("pointermove",e=>{if(!drag)return;drag.d.style.left=e.clientX+"px";drag.d.style.top=e.clientY+"px";if(Math.hypot(e.clientX-drag.x0,e.clientY-drag.y0)>8)drag.moved=true;const f=fnAt(e.clientX,e.clientY);clearHot(f);if(f)f.classList.add("hot")},{passive:true});
const endDrag=(e,ok)=>{if(!drag)return;const f=ok?fnAt(e.clientX,e.clientY):null,moved=drag.moved;drag.d.remove();drag=null;clearHot(null);if(f&&moved)drop(+f.dataset.c)};
document.addEventListener("pointerup",e=>endDrag(e,true));
document.addEventListener("pointercancel",e=>endDrag(e,false));
$("undo").onclick=undo;
$("restart").onclick=()=>{if(!busy)start(li)};
$("levels").onclick=levels;
// ---- ambient music: soft synth pads, wind and wind chimes, generated live ----
let music=false,MU=null,mvol=.6;
try{music=localStorage.getItem("tumblepro-music")==="1";const v=localStorage.getItem("tumblepro-mvol");if(v!==null)mvol=+v}catch(e){}
const mf=n=>440*Math.pow(2,(n-69)/12);
function startMusic(){
  if(MU)return;
  try{if(!AC)AC=new (window.AudioContext||window.webkitAudioContext)();}catch(e){return}
  const a=AC;if(a.state==="suspended")a.resume();
  const out=a.createGain();out.gain.setValueAtTime(0,a.currentTime);out.gain.linearRampToValueAtTime(.9*mvol,a.currentTime+4);out.connect(a.destination);
  const len=Math.floor(a.sampleRate*4.5),ib=a.createBuffer(2,len,a.sampleRate);
  for(let ch=0;ch<2;ch++){const d=ib.getChannelData(ch);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,2.6)}
  const rv=a.createConvolver();rv.buffer=ib;const wet=a.createGain();wet.gain.value=.75;rv.connect(wet);wet.connect(out);
  const dry=a.createGain();dry.gain.value=.45;dry.connect(out);
  const bus=a.createGain();bus.connect(dry);bus.connect(rv);
  const lp=a.createBiquadFilter();lp.type="lowpass";lp.frequency.value=950;lp.Q.value=.4;lp.connect(bus);
  const lfo=a.createOscillator(),lg=a.createGain();lfo.frequency.value=.04;lg.gain.value=380;lfo.connect(lg);lg.connect(lp.frequency);lfo.start();
  // soft wind: looping noise through a slowly breathing band-pass
  const nb=a.createBuffer(1,a.sampleRate*3,a.sampleRate),nd=nb.getChannelData(0);for(let i=0;i<nd.length;i++)nd[i]=Math.random()*2-1;
  const ns=a.createBufferSource();ns.buffer=nb;ns.loop=true;const bp=a.createBiquadFilter();bp.type="bandpass";bp.frequency.value=500;bp.Q.value=.8;
  const wg=a.createGain();wg.gain.value=.012;const wl=a.createOscillator(),wlg=a.createGain();wl.frequency.value=.07;wlg.gain.value=.009;wl.connect(wlg);wlg.connect(wg.gain);
  const wl2=a.createOscillator(),wl2g=a.createGain();wl2.frequency.value=.031;wl2g.gain.value=260;wl2.connect(wl2g);wl2g.connect(bp.frequency);
  ns.connect(bp);bp.connect(wg);wg.connect(bus);ns.start();wl.start();wl2.start();
  const CH=[[48,55,59,64,71],[45,52,55,60,67],[41,48,52,57,64],[43,50,55,59,62],[40,47,52,55,59],[41,48,53,57,64]];
  const PENT=[72,74,76,79,81,84,86,88,91];
  let ci=0,nextChord=a.currentTime+.2,nextChime=a.currentTime+2.5;const live=new Set();
  function pad(n,t,dur){for(const det of [-6,5]){const o=a.createOscillator(),g=a.createGain();o.type=det<0?"triangle":"sine";o.frequency.value=mf(n);o.detune.value=det;
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(n<50?.05:.03,t+3.5);g.gain.setValueAtTime(n<50?.05:.03,t+dur);g.gain.linearRampToValueAtTime(0,t+dur+5);
    o.connect(g);g.connect(lp);o.start(t);o.stop(t+dur+5.2);live.add(o);o.onended=()=>live.delete(o)}}
  function chime(t,vol){const n=PENT[Math.floor(Math.random()*PENT.length)],f=mf(n),pan=a.createStereoPanner?a.createStereoPanner():null,dec=3+Math.random()*3;
    for(const [m,v] of [[1,1],[2.76,.35],[5.4,.12]]){const o=a.createOscillator(),g=a.createGain();o.type="sine";o.frequency.value=f*m;
      g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol*v,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+dec/m*1.4);
      o.connect(g);if(pan){pan.pan.value=Math.random()*1.6-.8;g.connect(pan)}else g.connect(bus);o.start(t);o.stop(t+dec*1.5);live.add(o);o.onended=()=>live.delete(o)}
    if(pan)pan.connect(bus)}
  const tick=()=>{const now=a.currentTime;
    while(nextChord<now+1){const dur=9+Math.random()*3;CH[ci%CH.length].forEach((n,j)=>pad(n,nextChord+j*.35,dur));ci++;nextChord+=dur+1.5}
    while(nextChime<now+1){const gust=Math.random()<.3;const k=gust?2+Math.floor(Math.random()*4):1;for(let j=0;j<k;j++)chime(nextChime+j*(.12+Math.random()*.35),.035+Math.random()*.035);nextChime+=1.8+Math.random()*4.5}};
  tick();const iv=setInterval(tick,300);
  MU={out,iv,stop(){clearInterval(iv);const t=a.currentTime;out.gain.cancelScheduledValues(t);out.gain.setValueAtTime(out.gain.value,t);out.gain.linearRampToValueAtTime(0,t+1.5);
    setTimeout(()=>{live.forEach(o=>{try{o.stop()}catch(e){}});[ns,lfo,wl,wl2].forEach(o=>{try{o.stop()}catch(e){}});out.disconnect()},1700)}};
}
function setVol(v){mvol=v;try{localStorage.setItem("tumblepro-mvol",String(v))}catch(e){}if(MU&&AC){const t=AC.currentTime;MU.out.gain.cancelScheduledValues(t);MU.out.gain.setValueAtTime(MU.out.gain.value,t);MU.out.gain.linearRampToValueAtTime(.9*v,t+.15)}}
function stopMusic(){if(MU){MU.stop();MU=null}}
function setMusic(on){music=on;try{localStorage.setItem("tumblepro-music",on?"1":"0")}catch(e){}if(on)startMusic();else stopMusic();side()}
document.addEventListener("visibilitychange",()=>{if(!AC)return;if(document.hidden)AC.suspend();else AC.resume()});
document.addEventListener("pointerdown",()=>{if(music&&!MU)startMusic()},true);
$("mvol").value=Math.round(mvol*100);$("mvol").oninput=e=>{setVol(e.target.value/100);if(!music&&e.target.value>0)setMusic(true)};
$("music").onclick=()=>{setMusic(!music);toast(music?"Music on: relax and enjoy the view":"Music off")};
$("relax").onclick=()=>{relax=!relax;try{localStorage.setItem("tumblepro-relax",relax?"1":"0")}catch(e){}side();toast(relax?"Relaxed: unlimited planets":"Relaxed off: planets are limited again")};
$("mute").onclick=()=>{muted=!muted;try{localStorage.setItem("tumblepro-mute",muted?"1":"0")}catch(e){}side();if(!muted)sfx("bell")};
$("panel").addEventListener("click",e=>{
  const lv=e.target.closest("[data-lv]");if(lv){start(+lv.dataset.lv);return}
  const g=e.target.closest("[data-go]");if(!g)return;const a=g.dataset.go;
  if(a==="next")start(li+1);else if(a==="replay")start(li);else if(a==="levels")levels();else if(a==="undo")undo();else closeOv();
});
const first=()=>{const i=LV.findIndex((l,j)=>!best[j]);return i<0?0:i};
const boot=d=>start(d&&Number.isInteger(d.li)&&LV[d.li]?d.li:first());
window.claude?.hot?.snapshot?.(()=>({li}));
window.claude?.hot?.ready?window.claude.hot.ready(boot):boot(window.claude?.hot?.data??{});
}
}
