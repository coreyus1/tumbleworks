{
const C=64, NS="http://www.w3.org/2000/svg";
const COL={r:{n:"Red",a:"#ff7a6a",b:"#b3261e"},b:{n:"Blue",a:"#78b8ff",b:"#1f4fbf"},g:{n:"Green",a:"#86e08f",b:"#1d7f37"},y:{n:"Yellow",a:"#ffe37e",b:"#c98a00"}};
/*LEVELS*/
const LV=[
 {name:"First Drop",hint:"Drag a marble from the rack at the top onto a funnel and let go (or tap a marble, then tap a funnel). Rails nudge it sideways. Fill each cup with its own color.",W:7,H:7,funnels:[1,5],
  grid:[".......",".......",".>...<.",".......","..O....","....Z..","......."],bins:{2:["r",2],4:["b",2]},supply:{r:3,b:3}},
 {name:"The Flipper",hint:"A flipper sends a marble one way, then switches sides for the next marble.",W:7,H:7,funnels:[3],
  grid:[".......",".......","...F...",".......","..Z....","....V..","......."],bins:{2:["r",2],4:["b",2]},supply:{r:3,b:3}},
 {name:"Color Gate",hint:"A gate sends its own color toward its arrow and every other color the other way.",W:7,H:7,funnels:[3],
  grid:[".......","...R...",".......","..V.F..",".......","...A...","......."],bins:{2:["r",2],3:["b",2],5:["y",2]},supply:{r:3,b:3,y:3}},
 {name:"Push Button",hint:"Rolling over a button flips every flipper on the board. Each funnel leads to the same flipper, but not the same way.",W:7,H:8,funnels:[1,5],
  grid:[".......",".....S.",".>...<.","..>.<..","...F...",".......","..A....","....O.."],bins:{2:["g",3],4:["r",3]},supply:{g:4,r:4}},
 {name:"Saw Mill",hint:"Saws destroy any marble that reaches them. Keep the flipper's side in mind.",W:7,H:8,funnels:[3],
  grid:[".......","...F...",".......","..B.y..",".......",".O.X.Z.",".......","......."],bins:{1:["b",3],5:["y",3]},supply:{b:4,y:4}},
 {name:"Double Flip",hint:"Three flippers, three cups. Work out the order before you drop.",W:7,H:8,funnels:[3],
  grid:[".......","...F...",".......","..F.f..",".......",".Z...V.","...A...","......."],bins:{1:["r",2],3:["b",2],5:["g",2]},supply:{r:3,b:3,g:3}},
 {name:"Sorting Yard",hint:"Gates pull reds and greens out early. Blues and yellows share the middle; spares are few.",W:7,H:8,funnels:[1,5],
  grid:[".......",".......",".R...g.",".......","V.F.f.A",".......",".O...Z.","......."],bins:{0:["r",3],1:["b",2],3:["y",3],5:["b",2],6:["g",3]},supply:{r:3,g:3,b:5,y:4}},
 {name:"Clockwork",hint:"Every marble counts: there are no spares. The middle button flips both flippers at once.",W:7,H:8,funnels:[1,3,5],
  grid:[".......","...S...",".F...f.","...A...","O.....Z","..V....",".......","......."],bins:{0:["r",3],2:["b",1],3:["y",2],4:["g",1],6:["b",3]},supply:{r:3,b:4,y:2,g:1}},
 {name:"Chopper Hop",hint:"Helicopters grab a marble and fly it two columns the way they face, then drop it.",W:7,H:8,funnels:[1,3,5],
  grid:[".......","...O...",".H...h.",".......","...F...",".......","..Z....","....V.."],bins:{2:["r",2],4:["b",2]},supply:{r:3,b:3}},
 {name:"Road Trip",hint:"Land on a road and the car drives your marble to the end, then it drops off the far side.",W:7,H:8,funnels:[1,5],
  grid:[".......",".....Z.",".C==...",".......","....F..","...=c..",".......","..V..A."],bins:{2:["g",3],5:["y",3]},supply:{g:4,y:4}},
 {name:"Warp Pipes",hint:"Fall into one warp pipe and you pop out under the other one.",W:7,H:8,funnels:[3],
  grid:[".......","...F...",".......","..P.V..",".......","..A.p..","....f..","......."],bins:{2:["b",3],3:["r",1],5:["g",2]},supply:{r:2,b:4,g:3}},
 {name:"Hold It",hint:"A holder keeps the first marble. The next marble knocks it loose and takes its place.",W:7,H:8,funnels:[3],
  grid:[".......",".......","...M...",".......","...F...",".......","..A....","....O.."],bins:{2:["r",2],4:["b",2]},supply:{r:3,b:3}},
 {name:"Air Traffic",hint:"Two helicopters, three flippers, four cups.",W:9,H:8,funnels:[4],
  grid:[".........","....F....",".........","...h.H...",".........",".F.....f.",".........","O.....Z.."],bins:{0:["r",2],2:["b",2],6:["g",2],8:["y",2]},supply:{r:3,b:3,g:3,y:3}},
 {name:"Rush Hour",hint:"Both roads feed one flipper. The middle funnel has a button. No spares.",W:9,H:8,funnels:[1,4,7],
  grid:[".........","....S....",".C==.==c.",".........","....F....",".........","..c=.=C..","........."],bins:{1:["r",3],7:["b",3]},supply:{r:3,b:3}},
 {name:"Swap Shop",hint:"Holders up top, warp pipes in the middle, gates at the bottom.",W:7,H:8,funnels:[1,5],
  grid:[".......",".M...M.",".......",".P...p.",".......",".R...b.",".......","V...A.."],bins:{0:["r",2],2:["y",2],4:["g",2],6:["b",2]},supply:{r:3,y:3,g:3,b:3}},
 {name:"Grand Machine",hint:"Helicopters, flippers, a button, warp pipes and two cars, all in one box.",W:9,H:9,funnels:[1,4,7],
  grid:[".........","....S....",".H.....h.","...F.f...",".........","..P.A.p..",".........",".c=...C=.","....O...."],bins:{0:["r",2],4:["y",3],8:["b",2]},supply:{r:3,y:4,b:3}},
 {name:"Going Up",hint:"Elevators catch a marble, haul it back to the top and send it down the next track over.",W:7,H:8,funnels:[1],
  grid:[".......",".......",".F.....","...F...","O......","..E.Z..",".......","V......"],bins:{0:["r",2],4:["b",2]},supply:{r:3,b:3}},
 {name:"Elevator Music",hint:"Two elevators, two gates and a flipper that can send a marble up for a second ride.",W:9,H:8,funnels:[4],
  grid:[".........","....F....",".Z.......","...B.r.F.",".........","....V...A","..e...E..","........."],bins:{1:["b",2],4:["y",3],8:["r",2]},supply:{b:3,y:4,r:3}},
 {name:"Tinker Town",hint:"Mixed machine: warp pipes, flippers and a helicopter. A spare marble or two.",W:9,H:8,funnels:[0,3,6],
  grid:[".........","O.....Z..","..P......","p.f...h..",".........",".V.F.....",".........","..A......"],bins:{"2":["y",1],"4":["g",3]},supply:{"y":2,"g":4}},
 {name:"Copper Canyon",hint:"Mixed machine: color gates, warp pipes and flippers. A spare marble or two.",W:7,H:8,funnels:[2,4,6],
  grid:[".......","..b..p.","....f..",".Z....F","...V...",".....A.",".O.P...","......."],bins:{"1":["y",1],"5":["r",3]},supply:{"y":2,"r":4}},
 {name:"Gizmo Gulch",hint:"Mixed machine: flippers, warp pipes and color gates. A spare marble or two.",W:7,H:8,funnels:[1,3,5],
  grid:[".......",".V...F.","...A...",".F...P.","...b...","....p.g","<.O....",".....Z."],bins:{"2":["y",2],"5":["b",2]},supply:{"y":3,"b":3}},
 {name:"Sky Lift",hint:"Mixed machine: warp pipes, flippers, a helicopter and buttons. A spare marble or two.",W:9,H:9,funnels:[1,3,5],
  grid:[".........","..P..A...",".........",".....F...","..H......","......O..",".p..S....",".........","...Z..V.."],bins:{"3":["r",1],"4":["b",2],"6":["r",1]},supply:{"r":3,"b":3}},
 {name:"Spring Street",hint:"Mixed machine: flippers, color gates, a saw, buttons and a helicopter. A spare marble or two.",W:7,H:8,funnels:[1,3,5],
  grid:[".......",".f.O...",".....f.","Z...b..",".......","X.S...y","...h...",".V...A."],bins:{"1":["r",1],"5":["b",3]},supply:{"r":2,"b":4}},
 {name:"Pulley Point",hint:"Mixed machine: warp pipes, flippers, buttons and a helicopter. A spare marble or two.",W:9,H:8,funnels:[1,4],
  grid:[".........",".Z.P.....","...F.....","....S....",".p.......",".........","....H....","..V...A.."],bins:{"2":["b",3],"6":["g",2]},supply:{"b":4,"g":3}},
 {name:"Gear Garden",hint:"Mixed machine: warp pipes and a car. A spare marble or two.",W:9,H:8,funnels:[1,6,8],
  grid:[".........",".V....A..","...p.....","........P",".<.O..C=.",".........",">.......Z","........."],bins:{"1":["r",3],"3":["b",2],"8":["b",2]},supply:{"r":4,"b":5}},
 {name:"Lever Lane",hint:"Mixed machine: warp pipes, flippers and buttons. A spare marble or two.",W:9,H:8,funnels:[0,3,8],
  grid:[".........","A.....P.O","...f.....","........<","Z.p.V.S..",".........",".........","........."],bins:{"0":["r",3],"4":["y",1],"6":["y",2],"7":["r",1]},supply:{"r":5,"y":4}},
 {name:"Ratchet Run",hint:"Mixed machine: flippers, a saw and buttons. A spare marble or two.",W:7,H:8,funnels:[0,2,5],
  grid:[".......",".....f.","f.X.S..","......O","....Z..",".S.....","......V",".A....."],bins:{"1":["r",3],"4":["y",2]},supply:{"r":4,"y":3}},
 {name:"Boiler Room",hint:"Mixed machine: color gates, warp pipes and an elevator. A spare marble or two.",W:7,H:8,funnels:[2,4,6],
  grid:[".......","..Z...V","....b..","......p","......g","...e...","..P..A.","......."],bins:{"2":["r",3],"5":["y",3]},supply:{"r":4,"y":4}},
 {name:"Sprocket Hill",hint:"Mixed machine: flippers, buttons, a helicopter and a car. A spare marble or two.",W:7,H:9,funnels:[1,3,6],
  grid:[".......",".F....F","...S...","V..F...","..F..h.",".......","=c.A...",".......","....O.."],bins:{"3":["r",3],"4":["b",2]},supply:{"r":4,"b":3}},
 {name:"Bolt Bay",hint:"Mixed machine: warp pipes, color gates, a saw and a helicopter. A spare marble or two.",W:7,H:8,funnels:[1,3,5],
  grid:[".......","...A.>.","pP.....","......O","...R...","X...h..","..Z...b","......."],bins:{"2":["y",3],"5":["r",1]},supply:{"y":4,"r":2}},
 {name:"Cog Junction",hint:"Mixed machine: flippers, buttons and warp pipes. No spare marbles: plan the whole order.",W:9,H:8,funnels:[3,5,7],
  grid:[".........",".........","...f.S..P",".........","..O.p<.Z.",".........","....V...A","........."],bins:{"4":["y",3],"8":["g",3]},supply:{"y":3,"g":3}},
 {name:"Steam Works",hint:"Mixed machine: buttons, flippers, color gates and an elevator. No spare marbles: plan the whole order.",W:7,H:8,funnels:[1,4,6],
  grid:[".......",".Z..S.V",".......",".f..A..","..y...F","R...<..",".....E.",".O....."],bins:{"1":["r",3],"3":["y",2]},supply:{"r":3,"y":2}},
 {name:"Whirligig",hint:"Mixed machine: buttons and holders. A spare marble or two.",W:7,H:9,funnels:[0,2,4],
  grid:[".......","V......","..S.M..",".......","A.M.O..",".......","<.Z....","....S..","......."],bins:{"2":["b",3],"4":["y",3]},supply:{"b":4,"y":4}},
 {name:"Doohickey Depot",hint:"Mixed machine: warp pipes, flippers and color gates. No spare marbles: plan the whole order.",W:7,H:8,funnels:[0,4,6],
  grid:[".......","A.....P","....F..",".....G.","O..Z...",".......","....<p.","V......"],bins:{"0":["y",2],"3":["g",3],"5":["b",3]},supply:{"y":2,"g":3,"b":3}},
 {name:"The Contraption",hint:"Mixed machine: a helicopter, buttons, warp pipes and holders. A spare marble or two.",W:9,H:9,funnels:[0,3,8],
  grid:[".........","O..Z....V",".........","........h","S..S....P","...p..M..","A........",".........","........."],bins:{"0":["r",2],"6":["b",3],"8":["y",3]},supply:{"r":3,"b":4,"y":4}},
 {name:"Mad Lab",hint:"Mixed machine: warp pipes, flippers and a car. No spare marbles: plan the whole order.",W:9,H:8,funnels:[0,3,6],
  grid:[".........","Z.P...V..",".........",".........","A.<f.....","....p.F..",".O....=c.","........."],bins:{"0":["r",3],"1":["y",3],"2":["r",3],"5":["y",2]},supply:{"r":6,"y":5}},
 {name:"Seesaw City",hint:"New: teeter-totters send marbles to their low side and only tip after every SECOND marble (watch the little lights). In this machine: a car, teeter-totters and color gates. A spare marble or two.",W:7,H:9,funnels:[4],
  grid:[".......","..==c..",".T.....","..b....","O..T...",".......","....Z..","V.r....","......."],bins:{"0":["r",2],"1":["b",2]},supply:{"r":3,"b":3}},
 {name:"Pinball Parlor",hint:"New: pinball bumpers kick a marble back the way it came. Straight from above, they kick toward the red arrow. In this machine: flippers, pinball bumpers and warp pipes. A spare marble or two.",W:7,H:8,funnels:[2,5],
  grid:[".......",".......","..F..U.","....F..",".....>.","..pP...","......Z",".V....."],bins:{"1":["r",2],"2":["b",1],"6":["b",2]},supply:{"r":3,"b":4}},
 {name:"Balance Beam",hint:"Mixed machine: teeter-totters, warp pipes, an elevator and color gates. A spare marble or two.",W:9,H:8,funnels:[2,4,6],
  grid:[".........","..V...A..","....t....","..P......",".........","...O.e...",".....pr..","........."],bins:{"3":["r",2],"5":["b",1],"7":["r",1]},supply:{"r":4,"b":2}},
 {name:"Tipping Point",hint:"Mixed machine: teeter-totters, flippers and a car. A spare marble or two.",W:7,H:9,funnels:[3,5],
  grid:[".......","...T...","....f..","..A..f.",".......","....C=.","...t...","......O","..Z...."],bins:{"2":["g",2],"4":["y",1],"6":["r",1]},supply:{"g":3,"y":2,"r":2}},
 {name:"Arcade Alley",hint:"Mixed machine: flippers, warp pipes, buttons, teeter-totters and pinball bumpers. A spare marble or two.",W:7,H:9,funnels:[1,4,6],
  grid:[".......",".f...p.","..S....","O.f.Z.T",".......","...V...","fU...A.",".Pt....","......."],bins:{"4":["y",3],"5":["r",2]},supply:{"y":4,"r":3}},
 {name:"Bumper Cars",hint:"Mixed machine: flippers, a car, teeter-totters and pinball bumpers. A spare marble or two.",W:7,H:8,funnels:[3,5],
  grid:[".......",".....F.","....f..","......Z","..=c...",".......",".t...u.","......."],bins:{"0":["r",2],"2":["b",2]},supply:{"r":3,"b":3}},
 {name:"Tilt!",hint:"Mixed machine: flippers, pinball bumpers, buttons and teeter-totters. A spare marble or two.",W:9,H:9,funnels:[0,4,7],
  grid:[".........","V......F.","....F....","......A.U","O..Z.....",".........","S........","T........","........."],bins:{"3":["r",2],"5":["b",1],"6":["r",1]},supply:{"r":4,"b":2}},
 {name:"Ricochet",hint:"Mixed machine: color gates, teeter-totters, buttons and pinball bumpers. A spare marble or two.",W:7,H:9,funnels:[2,4,6],
  grid:[".......","..R.A..",".t....S","..U....","S...O..","......Z","V......",".......","......."],bins:{"3":["b",2],"4":["r",3]},supply:{"b":3,"r":4}},
 {name:"Jackpot",hint:"Mixed machine: color gates, flippers, pinball bumpers and teeter-totters. A spare marble or two.",W:9,H:9,funnels:[1,3,7],
  grid:[".........",".O.....b.",".........","...f..Z..",".V......f","....A..u.","......U..",".......T.","........."],bins:{"2":["y",2],"4":["g",3]},supply:{"y":3,"g":4}},
 {name:"Funhouse",hint:"Mixed machine: buttons, holders, flippers, color gates, teeter-totters and pinball bumpers. A spare marble or two.",W:9,H:8,funnels:[1,4,7],
  grid:[".........",".Z..V....",".......S.",".M..<....",".........",".F.....r.","T.u......","......A.."],bins:{"3":["b",2],"6":["g",3]},supply:{"b":3,"g":4}},
 {name:"Teeter Tower",hint:"Mixed machine: flippers, warp pipes, teeter-totters and color gates. No spare marbles: plan the whole order.",W:9,H:9,funnels:[0,3,5],
  grid:[".........","...F..P..",">.....>..","....V....","..t....A.","....g....",".p.......","...O...Z.","........."],bins:{"3":["r",1],"5":["y",3],"7":["y",1]},supply:{"r":1,"y":4}},
 {name:"Gadget Garage",hint:"Mixed machine: teeter-totters, flippers and a helicopter. No spare marbles: plan the whole order.",W:9,H:8,funnels:[3,5,7],
  grid:[".........","...A...O.",".....T...",".......F.","....h....","...t....Z","......f..","..V......"],bins:{"2":["b",2],"5":["r",1],"7":["y",2],"8":["b",3]},supply:{"b":5,"r":1,"y":2}},
 {name:"Clockmaker",hint:"Mixed machine: color gates, warp pipes, pinball bumpers, teeter-totters and flippers. No spare marbles: plan the whole order.",W:9,H:8,funnels:[1,3,7],
  grid:[".........",".O.R...Z.","....p....","..U......",".t..P..V.",".........","A......f.","........."],bins:{"4":["y",3],"6":["r",1],"8":["g",2]},supply:{"y":3,"r":1,"g":2}},
 {name:"Grand Finale",hint:"Mixed machine: buttons, pinball bumpers, color gates, a saw, an elevator and flippers. No spare marbles: plan the whole order.",W:7,H:8,funnels:[0,3,5],
  grid:[".......","Z..V.S.",".......","...U.Y.","X.E.f..","......A","...O...","......."],bins:{"3":["y",3],"5":["g",3],"6":["g",3]},supply:{"y":3,"g":6}}
];
/*ENGINE*/
const ROAD="Cc=";
function flipAll(g){g.forEach(row=>row.forEach((v,j)=>{if(v==="F")row[j]="f";else if(v==="f")row[j]="F"}))}
function snap(st){return {g:st.g.map(r=>r.join("")),hold:{...st.hold},tt:{...st.tt}}}
function roll(L,st,k,c){
  const ev=[];let r=0,cc=c,n=0,pc=c;
  const lose=f=>{st.lost++;ev.push({t:"lost",fate:f});return ev};
  ev.push({t:"to",r:0,c:cc});
  while(true){
    if(++n>90)return lose("It got stuck going in circles");
    const ch=st.g[r][cc];let nc=cc,nr=r+1,from=cc;const entry=Math.sign(cc-pc);
    if(ch==="<")nc--;else if(ch===">")nc++;
    else if(ch==="F"||ch==="f"){nc+=ch==="f"?1:-1;st.g[r][cc]=ch==="f"?"F":"f";ev.push({t:"grid",s:snap(st),snd:"flip"})}
    else if(ch==="S"){flipAll(st.g);ev.push({t:"grid",s:snap(st),btn:[r,cc],snd:"button"})}
    else if(ch==="X"){ev.push({t:"saw"});return lose("The saw got it")}
    else if("RBGY".includes(ch)){nc+=ch.toLowerCase()===k?-1:1;ev.push({t:"snd",snd:"gate"})}
    else if("rbgy".includes(ch)){nc+=ch===k?1:-1;ev.push({t:"snd",snd:"gate"})}
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
    if(nc<0||nc>=L.W){ev.push({t:"off",r:nr,c:nc});return lose("It flew off the edge")}
    pc=from;r=nr;cc=nc;
    if(r>=L.H){
      ev.push({t:"to",r:L.H,c:cc});
      const bn=st.bins[cc];
      if(!bn)return lose("No cup there");
      if(bn.k!==k)return lose("Wrong color for that cup");
      if(bn.have>=bn.need)return lose("That cup is already full");
      bn.have++;st.score+=100;ev.push({t:"bin",full:bn.have>=bn.need});return ev;
    }
    ev.push({t:"to",r,c:cc});
  }
}
function tracks(L){
  const g=L.grid,E=new Map(),seen=new Set(),q=[];
  const add=(r1,c1,r2,c2)=>{if(c2<0||c2>=L.W)return;const k=r1+","+c1+">"+r2+","+c2;if(!E.has(k))E.set(k,[r1,c1,r2,c2]);if(r2<L.H&&!seen.has(r2+","+c2)){seen.add(r2+","+c2);q.push([r2,c2])}};
  L.funnels.forEach(c=>add(-1,c,0,c));
  while(q.length){const [r,c]=q.shift(),ch=g[r][c];
    if(ch==="X")continue;
    if(ch==="<")add(r,c,r+1,c-1);else if(ch===">")add(r,c,r+1,c+1);
    else if("FfRBGYrbgyTtUu".includes(ch)){add(r,c,r+1,c-1);add(r,c,r+1,c+1)}
    else if(ch==="H"||ch==="h"){const c2=c+(ch==="H"?2:-2);add(r,c2,r+1,c2)}
    else if(ROAD.includes(ch)){let a=c,b=c;while(a>0&&ROAD.includes(g[r][a-1]))a--;while(b<L.W-1&&ROAD.includes(g[r][b+1]))b++;let d=1;for(let j=a;j<=b;j++){if(g[r][j]==="C")d=1;if(g[r][j]==="c")d=-1}const e=d>0?b:a;add(r,e,r+1,e+d)}
    else if(ch==="P"||ch==="p"){const o=ch==="P"?"p":"P";g.forEach((row,i)=>{const j=row.indexOf(o);if(j>=0)add(i,j,i+1,j)})}
    else if(ch==="E"||ch==="e"){add(0,c,1,c+(ch==="E"?1:-1))}
    else add(r,c,r+1,c);
  }
  return [...E.values()];
}
function newState(L){const st={g:L.grid.map(r=>r.split("")),hold:{},tt:{},sup:{...L.supply},bins:{},score:0,lost:0};for(const [c,[k,n]] of Object.entries(L.bins))st.bins[c]={k,need:n,have:0};return st}
/*END*/
if(typeof document!=="undefined"){
const $=id=>document.getElementById(id);
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const SP=reduce?40:150;
let li=0,L=null,st=null,sel=null,busy=false,hist=[],tt=null;
let best={},muted=false;
try{best=JSON.parse(localStorage.getItem("tumble-best")||"{}");muted=localStorage.getItem("tumble-mute")==="1"}catch(e){}
const saveBest=()=>{try{localStorage.setItem("tumble-best",JSON.stringify(best))}catch(e){}};
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
function grad(k){const c=COL[k];return '<radialGradient id="m-'+k+'" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset=".2" stop-color="'+c.a+'"/><stop offset="1" stop-color="'+c.b+'"/></radialGradient>'}
function drawBoard(){
  const W=L.W*C,H=(L.H+2)*C,s=$("sv");
  s.setAttribute("viewBox","0 0 "+W+" "+H);
  let h='<defs>'+Object.keys(COL).map(grad).join("")+'<pattern id="peg" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="16" cy="16" r="2.2" fill="rgba(110,70,30,.22)"/></pattern><radialGradient id="bm" cx=".35" cy=".3"><stop offset="0" stop-color="#ff9a8a"/><stop offset="1" stop-color="#b3261e"/></radialGradient><radialGradient id="vx"><stop offset="0" stop-color="#2a2e33"/><stop offset=".55" stop-color="#8f979f"/><stop offset="1" stop-color="#dfe5ea"/></radialGradient><linearGradient id="fb" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0c766"/><stop offset="1" stop-color="#a67a22"/></linearGradient></defs>';
  h+='<line x1="0" x2="'+W+'" y1="'+(C-2)+'" y2="'+(C-2)+'" stroke="#5d646b" stroke-width="4"/><line x1="0" x2="'+W+'" y1="'+(C+L.H*C+2)+'" y2="'+(C+L.H*C+2)+'" stroke="#5d646b" stroke-width="4"/>';
  h+='<g id="tk">'+rails()+'</g>';
  h+=L.funnels.map(c=>{const x=cx(c);return '<g class="fn" data-c="'+c+'" tabindex="0" role="button" aria-label="Drop into funnel '+(c+1)+'"><rect x="'+(x-30)+'" y="0" width="60" height="'+C+'" fill="transparent"/><path class="fbody" d="M'+(x-28)+' 6 H'+(x+28)+' L'+(x+11)+' '+(C-6)+' H'+(x-11)+' Z" fill="url(#fb)" stroke="#7a5418" stroke-width="2"/><ellipse cx="'+x+'" cy="8" rx="27" ry="5" fill="#5a3a12" opacity=".55"/></g>'}).join("");
  h+='<g id="pz"></g><g id="bz"></g><g id="ml"></g>';
  s.innerHTML=h;
  pieces();bins();
}
const ry=r=>r<0?C/2:r>=L.H?C+L.H*C+22:cy(r);
const curve=(x1,y1,x2,y2)=>{const ym=(y1+y2)/2;return 'M'+x1+' '+y1+' C'+x1+' '+ym+' '+x2+' '+ym+' '+x2+' '+y2};
function rails(){
  let ties="",sh="",rl="";
  tracks(L).forEach(([r1,c1,r2,c2])=>{const d=curve(cx(c1),ry(r1),cx(c2),ry(r2));ties+='<path d="'+d+'"/>';for(const o of [-7,7]){sh+='<path transform="translate('+(o+1.5)+',2)" d="'+d+'"/>';rl+='<path transform="translate('+o+',0)" d="'+d+'"/>'}});
  return '<g fill="none" stroke="#4d545b" stroke-width="22" stroke-dasharray="3 11" opacity=".6">'+ties+'</g><g fill="none" stroke="rgba(0,0,0,.35)" stroke-width="3.5">'+sh+'</g><g fill="none" stroke="#eef2f5" stroke-width="3" stroke-linecap="round">'+rl+'</g>';
}
function roads(g){
  let h="";
  g.forEach((row,r)=>{let j=0;while(j<row.length){if(ROAD.includes(row[j])){let a=j;while(j<row.length&&ROAD.includes(row[j]))j++;const b=j-1,y=cy(r);
    h+='<rect x="'+(a*C+2)+'" y="'+(y+6)+'" width="'+((b-a+1)*C-4)+'" height="20" rx="4" fill="#4a4b52"/><line x1="'+(a*C+10)+'" x2="'+((b+1)*C-10)+'" y1="'+(y+16)+'" y2="'+(y+16)+'" stroke="#ffd34d" stroke-width="2.5" stroke-dasharray="9 8"/>'}else j++}});
  return h;
}
function piece(ch,r,c,hold,tt){
  const x=cx(c),y=cy(r);
  if(ch==="<"||ch===">"){const d=ch===">"?1:-1;return '<line class="rail" x1="'+(x-d*24)+'" y1="'+(y-20)+'" x2="'+(x+d*20)+'" y2="'+(y+18)+'"/><line class="rail2" x1="'+(x-d*24)+'" y1="'+(y-21)+'" x2="'+(x+d*20)+'" y2="'+(y+17)+'"/><circle class="nail" cx="'+(x-d*24)+'" cy="'+(y-20)+'" r="4"/>'}
  if(ch==="F"||ch==="f"){const d=ch==="f"?1:-1;return '<g class="flipg" style="transform-origin:'+x+'px '+(y-2)+'px;transform:scaleX('+(-d)+')"><line class="paddle" x1="'+(x+18)+'" y1="'+(y-20)+'" x2="'+(x-20)+'" y2="'+(y+16)+'"/><line class="paddle2" x1="'+(x+18)+'" y1="'+(y-21)+'" x2="'+(x-20)+'" y2="'+(y+15)+'"/></g><circle cx="'+x+'" cy="'+(y-2)+'" r="6" fill="#d4a640" stroke="#7a5418" stroke-width="2"/>'}
  if("RBGYrbgy".includes(ch)){const k=ch.toLowerCase(),d=ch===k?1:-1,c2=COL[k];
    return '<path d="M'+x+' '+(y-20)+' L'+(x+20)+' '+y+' L'+x+' '+(y+20)+' L'+(x-20)+' '+y+' Z" fill="url(#m-'+k+')" stroke="'+c2.b+'" stroke-width="3"/><path d="M'+(x+d*25)+' '+(y-8)+' L'+(x+d*34)+' '+y+' L'+(x+d*25)+' '+(y+8)+' Z" fill="'+c2.b+'"/><path d="M'+(x-d*25)+' '+(y-6)+' L'+(x-d*32)+' '+y+' L'+(x-d*25)+' '+(y+6)+' Z" fill="#8a7458" opacity=".7"/>'}
  if(ch==="S")return '<g id="btn-'+r+'-'+c+'" style="transform-box:fill-box;transform-origin:center"><circle cx="'+x+'" cy="'+y+'" r="17" fill="#6b4a2a"/><circle cx="'+x+'" cy="'+(y-2)+'" r="12" fill="#e9493b" stroke="#8f1f14" stroke-width="2"/><ellipse cx="'+(x-4)+'" cy="'+(y-6)+'" rx="4" ry="2.5" fill="#fff" opacity=".6"/></g>';
  if(ch==="X"){let p="";for(let i=0;i<24;i++){const a=i*Math.PI/12,R=i%2?14:22;p+=(i?"L":"M")+(x+R*Math.cos(a)).toFixed(1)+" "+(y+R*Math.sin(a)).toFixed(1)}return '<path class="saw" d="'+p+'Z" fill="#b9c2cc" stroke="#5b6670" stroke-width="2"/><circle cx="'+x+'" cy="'+y+'" r="5" fill="#5b6670"/>'}
  if(ch==="H"||ch==="h"){const d=ch==="H"?1:-1;
    return '<g id="heli-'+r+'-'+c+'" class="veh"><line x1="'+(x-d*14)+'" y1="'+(y-12)+'" x2="'+(x-d*32)+'" y2="'+(y-16)+'" stroke="#1f4f8a" stroke-width="5" stroke-linecap="round"/><circle cx="'+(x-d*32)+'" cy="'+(y-16)+'" r="5" fill="none" stroke="#1f4f8a" stroke-width="2"/><ellipse cx="'+x+'" cy="'+(y-12)+'" rx="17" ry="11" fill="#3b8ee0" stroke="#1f4f8a" stroke-width="2"/><ellipse cx="'+(x+d*7)+'" cy="'+(y-14)+'" rx="7" ry="5" fill="#d8f0ff"/><line x1="'+(x-12)+'" y1="'+(y+3)+'" x2="'+(x+12)+'" y2="'+(y+3)+'" stroke="#1f4f8a" stroke-width="3" stroke-linecap="round"/><line x1="'+x+'" y1="'+(y-23)+'" x2="'+x+'" y2="'+(y-28)+'" stroke="#1f4f8a" stroke-width="3"/><line class="rotor" x1="'+(x-28)+'" y1="'+(y-28)+'" x2="'+(x+28)+'" y2="'+(y-28)+'" stroke="#2a1a10" stroke-width="3" stroke-linecap="round"/><path d="M'+(x+d*20)+' '+(y+12)+' l'+(d*8)+' 5 l'+(-d*8)+' 5 z" fill="#1f4f8a"/></g>'}
  if(ch==="C"||ch==="c"){const d=ch==="C"?1:-1;
    return '<g id="car-'+r+'-'+c+'" class="veh"><rect x="'+(x-22)+'" y="'+(y-6)+'" width="44" height="16" rx="5" fill="#ff8a1f" stroke="#a24d00" stroke-width="2"/><path d="M'+(x-12)+' '+(y-6)+' L'+(x-6)+' '+(y-16)+' H'+(x+8)+' L'+(x+14)+' '+(y-6)+' Z" fill="#ffb15c" stroke="#a24d00" stroke-width="2"/><circle cx="'+(x-12)+'" cy="'+(y+11)+'" r="6" fill="#222"/><circle cx="'+(x+12)+'" cy="'+(y+11)+'" r="6" fill="#222"/><circle cx="'+(x+d*20)+'" cy="'+(y)+'" r="3" fill="#fff6b0"/></g>'}
  if(ch==="T"||ch==="t"){const d=ch==="T"?-1:1,n=(tt&&tt[r+","+c])||0;
    return '<path d="M'+x+' '+(y+2)+' L'+(x-9)+' '+(y+18)+' H'+(x+9)+' Z" fill="#d4a640" stroke="#7a5418" stroke-width="2"/><line x1="'+(x-28)+'" y1="'+(y+d*-9)+'" x2="'+(x+28)+'" y2="'+(y+d*9)+'" stroke="#2f3439" stroke-width="7" stroke-linecap="round"/><line x1="'+(x-28)+'" y1="'+(y+d*-9-1)+'" x2="'+(x+28)+'" y2="'+(y+d*9-1)+'" stroke="#ff8a1f" stroke-width="3" stroke-linecap="round"/>'+[0,1].map(i=>'<circle cx="'+(x-d*(12+i*9))+'" cy="'+(y-7-(12+i*9)*0.32).toFixed(1)+'" r="3.5" fill="'+(i<n?"#ff8a1f":"none")+'" stroke="#2f3439" stroke-width="1.5"/>').join("")}
  if(ch==="U"||ch==="u"){const d=ch==="U"?1:-1;
    return '<g id="bmp-'+r+'-'+c+'" style="transform-box:fill-box;transform-origin:center"><circle cx="'+x+'" cy="'+y+'" r="20" fill="#2f3439"/><circle cx="'+x+'" cy="'+(y-2)+'" r="17" fill="url(#bm)" stroke="#fff" stroke-width="3"/><circle cx="'+x+'" cy="'+(y-2)+'" r="8" fill="#fff6d0" stroke="#e9493b" stroke-width="2"/></g><path d="M'+(x+d*22)+' '+(y+10)+' l'+(d*9)+' 5 l'+(-d*9)+' 5 z" fill="#e9493b"/>'}
  if(ch==="O")return '<circle cx="'+x+'" cy="'+(y-2)+'" r="21" fill="none" stroke="rgba(0,0,0,.3)" stroke-width="10" transform="translate(1.5,2)"/><circle cx="'+x+'" cy="'+(y-2)+'" r="25" fill="none" stroke="#eef2f5" stroke-width="3"/><circle cx="'+x+'" cy="'+(y-2)+'" r="17" fill="none" stroke="#eef2f5" stroke-width="3"/><circle cx="'+x+'" cy="'+(y-2)+'" r="21" fill="none" stroke="#4d545b" stroke-width="10" stroke-dasharray="2 7" opacity=".6"/><circle cx="'+x+'" cy="'+(y+21)+'" r="3.5" fill="#d4a640"/>';
  if(ch==="V")return '<ellipse cx="'+x+'" cy="'+(y-4)+'" rx="30" ry="13" fill="#5d646b"/><ellipse cx="'+x+'" cy="'+(y-6)+'" rx="30" ry="12" fill="url(#vx)" stroke="#d4a640" stroke-width="3"/><ellipse cx="'+x+'" cy="'+(y-5)+'" rx="18" ry="7" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="1.5"/><ellipse cx="'+x+'" cy="'+(y-4)+'" rx="8" ry="3.5" fill="none" stroke="rgba(0,0,0,.3)" stroke-width="1.5"/><ellipse cx="'+x+'" cy="'+(y-3)+'" rx="4" ry="2" fill="#1d2125"/><path d="M'+(x-6)+' '+(y+4)+' L'+(x-4)+' '+(y+16)+' H'+(x+4)+' L'+(x+6)+' '+(y+4)+'" fill="#8a6420"/>';
  if(ch==="Z"){let p1="",p2="";for(let i=0;i<=24;i++){const t=i/24,yy=y-26+t*52,ph=t*Math.PI*4;p1+=(i?"L":"M")+(x+16*Math.sin(ph)).toFixed(1)+" "+yy.toFixed(1);p2+=(i?"L":"M")+(x+16*Math.sin(ph+.9)).toFixed(1)+" "+(yy+3).toFixed(1)}return '<path d="'+p1+'" fill="none" stroke="rgba(0,0,0,.3)" stroke-width="4" transform="translate(1.5,2)"/><path d="'+p1+'" fill="none" stroke="#eef2f5" stroke-width="3"/><path d="'+p2+'" fill="none" stroke="#c9d1d8" stroke-width="3"/><line x1="'+x+'" y1="'+(y-28)+'" x2="'+x+'" y2="'+(y+28)+'" stroke="#3c4248" stroke-width="3"/>'}
  if(ch==="A"){const d='M'+(x-30)+' '+(y+14)+' C'+(x-14)+' '+(y+14)+' '+(x-14)+' '+(y-26)+' '+x+' '+(y-26)+' C'+(x+14)+' '+(y-26)+' '+(x+14)+' '+(y+14)+' '+(x+30)+' '+(y+14);return '<path d="'+d+'" fill="none" stroke="rgba(0,0,0,.3)" stroke-width="4" transform="translate(1.5,2)"/><path d="'+d+'" fill="none" stroke="#eef2f5" stroke-width="3" transform="translate(0,-6)"/><path d="'+d+'" fill="none" stroke="#eef2f5" stroke-width="3" transform="translate(0,4)"/><line x1="'+(x-10)+'" y1="'+(y+16)+'" x2="'+(x-10)+'" y2="'+(y-6)+'" stroke="#3c4248" stroke-width="3"/><line x1="'+(x+10)+'" y1="'+(y+16)+'" x2="'+(x+10)+'" y2="'+(y-6)+'" stroke="#3c4248" stroke-width="3"/>'}
  if(ch==="E"||ch==="e"){const d=ch==="E"?1:-1,top=cy(0)-24;
    return '<line x1="'+(x-20)+'" y1="'+top+'" x2="'+(x-20)+'" y2="'+(y+20)+'" stroke="#3c4248" stroke-width="5"/><line x1="'+(x+20)+'" y1="'+top+'" x2="'+(x+20)+'" y2="'+(y+20)+'" stroke="#3c4248" stroke-width="5"/><line x1="'+x+'" y1="'+top+'" x2="'+x+'" y2="'+(y-16)+'" stroke="#2a2e33" stroke-width="1.5" stroke-dasharray="4 3"/><rect x="'+(x-27)+'" y="'+(top-9)+'" width="54" height="10" rx="3" fill="#3c4248"/><circle cx="'+x+'" cy="'+(top-4)+'" r="6" fill="#d4a640" stroke="#7a5418" stroke-width="2"/><path d="M'+(x+d*24)+' '+(top+16)+' l'+(d*10)+' 4 l'+(-d*7)+' 7 z" fill="#ff8a1f"/><g id="lift-'+r+'-'+c+'" class="veh"><rect x="'+(x-18)+'" y="'+(y-18)+'" width="36" height="36" rx="4" fill="rgba(255,138,31,.16)" stroke="#ff8a1f" stroke-width="3"/><line x1="'+(x-18)+'" y1="'+(y+8)+'" x2="'+(x+18)+'" y2="'+(y+8)+'" stroke="#ff8a1f" stroke-width="3"/></g>'}
  if(ch==="P"||ch==="p"){const col=ch==="P"?"#8a5cf6":"#ff9f1c";return '<circle cx="'+x+'" cy="'+y+'" r="20" fill="#2a1a10" stroke="'+col+'" stroke-width="6"/><path class="warp" d="M'+(x-10)+' '+y+' a10 10 0 1 1 10 10" fill="none" stroke="'+col+'" stroke-width="3" stroke-linecap="round"/>'}
  if(ch==="M"){const k=hold[r+","+c];return '<path d="M'+(x-21)+' '+(y-16)+' Q'+(x-21)+' '+(y+20)+' '+x+' '+(y+20)+' Q'+(x+21)+' '+(y+20)+' '+(x+21)+' '+(y-16)+'" fill="none" stroke="#5a3a22" stroke-width="6" stroke-linecap="round"/><circle cx="'+(x-21)+'" cy="'+(y-16)+'" r="4" fill="#d4a640"/><circle cx="'+(x+21)+'" cy="'+(y-16)+'" r="4" fill="#d4a640"/>'+(k?'<circle cx="'+x+'" cy="'+(y+2)+'" r="15" fill="url(#m-'+k+')"/>':"")}
  return "";
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
  $("rack").innerHTML=Object.keys(L.supply).map(k=>'<button class="rm" data-k="'+k+'" aria-pressed="'+(k===sel)+'" aria-label="'+COL[k].n+' marbles, '+st.sup[k]+' left"'+(st.sup[k]?"":" disabled")+'><span class="ball" style="background:'+ball(k)+'"></span><span class="n">'+st.sup[k]+'</span></button>').join("");
  $("cups").innerHTML=Object.values(st.bins).map(b=>'<div class="cup'+(b.have>=b.need?" done":"")+'"><span class="dot" style="background:'+COL[b.k].b+'"></span><span>'+COL[b.k].n+' cup</span><span>'+b.have+" of "+b.need+'</span></div>').join("");
  $("score").textContent=st.score;$("lost").textContent=st.lost;
  $("undo").disabled=!hist.length;
  $("mute").textContent=muted?"Sound off":"Sound on";$("mute").setAttribute("aria-pressed",String(muted));
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
  if(busy||!sel||!st.sup[sel])return;
  busy=true;hist.push(JSON.stringify(st));
  const k=sel;st.sup[k]--;side();sfx("drop");
  const ev=roll(L,st,k,c);
  const m=document.createElementNS(NS,"circle");m.setAttribute("r","16");m.setAttribute("fill","url(#m-"+k+")");$("ml").appendChild(m);
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
    else if(e.t==="swap"){m.setAttribute("fill","url(#m-"+e.k+")");await wait(SP)}
    else if(e.t==="park"){m.remove()}
    else if(e.t==="saw")sfx("saw");
    else if(e.t==="off"){await tw(m,x,y,cx(e.c),y+C,SP*1.2)}
    else if(e.t==="lost"){toast(e.fate+": marble lost");sfx("lost");fade(m)}
    else if(e.t==="bin"){m.remove();sfx(e.full?"full":"bell")}
  }
  pieces();bins();
  if(!st.sup[sel]){const n=Object.keys(st.sup).find(q=>st.sup[q]>0);if(n)sel=n}
  busy=false;side();check();
}
function check(){
  const bs=Object.values(st.bins);
  if(bs.every(b=>b.have>=b.need)){
    const spare=Object.values(st.sup).reduce((a,b)=>a+b,0);st.score+=spare*50;side();
    const n=st.lost===0?3:st.lost<=2?2:1;
    if(n>(best[li]||0)){best[li]=n;saveBest()}
    const last=li===LV.length-1;sfx("win");
    ov('<h2>'+(last?"You finished the box!":"Level complete")+'</h2><div class="stars">'+stars(n)+'</div><p>Score '+st.score+' · '+st.lost+' lost · '+spare+' spare marble'+(spare===1?"":"s")+' (+'+(spare*50)+')</p><div class="btns" style="justify-content:center">'+(last?"":'<button class="b" data-go="next">Next level</button>')+'<button class="b q" data-go="replay">Play again</button><button class="b q" data-go="levels">Levels</button></div>');
    return;
  }
  const held=Object.values(st.hold);
  const short=Object.keys(COL).find(k=>bs.filter(b=>b.k===k).reduce((a,b)=>a+b.need-b.have,0)>(st.sup[k]||0)+held.filter(h=>h===k).length);
  const none=Object.values(st.sup).every(v=>!v);
  if(short||none){sfx("stuck");ov('<h2>'+(short?"Out of "+COL[short].n.toLowerCase()+" marbles":"Out of marbles")+'</h2><p>'+(short?"There aren't enough "+COL[short].n.toLowerCase()+" marbles left to fill the cups.":"Every marble has been used, but some cups are still empty.")+'</p><div class="btns" style="justify-content:center"><button class="b" data-go="undo">Undo last drop</button><button class="b q" data-go="replay">Restart</button></div>')}
}
function ov(h){$("panel").innerHTML=h;$("ov").classList.add("on")}
function closeOv(){$("ov").classList.remove("on")}
function levels(){ov('<h2>Pick a level</h2><div class="lvls">'+LV.map((l,i)=>'<button class="lb" data-lv="'+i+'"><b>'+(i+1)+". "+l.name+'</b><span class="s">'+(best[i]?"★".repeat(best[i]):"Not solved yet")+'</span></button>').join("")+'</div><div class="btns" style="justify-content:center;margin-top:14px"><button class="b q" data-go="close">Close</button></div>')}
function undo(){if(busy||!hist.length)return;st=JSON.parse(hist.pop());const n=Object.keys(st.sup).find(q=>st.sup[q]>0);if(!st.sup[sel]&&n)sel=n;pieces();bins();$("ml").innerHTML="";side();closeOv()}

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
$("mute").onclick=()=>{muted=!muted;try{localStorage.setItem("tumble-mute",muted?"1":"0")}catch(e){}side();if(!muted)sfx("bell")};
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
