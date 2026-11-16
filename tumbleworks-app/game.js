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
const LVE=[
 {name:"First Roll",hint:"Drag a marble from the top onto a funnel and let go. Slides push marbles to the side. Put each marble in the cup that matches its color. You have 3 extra marbles.",W:6,H:5,funnels:[1,5],grid:["......",".>...O","......","..>...",".....Z"],bins:{3:["b",2],5:["r",1]},supply:{b:4,r:2}},
 {name:"Slide Over",hint:"Use what you've learned. Watch where each marble goes before you drop the next one. You have 3 extra marbles.",W:6,H:5,funnels:[2,4],grid:["......","..>.Z.","......","...V..","......"],bins:{3:["r",1],4:["b",1]},supply:{r:3,b:2}},
 {name:"Flip Flop",hint:"New: flippers! A flipper sends the marble one way, then flips to send the next one the other way. You have 3 extra marbles.",W:5,H:6,funnels:[3],grid:[".....",".....","...f.","..>..","....V","....."],bins:{3:["g",1],4:["b",1]},supply:{g:3,b:2}},
 {name:"Back and Forth",hint:"Use what you've learned. Watch where each marble goes before you drop the next one. You have 3 extra marbles.",W:6,H:5,funnels:[0],grid:["......","......",">.....",".F....","......"],bins:{0:["y",1],2:["r",1]},supply:{y:3,r:2}},
 {name:"Color Doors",hint:"New: color doors! A marble that matches the door goes to the colored side. Other colors go the other way. You have 3 extra marbles.",W:7,H:6,funnels:[0,2],grid:[".......","..O....",">......",".......","..G....","......."],bins:{1:["b",2],3:["r",1]},supply:{b:4,r:2}},
 {name:"Sort It Out",hint:"Use what you've learned. Watch where each marble goes before you drop the next one. You have 3 extra marbles.",W:6,H:6,funnels:[3,5],grid:["......","...Z..",".....<","......","...G..","......"],bins:{2:["g",2],4:["y",2]},supply:{g:4,y:3}},
 {name:"Big Red Button",hint:"New: the big red button! When a marble rolls over it, every flipper switches sides. You have 3 extra marbles.",W:7,H:8,funnels:[0,6],grid:[".......","f.....V",".......",".A.....","......S",".......","......<","......."],bins:{1:["r",1],5:["b",1]},supply:{r:3,b:2}},
 {name:"Button Bonanza",hint:"Use what you've learned. Watch where each marble goes before you drop the next one. You have 3 extra marbles.",W:7,H:8,funnels:[0,2],grid:[".......","..A....","S......",".......","F.>....",".......",".O.....","......."],bins:{1:["y",1],3:["g",2]},supply:{y:3,g:3}},
 {name:"Wobble Board",hint:"New: seesaws! They tip after every second marble. Watch the little lights. You have 3 extra marbles.",W:7,H:7,funnels:[0,2],grid:[".......","O......","..t....",">......","...Z...",".......","......."],bins:{1:["r",2],3:["b",1]},supply:{r:4,b:2}},
 {name:"Seesaw Fun",hint:"Use what you've learned. Watch where each marble goes before you drop the next one. You have 3 extra marbles.",W:7,H:7,funnels:[1],grid:[".......",".t.....",".......",">.Z....",".......",".V.....","......."],bins:{1:["r",1],2:["y",2]},supply:{r:3,y:3}},
 {name:"Boing!",hint:"New: bumpers! They bounce a marble back the way it came. You have 3 extra marbles.",W:7,H:6,funnels:[3,6],grid:[".......","...V..u",".......","...<.A.",".......","......."],bins:{2:["y",1],5:["r",1]},supply:{y:3,r:2}},
 {name:"Bumper Bash",hint:"Use what you've learned. Watch where each marble goes before you drop the next one. You have 3 extra marbles.",W:7,H:7,funnels:[0,6],grid:[".......","A......","......u",">......",".....O.",".......","......."],bins:{1:["y",2],5:["g",1]},supply:{y:4,g:2}},
 {name:"Watch Out!",hint:"Watch out for the spinning blade! Any marble that hits it is gone, so steer around it. You have 3 extra marbles.",W:7,H:6,funnels:[1,4],grid:[".......","....X..",".>.....",".......","..f....","......."],bins:{1:["y",1],3:["r",1]},supply:{y:3,r:2}},
 {name:"Careful Now",hint:"Use what you've learned. Watch where each marble goes before you drop the next one. You have 3 extra marbles.",W:7,H:8,funnels:[1,5],grid:[".......",".Z...V.",".......",".....y.",".......",".......",".>....X","......."],bins:{2:["b",1],4:["r",2]},supply:{b:3,r:3}},
 {name:"Hold On",hint:"New: a holder! It keeps one marble, and the next marble knocks it loose. You have 3 extra marbles.",W:7,H:7,funnels:[1],grid:[".......",".......",".f.....","..M....","V.<....",".......",".A....."],bins:{0:["r",1],1:["y",1]},supply:{r:3,y:3}},
 {name:"Save One for Later",hint:"Use what you've learned. Watch where each marble goes before you drop the next one. You have 3 extra marbles.",W:7,H:6,funnels:[0,5],grid:[".......","t....M.",".......",".A...<.",".......","....O.."],bins:{1:["r",1],4:["b",1]},supply:{r:3,b:3}},
 {name:"Up, Up and Away",hint:"New: a helicopter! It carries a marble two spaces over. You have 3 extra marbles.",W:7,H:8,funnels:[2,6],grid:[".......","..O...f",".......",".....Z.",".......","..f....","...H...","......."],bins:{1:["r",1],5:["b",1]},supply:{r:3,b:2}},
 {name:"Hop Along",hint:"Use what you've learned. Watch where each marble goes before you drop the next one. You have 3 extra marbles.",W:7,H:7,funnels:[1,6],grid:[".......",".Z....V",".......",".>.....","..h....","......u","......."],bins:{0:["y",1],5:["g",2]},supply:{y:3,g:3}},
 {name:"Beep Beep",hint:"New: a car! It drives the marble to the end of the road. You have 3 extra marbles.",W:7,H:8,funnels:[1,6],grid:[".......",".V....A",".......",".......","......<",".C==.>.",".......","......."],bins:{4:["r",2],6:["b",1]},supply:{r:4,b:2}},
 {name:"Road Trip",hint:"Use what you've learned. Watch where each marble goes before you drop the next one. You have 3 extra marbles.",W:7,H:6,funnels:[1,4],grid:[".......",".<..>..",".......","A..==c.",".......","..O...."],bins:{0:["y",1],2:["g",2]},supply:{y:3,g:3}},
 {name:"Zip Zap",hint:"New: magic tunnels! A marble that goes in one comes out the other. You have 3 extra marbles.",W:7,H:8,funnels:[2,4],grid:[".......","..P.O..",".......","....f..","..pF...",".......","..Z.>..","......."],bins:{2:["r",2],5:["b",1]},supply:{r:4,b:2}},
 {name:"Magic Tunnels",hint:"Use what you've learned. Watch where each marble goes before you drop the next one. You have 3 extra marbles.",W:7,H:7,funnels:[1,3],grid:[".......",".Z....P",".......",".Y.p...",".......","V.G....","......."],bins:{3:["r",2],6:["y",1]},supply:{r:4,y:2}},
 {name:"Going Up",hint:"New: an elevator! It lifts the marble all the way to the top. You have 3 extra marbles.",W:7,H:7,funnels:[4,6],grid:[".......","....F..","..A...<",".......",".....V.","...e...","......."],bins:{2:["y",1],5:["g",1]},supply:{y:3,g:2}},
 {name:"Sky High",hint:"Use what you've learned. Watch where each marble goes before you drop the next one. You have 3 extra marbles.",W:7,H:7,funnels:[3,5],grid:[".......",".....A.","...t...","....g..","..E..<.",".......","...O..."],bins:{3:["y",2],4:["r",2]},supply:{y:4,r:3}},
 {name:"Mix It Up",hint:"Mix and match! Take your time and watch where each marble goes. You have 3 extra marbles.",W:7,H:8,funnels:[0,2],grid:[".......","P.O....",".......",".......","..f....","p......",".X.Z...","......."],bins:{0:["b",2],3:["y",1]},supply:{b:4,y:2}},
 {name:"Puzzle Party",hint:"Mix and match! Take your time and watch where each marble goes. You have 3 extra marbles.",W:7,H:6,funnels:[1,5],grid:[".......",".>...Z.",".......","..E..F.","....E..","......V"],bins:{3:["r",2],6:["b",2]},supply:{r:4,b:3}},
 {name:"Twisty Turns",hint:"Mix and match! Take your time and watch where each marble goes. You have 3 extra marbles.",W:7,H:6,funnels:[2,4],grid:[".......",".......","..T=c..",".E.....","..M....","......."],bins:{2:["g",2],3:["r",2]},supply:{g:4,r:4}},
 {name:"Brain Bender",hint:"Mix and match! Take your time and watch where each marble goes. You have 3 extra marbles.",W:7,H:7,funnels:[4,6],grid:[".......","....F=c",".......",".p..S..",".......","...A.P.",".O....."],bins:{1:["y",1],3:["r",1],4:["y",2]},supply:{y:5,r:2}},
 {name:"Almost There",hint:"Mix and match! Take your time and watch where each marble goes. You have 3 extra marbles.",W:7,H:6,funnels:[1,5],grid:[".......",".....F.",".u.Z...",".......","O.E.==c","......."],bins:{0:["g",2],3:["y",2]},supply:{g:4,y:3}},
 {name:"Grand Finale",hint:"Mix and match! Take your time and watch where each marble goes. You have 3 extra marbles.",W:7,H:6,funnels:[2,5],grid:[".......",".....Z.","..g....",".....u.",".E.V..X","......."],bins:{3:["g",2],4:["b",2]},supply:{g:4,b:3}}
];
/*END*/
if(typeof document!=="undefined"){
const $=id=>document.getElementById(id);
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const SP=reduce?40:150;
let LVS=LV,li=0,L=null,st=null,sel=null,busy=false,hist=[],tt=null;
let best={},muted=false;
try{best=JSON.parse(localStorage.getItem("tumble-best")||"{}");muted=localStorage.getItem("tumble-mute")==="1"}catch(e){}
const saveBest=()=>{try{localStorage.setItem(TH.easy?"tumble-best-easy":"tumble-best",JSON.stringify(best))}catch(e){}};
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
  li=i;L=LVS[i];hist=[];busy=false;st=newState(L);
  sel=Object.keys(st.sup)[0];
  $("lvl").innerHTML="Level "+(i+1)+" · "+L.name+'<small>'+stars(best[i]||0,true)+'</small>';
  $("hint").textContent=Wd(L.hint);
  drawBoard();side();closeOv();
}
function stars(n,plain){return plain?(n?"★".repeat(n)+"☆".repeat(3-n):""):"★".repeat(n)+'<span class="o">'+"★".repeat(3-n)+"</span>"}
function grad(k){const c=COL[k];return '<radialGradient id="m-'+k+'" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset=".2" stop-color="'+c.a+'"/><stop offset="1" stop-color="'+c.b+'"/></radialGradient>'}
function drawBoard(){
  const W=L.W*C,H=(L.H+2)*C,s=$("sv");
  s.setAttribute("viewBox","0 0 "+W+" "+H);
  let h='<defs><pattern id="peg" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="16" cy="16" r="2.2" fill="rgba(110,70,30,.22)"/></pattern><radialGradient id="bm" cx=".35" cy=".3"><stop offset="0" stop-color="#ff9a8a"/><stop offset="1" stop-color="#b3261d"/></radialGradient><radialGradient id="vx"><stop offset="0" stop-color="#2a2e33"/><stop offset=".55" stop-color="#8f979f"/><stop offset="1" stop-color="#dfe5ea"/></radialGradient><linearGradient id="fb" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f0c766"/><stop offset="1" stop-color="#a67a22"/></linearGradient></defs>';
  h+='<line x1="0" x2="'+W+'" y1="'+(C-2)+'" y2="'+(C-2)+'" stroke="#5d646b" stroke-width="4"/><line x1="0" x2="'+W+'" y1="'+(C+L.H*C+2)+'" y2="'+(C+L.H*C+2)+'" stroke="#5d646b" stroke-width="4"/>';
  h+='<g id="tk">'+rails()+'</g>';
  h+=L.funnels.map(c=>{const x=cx(c);return '<g class="fn" data-c="'+c+'" tabindex="0" role="button" aria-label="Drop into funnel '+(c+1)+'"><rect x="'+(x-30)+'" y="0" width="60" height="'+C+'" fill="transparent"/><path class="fbody" d="M'+(x-28)+' 6 H'+(x+28)+' L'+(x+11)+' '+(C-6)+' H'+(x-11)+' Z" fill="url(#fb)" stroke="#7a5418" stroke-width="2"/><ellipse cx="'+x+'" cy="8" rx="27" ry="5" fill="#5a3a12" opacity=".55"/></g>'}).join("");
  h+='<g id="pz"></g><g id="bz"></g><g id="ml"></g>';
  h=rc(h);const dfs='<defs>'+Object.keys(COL).map(tgrad).join("")+'</defs>';const i0=h.indexOf('</defs>')+7;
  s.innerHTML=dfs+h.slice(0,i0)+decor(W,H)+h.slice(i0);
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
  let h=roads(g);g.forEach((row,r)=>row.forEach((ch,c)=>{if(ch!=="="&&ch!==".")h+=piece(ch,r,c,hold,tt)}));$("pz").innerHTML=rc(h);
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
  $("rack").innerHTML=Object.keys(L.supply).map(k=>'<button class="rm" data-k="'+k+'" aria-pressed="'+(k===sel)+'" aria-label="'+COL[k].n+' '+TH.nouns+', '+st.sup[k]+' left"'+(st.sup[k]?"":" disabled")+'><span class="ball" style="background:'+tball(k)+'"></span><span class="n">'+st.sup[k]+'</span></button>').join("");
  $("cups").innerHTML=Object.values(st.bins).map(b=>'<div class="cup'+(b.have>=b.need?" done":"")+'"><span class="dot" style="background:'+COL[b.k].b+'"></span><span>'+COL[b.k].n+' '+TH.cup+'</span><span>'+b.have+" of "+b.need+'</span></div>').join("");
  $("score").textContent=st.score;$("lost").textContent=st.lost;
  $("undo").disabled=!hist.length;
  $("mute").textContent=muted?"Sound off":"Sound on";if($("music")){$("music").textContent=music?"Music: on":"Music: off";$("music").setAttribute("aria-pressed",String(music))}$("mute").setAttribute("aria-pressed",String(muted));
}
function toast(t){const e=$("toast");e.textContent=Wd(t);e.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>e.classList.remove("on"),1800)}
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
    const last=li===LVS.length-1;sfx("win");
    ov('<h2>'+(last?"You finished the box!":"Level complete")+'</h2><div class="stars">'+stars(n)+'</div><p>Score '+st.score+' · '+st.lost+' lost · '+spare+' spare marble'+(spare===1?"":"s")+' (+'+(spare*50)+')</p><div class="btns" style="justify-content:center">'+(last?"":'<button class="b" data-go="next">Next level</button>')+'<button class="b q" data-go="replay">Play again</button><button class="b q" data-go="levels">Levels</button></div>');
    return;
  }
  const held=Object.values(st.hold);
  const short=Object.keys(COL).find(k=>bs.filter(b=>b.k===k).reduce((a,b)=>a+b.need-b.have,0)>(st.sup[k]||0)+held.filter(h=>h===k).length);
  const none=Object.values(st.sup).every(v=>!v);
  if(short||none){sfx("stuck");ov('<h2>'+(short?"Out of "+COL[short].n.toLowerCase()+" marbles":"Out of marbles")+'</h2><p>'+(short?"There aren't enough "+COL[short].n.toLowerCase()+" marbles left to fill the cups.":"Every marble has been used, but some cups are still empty.")+'</p><div class="btns" style="justify-content:center"><button class="b" data-go="undo">Undo last drop</button><button class="b q" data-go="replay">Restart</button></div>')}
}
function ov(h){$("panel").innerHTML=h.replace(/>([^<]+)</g,(m,t)=>">"+Wd(t)+"<");$("ov").classList.add("on")}
function closeOv(){$("ov").classList.remove("on")}
function levels(){ov('<h2>'+(TH.easy?"Pick a level (easy)":"Pick a level")+'</h2><div class="lvls">'+LVS.map((l,i)=>'<button class="lb" data-lv="'+i+'"><b>'+(i+1)+". "+l.name+'</b><span class="s">'+(best[i]?"★".repeat(best[i]):"Not solved yet")+'</span></button>').join("")+'</div><div class="btns" style="justify-content:center;margin-top:14px"><button class="b q" data-go="close">Close</button></div>')}
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
// ---- cheerful cartoon background music, generated live (original tune, never repeats) ----
let music=false,MU=null,mvol=.5;
try{music=localStorage.getItem("tumble-music")==="1";const v=localStorage.getItem("tumble-mvol");if(v!==null)mvol=+v}catch(e){}
const mf=n=>440*Math.pow(2,(n-69)/12);
function startMusic(){
  if(MU)return;
  try{if(!AC)AC=new (window.AudioContext||window.webkitAudioContext)();}catch(e){return}
  const a=AC;if(a.state==="suspended")a.resume();
  const out=a.createGain();out.gain.setValueAtTime(0,a.currentTime);out.gain.linearRampToValueAtTime(.5*mvol,a.currentTime+2);out.connect(a.destination);
  const lp=a.createBiquadFilter();lp.type="lowpass";lp.frequency.value=3200;lp.connect(out);
  const dl=a.createDelay();dl.delayTime.value=.27;const fb=a.createGain();fb.gain.value=.22;const dw=a.createGain();dw.gain.value=.18;dl.connect(fb);fb.connect(dl);dl.connect(dw);dw.connect(out);
  const bus=a.createGain();bus.connect(lp);bus.connect(dl);
  const live=new Set();
  function note(n,t,d,type,vol,dec,pan){const o=a.createOscillator(),g=a.createGain();o.type=type;o.frequency.value=mf(n);
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol,t+.006);g.gain.exponentialRampToValueAtTime(.0001,t+dec);
    let last=g;if(pan!==undefined&&a.createStereoPanner){const p=a.createStereoPanner();p.pan.value=pan;g.connect(p);last=p}
    o.connect(g);last.connect(bus);o.start(t);o.stop(t+dec+.05);live.add(o);o.onended=()=>live.delete(o)}
  function bell(n,t,vol){note(n,t,0,"sine",vol,.9,.25);note(n+12,t,0,"sine",vol*.25,.35,.25);note(n+19,t,0,"triangle",vol*.08,.2,.25)}
  function xylo(n,t,vol){note(n,t,0,"triangle",vol,.28,-.2);note(n+24,t,0,"sine",vol*.15,.08,-.2)}
  function boop(n,t,vol){const o=a.createOscillator(),g=a.createGain();o.type="sine";o.frequency.setValueAtTime(mf(n)*1.5,t);o.frequency.exponentialRampToValueAtTime(mf(n),t+.06);
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol,t+.005);g.gain.exponentialRampToValueAtTime(.0001,t+.22);o.connect(g);g.connect(bus);o.start(t);o.stop(t+.25);live.add(o);o.onended=()=>live.delete(o)}
  // keys: C, F, G and back; chords as scale degrees
  const PROG=[[0,"I"],[0,"IV"],[0,"V"],[0,"I"],[0,"vi"],[0,"IV"],[0,"V7"],[0,"I"]];
  const CH={I:[0,4,7],IV:[5,9,12],V:[7,11,14],V7:[7,11,14,17],vi:[9,12,16],ii:[2,5,9]};
  const MAJ=[0,2,4,5,7,9,11,12,14,16];
  const sty=(typeof TH!=="undefined"&&TH.music)||"classic";
  const tempo={classic:.30,sweet:.34,dino:.26,crystal:.32,turbo:.21}[sty];
  let bar=0,t0=a.currentTime+.25,motif=null,key=60;
  function makeMotif(){const m=[];let deg=Math.floor(Math.random()*5)+2;for(let i=0;i<8;i++){const r=Math.random();if(r<(sty==="crystal"?.4:.28)){m.push(null);continue}deg=Math.max(0,Math.min(MAJ.length-1,deg+[-2,-1,-1,0,1,1,2][Math.floor(Math.random()*7)]));m.push(deg)}return m}
  function hat(t,v){const len=Math.floor(a.sampleRate*.04),b=a.createBuffer(1,len,a.sampleRate),d=b.getChannelData(0);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*(1-i/len);const src=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();src.buffer=b;f.type="highpass";f.frequency.value=7000;g.gain.value=v;src.connect(f);f.connect(g);g.connect(bus);src.start(t)}
  function padc(ch,t,d){ch.forEach((dd,j)=>{const o=a.createOscillator(),g=a.createGain();o.type="sine";o.frequency.value=mf(key+dd-12);o.detune.value=j%2?6:-6;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.022,t+.8);g.gain.setValueAtTime(.022,t+d-.6);g.gain.linearRampToValueAtTime(0,t+d+.6);o.connect(g);g.connect(bus);o.start(t);o.stop(t+d+.7);live.add(o);o.onended=()=>live.delete(o)})}
  const tick=()=>{const now=a.currentTime;
    while(t0<now+1.2){
      if(bar%8===0){motif=makeMotif();if(bar%32===0)key=[60,65,62,67][Math.floor(bar/32)%4]}
      const [_,cn]=PROG[bar%8],ch=CH[cn],root=key+ch[0]-12;
      if(sty==="crystal")padc(ch,t0,8*tempo);
      for(let e=0;e<8;e++){const t=t0+e*tempo,sw=e%2?tempo*(sty==="dino"?.2:.12):0;
        if(sty==="turbo"){note(root-12+(e%2?12:0),t,0,"triangle",.07,tempo*.9);if(e%2)hat(t,.025)}
        else if(sty==="crystal"){if(e%2===0)note(key+ch[(e/2)%ch.length]+12,t,0,"sine",.03,1.2,(e/4)-.5)}
        else{if(e===0)boop(root-12,t,sty==="sweet"?.14:.22);if(e===4)boop(root-12+7,t,sty==="sweet"?.11:.18);
          if(e===2||e===6)ch.forEach((d,j)=>note(key+d,t,0,sty==="sweet"?"sine":"square",sty==="sweet"?.02:.012,.12,j-1));
          if(sty==="dino"&&(e===3||e===7))note(84,t,0,"square",.006,.03)}
        const half=Math.floor((bar%8)/2)%2;const m=motif[e];
        if(m!==null&&m!==undefined&&(bar%2===0||e<6)){const n=key+12+MAJ[m];
          if(sty==="sweet")bell(n,t+sw,.05);
          else if(sty==="dino")xylo(n,t+sw,.06);
          else if(sty==="crystal")bell(n+12,t,.03);
          else if(sty==="turbo")note(n,t,0,"square",.018,tempo*.8,0);
          else (half?xylo:bell)(n,t+sw,half?.05:.045)}
      }
      if(bar%8===7&&Math.random()<.6&&sty!=="crystal"){for(let i=0;i<5;i++)(sty==="turbo"?(n,t,v)=>note(n,t,0,"square",.015,.08):xylo)(key+12+MAJ[i*2%MAJ.length]+(i>2?12:0),t0+6*tempo+i*.06,.035)}
      t0+=8*tempo;bar++;
    }};
  tick();const iv=setInterval(tick,250);
  MU={out,stop(){clearInterval(iv);const t=a.currentTime;out.gain.cancelScheduledValues(t);out.gain.setValueAtTime(out.gain.value,t);out.gain.linearRampToValueAtTime(0,t+.8);
    setTimeout(()=>{live.forEach(o=>{try{o.stop()}catch(e){}});out.disconnect()},1000)}};
}
function stopMusic(){if(MU){MU.stop();MU=null}}
function setVol(v){mvol=v;try{localStorage.setItem("tumble-mvol",String(v))}catch(e){}if(MU&&AC){const t=AC.currentTime;MU.out.gain.cancelScheduledValues(t);MU.out.gain.setValueAtTime(MU.out.gain.value,t);MU.out.gain.linearRampToValueAtTime(.5*v,t+.15)}}
function setMusic(on){music=on;try{localStorage.setItem("tumble-music",on?"1":"0")}catch(e){}if(on)startMusic();else stopMusic();side()}
document.addEventListener("visibilitychange",()=>{if(!AC)return;if(document.hidden)AC.suspend();else AC.resume()});
document.addEventListener("pointerdown",()=>{if(music&&!MU)startMusic()},true);
$("mvol").value=Math.round(mvol*100);$("mvol").oninput=e=>{setVol(e.target.value/100);if(!music&&e.target.value>0)setMusic(true)};
$("music").onclick=()=>{setMusic(!music);toast(music?"Music on":"Music off")};
// ---- THEMES: Classic + Sweet Shop, Crystal Glow (girl-leaning) + Dino Dig, Turbo Garage (boy-leaning). Younger themes play the easy level set. ----
const mixHex=(a,b,t)=>{const p=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));const x=p(a),y=p(b);return "#"+x.map((v,i)=>Math.round(v+(y[i]-v)*t).toString(16).padStart(2,"0")).join("")};
const THEMES={
 classic:{name:"Classic",tag:"Older · the full 50 levels",easy:false,noun:"marble",nouns:"marbles",cup:"cup",title:"Tumbleworks",music:"classic",
  swatch:"linear-gradient(175deg,#a4abb2,#868d95)",map:{},css:""},
 sweet:{name:"Sweet Shop",tag:"Younger · easier levels, extra gumdrops",easy:true,noun:"gumdrop",nouns:"gumdrops",cup:"jar",title:"Sweet Shop",music:"sweet",
  swatch:"radial-gradient(circle at 30% 30%,#fff 0 6%,transparent 7%) 0 0/26px 26px,linear-gradient(160deg,#ffe3f1,#d9f7ef)",
  map:{"#d4a640":"#ff8fc7","#7a5418":"#c2457f","#f0c766":"#ffd1ea","#a67a22":"#ff8fc7","#eef2f5":"#ff6fae","#4d545b":"#ffc7df","#e9493b":"#ff5fa2","#8f1f14":"#b0306e","#6b4a2a":"#9b6b4f","#5a3a22":"#8a5a3f","#2a1a10":"#5a3348","#5a3a12":"#c2457f","#ff8a1f":"#5fd3bf","#a24d00":"#2e9c89","#ffb15c":"#a8eee2","#3b8ee0":"#b48cff","#1f4f8a":"#7a52c9","#b9c2cc":"#ffe08a","#5b6670":"#d9a400","#2f3439":"#8a4f6f","#3c4248":"#c46f9a","#2a2e33":"#8a4f6f","#8a5cf6":"#b48cff","#ff9f1c":"#5fd3bf","#ff9a8a":"#ffc2e6","#b3261d":"#e0408a","#5d646b":"#ffb3d6","#4a4b52":"#e9c6f2","#ffd34d":"#ffffff","#8a7458":"#c48aa8","#c9d1d8":"#ffffff","#aab3bb":"#ffe3f1","#dfe5ea":"#fff0f7","#8f979f":"#ffb3d6"},
  css:":root{--brass:#ff8fc7;--brass2:#b0306e;--cream:#fff3f8;--mute:#f2c4da;--ink:#4a1934}body{background:radial-gradient(120% 90% at 50% 0%,#6b2c58,#2d1028)}h1{color:#ffb3d9}.box{background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.7) 0 3px,transparent 4px) 0 0/34px 34px,linear-gradient(160deg,#ffe3f1,#d9f7ef);border-color:#c2457f;box-shadow:inset 0 0 0 3px #fff,0 10px 0 #7a2050,0 18px 30px rgba(0,0,0,.4)}.rack{background:repeating-linear-gradient(135deg,#ff8fc7 0 12px,#fff 12px 24px);border-bottom-color:#c2457f}.rack .rm{background:rgba(255,255,255,.75)}.rail{stroke:#c2457f}.rail2{stroke:#fff}.nail{fill:#ff5fa2}.paddle{stroke:#c2457f}.paddle2{stroke:#ffe3f1}.panel{background:linear-gradient(170deg,#fff3f8,#ffd9ec);border-color:#c2457f}.lb{background:#fff;border-color:#ff8fc7}.toast{background:#c2457f}"},
 crystal:{name:"Crystal Glow",tag:"Older · the full 50 levels",easy:false,noun:"gem",nouns:"gems",cup:"jewel box",title:"Crystal Glow",music:"crystal",
  swatch:"radial-gradient(circle at 70% 30%,rgba(255,255,255,.9) 0 2px,transparent 3px) 0 0/22px 22px,linear-gradient(160deg,#3b1c6e,#0f4f63)",
  map:{"#d4a640":"#9ff0ff","#7a5418":"#3b6f8a","#f0c766":"#d9fbff","#a67a22":"#7fd4e6","#eef2f5":"#f2e9ff","#4d545b":"#5b3b9a","#e9493b":"#ff6ad5","#8f1f14":"#a02c88","#6b4a2a":"#3a2366","#5a3a22":"#4a2f80","#2a1a10":"#1e1238","#5a3a12":"#2a1a4a","#ff8a1f":"#ff9ce6","#a24d00":"#b03f9a","#ffb15c":"#ffd1f3","#3b8ee0":"#7ad7ff","#1f4f8a":"#2f6f9a","#b9c2cc":"#e6dcff","#5b6670":"#8f6fd1","#2f3439":"#2a1a4a","#3c4248":"#5b3b9a","#2a2e33":"#2a1a4a","#8a5cf6":"#c38bff","#ff9f1c":"#5ce1e6","#ff9a8a":"#ffc6f2","#b3261d":"#9b3bd1","#5d646b":"#7a5cc9","#4a4b52":"#2c1d4f","#ffd34d":"#9ff0ff","#8a7458":"#8a7ab8","#c9d1d8":"#f2e9ff","#aab3bb":"#d9c8ff","#dfe5ea":"#f2e9ff","#8f979f":"#7a5cc9","#222":"#1e1238"},
  css:":root{--brass:#9ff0ff;--brass2:#3b6f8a;--cream:#f4eeff;--mute:#c9b8ec;--ink:#1a0f33}body{background:radial-gradient(120% 90% at 50% 0%,#3a1f6e,#0d0820)}h1{color:#d9c8ff;text-shadow:0 0 16px rgba(195,139,255,.6)}.box{background:linear-gradient(160deg,#3b1c6e,#16224f 55%,#0f4f63);border-color:#24123f;box-shadow:inset 0 0 0 2px #7a5cc9,inset 0 0 40px rgba(159,240,255,.12),0 12px 0 #0b0618,0 18px 30px rgba(0,0,0,.5)}.rack{background:linear-gradient(#2a1a4a,#1e1238);border-bottom-color:#7a5cc9}.rail{stroke:#2a1a4a}.rail2{stroke:#e6dcff}.nail{fill:#9ff0ff}.paddle{stroke:#2a1a4a}.paddle2{stroke:#e6dcff}.panel{background:linear-gradient(170deg,#efe6ff,#d6f6fb);border-color:#5b3b9a}.lb{background:#fff;border-color:#c38bff}.toast{background:#5b3b9a}"},
 dino:{name:"Dino Dig",tag:"Younger · easier levels, extra eggs",easy:true,noun:"egg",nouns:"eggs",cup:"nest",title:"Dino Dig",music:"dino",
  swatch:"radial-gradient(ellipse at 80% 100%,#7a4a2a 0 18%,transparent 19%),linear-gradient(170deg,#cdeaa8,#7fbf62)",
  map:{"#d4a640":"#f2a541","#7a5418":"#7a4a12","#f0c766":"#ffd27a","#a67a22":"#c97a1c","#eef2f5":"#fff4d6","#4d545b":"#6b4a2a","#e9493b":"#ff5a2f","#8f1f14":"#9a2a10","#6b4a2a":"#6b4423","#5a3a22":"#5c3d1e","#2a1a10":"#2e1e0e","#5a3a12":"#5c3d1e","#ff8a1f":"#ff7a2f","#a24d00":"#9a3a10","#ffb15c":"#ffb37a","#3b8ee0":"#3aa96e","#1f4f8a":"#1f6b42","#b9c2cc":"#c9b48a","#5b6670":"#6b5a3a","#2f3439":"#3b2a1a","#3c4248":"#5c3d1e","#2a2e33":"#3b2a1a","#8a5cf6":"#3aa96e","#ff9f1c":"#ff7a2f","#ff9a8a":"#c6ee8f","#b3261d":"#3f7a2a","#5d646b":"#7a5a2a","#4a4b52":"#8a6a3a","#ffd34d":"#f2d27a","#8a7458":"#8a6a3a","#c9d1d8":"#fff4d6","#aab3bb":"#e9dcb8","#dfe5ea":"#fff4d6","#8f979f":"#8a6a3a"},
  css:":root{--brass:#f2a541;--brass2:#7a4a12;--cream:#fdf6e3;--mute:#cfe0b8;--ink:#2a1a08}body{background:radial-gradient(120% 90% at 50% 0%,#2f5a2a,#0f1f0e)}h1{color:#bfe68f}.box{background:linear-gradient(175deg,#d6efb4,#9fd07f 60%,#7aae5a);border-color:#5c3d1e;box-shadow:inset 0 0 0 2px #3f7a2a,0 12px 0 #2e1e0e,0 18px 30px rgba(0,0,0,.45)}.rack{background:linear-gradient(#7a5a2a,#5c3d1e);border-bottom-color:#3b2a1a}.rail{stroke:#5c3d1e}.rail2{stroke:#fff4d6}.nail{fill:#f2a541}.paddle{stroke:#3b2a1a}.paddle2{stroke:#e9dcb8}.panel{background:linear-gradient(170deg,#fdf6e3,#e3f2cf);border-color:#5c3d1e}.lb{background:#fff;border-color:#9fd07f}.toast{background:#5c3d1e}"},
 turbo:{name:"Turbo Garage",tag:"Older · the full 50 levels",easy:false,noun:"ball",nouns:"balls",cup:"bay",title:"Turbo Garage",music:"turbo",
  swatch:"repeating-linear-gradient(135deg,#ffcc00 0 10px,#16181b 10px 20px) 0 100%/100% 14px no-repeat,linear-gradient(175deg,#5a616a,#2b2f35)",
  map:{"#d4a640":"#ffcc00","#7a5418":"#7a5c00","#f0c766":"#ffe066","#a67a22":"#c99a00","#eef2f5":"#f2f5f8","#4d545b":"#16181b","#e9493b":"#ff3b30","#8f1f14":"#8a1a14","#6b4a2a":"#2b2f35","#5a3a22":"#3a3f46","#2a1a10":"#101214","#5a3a12":"#101214","#ff8a1f":"#ff3b30","#a24d00":"#8a1a14","#ffb15c":"#ff7a70","#3b8ee0":"#2d7ff9","#1f4f8a":"#1a4fa8","#b9c2cc":"#c0c7cf","#5b6670":"#4a525c","#2f3439":"#16181b","#3c4248":"#3a3f46","#2a2e33":"#16181b","#8a5cf6":"#2d7ff9","#ff9f1c":"#ffcc00","#ff9a8a":"#ffe066","#b3261d":"#ff3b30","#5d646b":"#ffcc00","#4a4b52":"#1f2226","#ffd34d":"#ffffff","#8a7458":"#8a929c"},
  css:":root{--brass:#ffcc00;--brass2:#7a5c00;--cream:#f2f5f8;--mute:#aeb6bf;--ink:#16181b}body{background:radial-gradient(120% 90% at 50% 0%,#2f343b,#0b0c0e)}h1{color:#ffcc00;font-style:italic}.box{background:repeating-linear-gradient(90deg,rgba(255,255,255,.035) 0 2px,transparent 2px 6px),linear-gradient(175deg,#5a616a,#2b2f35);border-color:#16181b;box-shadow:inset 0 0 0 3px #ffcc00,0 12px 0 #050506,0 18px 30px rgba(0,0,0,.55)}.rack{background:repeating-linear-gradient(135deg,#ffcc00 0 14px,#16181b 14px 28px);border-bottom-color:#ffcc00}.rack .rm{background:rgba(22,24,27,.85)}.rail{stroke:#16181b}.rail2{stroke:#f2f5f8}.nail{fill:#ffcc00}.paddle{stroke:#16181b}.paddle2{stroke:#ffcc00}.panel{background:linear-gradient(170deg,#eef1f4,#c9ced4);border-color:#16181b}.lb{background:#fff;border-color:#ffcc00}.toast{background:#16181b;color:#ffcc00}"}
};
let thId="classic";try{const t=localStorage.getItem("tumble-theme");if(t&&THEMES[t])thId=t}catch(e){}
let TH=THEMES[thId];
const rc=s=>{const m=TH.map;return Object.keys(m).length?s.replace(/#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b/g,h=>m[h]||m[h.toLowerCase()]||h):s};
const Wd=t=>String(t).replace(/\bMarbles\b/g,TH.nouns[0].toUpperCase()+TH.nouns.slice(1)).replace(/\bmarbles\b/g,TH.nouns).replace(/\bMarble\b/g,TH.noun[0].toUpperCase()+TH.noun.slice(1)).replace(/\bmarble\b/g,TH.noun)
  .replace(/\bCups\b/g,TH.cup[0].toUpperCase()+TH.cup.slice(1)+(TH.cup.endsWith("x")?"es":"s")).replace(/\bcups\b/g,TH.cup+(TH.cup.endsWith("x")?"es":"s")).replace(/\bCup\b/g,TH.cup[0].toUpperCase()+TH.cup.slice(1)).replace(/\bcup\b/g,TH.cup).replace(/\b([Aa]) (?=[aeiou])/g,"$1n ");
// marble look per theme (fills url(#m-k)); classic keeps the glass marble
function tgrad(k){const c=COL[k];
  if(thId==="sweet"){const a=mixHex(c.a,"#ffffff",.25),b=mixHex(c.b,"#ffffff",.2);return '<radialGradient id="mg-'+k+'" cx=".4" cy=".3" r=".75"><stop offset="0" stop-color="#fff"/><stop offset=".3" stop-color="'+a+'"/><stop offset="1" stop-color="'+b+'"/></radialGradient><pattern id="m-'+k+'" patternContentUnits="objectBoundingBox" width="1" height="1"><rect width="1" height="1" fill="url(#mg-'+k+')"/><circle cx=".3" cy=".62" r=".045" fill="#fff" opacity=".85"/><circle cx=".62" cy=".72" r=".04" fill="#fff" opacity=".8"/><circle cx=".7" cy=".42" r=".035" fill="#fff" opacity=".8"/><circle cx=".45" cy=".82" r=".03" fill="#fff" opacity=".75"/></pattern>'}
  if(thId==="crystal")return '<linearGradient id="m-'+k+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".18" stop-color="'+c.a+'"/><stop offset=".38" stop-color="'+c.a+'"/><stop offset=".39" stop-color="'+c.b+'"/><stop offset=".55" stop-color="'+c.b+'"/><stop offset=".56" stop-color="'+mixHex(c.a,"#ffffff",.45)+'"/><stop offset=".72" stop-color="'+c.a+'"/><stop offset=".73" stop-color="'+c.b+'"/><stop offset="1" stop-color="'+mixHex(c.b,"#000000",.35)+'"/></linearGradient>';
  if(thId==="dino"){const base=mixHex(c.a,"#fff6e0",.45);return '<radialGradient id="mg-'+k+'" cx=".4" cy=".3" r=".8"><stop offset="0" stop-color="#fffbef"/><stop offset=".35" stop-color="'+base+'"/><stop offset="1" stop-color="'+mixHex(c.b,"#fff6e0",.15)+'"/></radialGradient><pattern id="m-'+k+'" patternContentUnits="objectBoundingBox" width="1" height="1"><rect width="1" height="1" fill="url(#mg-'+k+')"/><circle cx=".32" cy=".58" r=".07" fill="'+c.b+'" opacity=".55"/><circle cx=".66" cy=".38" r=".05" fill="'+c.b+'" opacity=".5"/><circle cx=".6" cy=".74" r=".06" fill="'+c.b+'" opacity=".5"/><circle cx=".24" cy=".36" r=".035" fill="'+c.b+'" opacity=".45"/></pattern>'}
  if(thId==="turbo")return '<linearGradient id="m-'+k+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".3" stop-color="'+c.a+'"/><stop offset=".5" stop-color="'+mixHex(c.b,"#000000",.3)+'"/><stop offset=".56" stop-color="'+c.b+'"/><stop offset=".85" stop-color="'+mixHex(c.a,"#ffffff",.4)+'"/><stop offset="1" stop-color="'+c.b+'"/></linearGradient>';
  return grad(k)}
function tball(k){const c=COL[k];
  if(thId==="sweet")return "radial-gradient(circle at 30% 62%,#fff 0 2px,transparent 3px),radial-gradient(circle at 66% 70%,#fff 0 2px,transparent 3px),radial-gradient(circle at 40% 30%,#fff 0,"+mixHex(c.a,"#ffffff",.25)+" 30%,"+mixHex(c.b,"#ffffff",.2)+" 100%)";
  if(thId==="crystal")return "linear-gradient(135deg,#fff 0,"+c.a+" 18%,"+c.a+" 38%,"+c.b+" 39%,"+c.b+" 55%,"+mixHex(c.a,"#ffffff",.45)+" 56%,"+c.a+" 72%,"+c.b+" 73%,"+mixHex(c.b,"#000000",.35)+" 100%)";
  if(thId==="dino")return "radial-gradient(circle at 32% 58%,"+c.b+"88 0 3px,transparent 4px),radial-gradient(circle at 66% 38%,"+c.b+"80 0 2.5px,transparent 3.5px),radial-gradient(circle at 60% 74%,"+c.b+"80 0 3px,transparent 4px),radial-gradient(circle at 40% 30%,#fffbef 0,"+mixHex(c.a,"#fff6e0",.45)+" 35%,"+mixHex(c.b,"#fff6e0",.15)+" 100%)";
  if(thId==="turbo")return "linear-gradient(180deg,#fff 0,"+c.a+" 30%,"+mixHex(c.b,"#000000",.3)+" 50%,"+c.b+" 56%,"+mixHex(c.a,"#ffffff",.4)+" 85%,"+c.b+" 100%)";
  return ball(k)}
// background scenery drawn behind the machine
function decor(W,H){let h="",sd=W*7+H*13;const rn=()=>{sd=sd*16807%2147483647;return sd/2147483647};
  if(thId==="sweet"){for(let i=0;i<W*H/9000;i++){const x=rn()*W,y=C+rn()*(H-2*C),r=10+rn()*16,cl=["#ffd1ea","#c9f2e7","#fff1b8","#e6d6ff"][i%4];h+='<circle cx="'+x.toFixed(0)+'" cy="'+y.toFixed(0)+'" r="'+r.toFixed(0)+'" fill="'+cl+'" opacity=".55"/>'}
    for(let i=0;i<3;i++){const x=W*(.15+i*.35)+rn()*30,y=C*1.6+rn()*(H-4*C);h+='<g opacity=".35"><line x1="'+x+'" y1="'+y+'" x2="'+x+'" y2="'+(y+70)+'" stroke="#fff" stroke-width="5"/><circle cx="'+x+'" cy="'+y+'" r="20" fill="#ff8fc7"/><path d="M'+(x-14)+' '+y+' a14 14 0 0 1 28 0 a9 9 0 0 1 -18 0 a5 5 0 0 1 9 0" fill="none" stroke="#fff" stroke-width="4"/></g>'}}
  else if(thId==="crystal"){for(let i=0;i<W*H/3500;i++){const x=rn()*W,y=rn()*H,s=2+rn()*6;h+='<path d="M'+x.toFixed(0)+' '+(y-s).toFixed(0)+' Q'+x.toFixed(0)+' '+y.toFixed(0)+' '+(x+s).toFixed(0)+' '+y.toFixed(0)+' Q'+x.toFixed(0)+' '+y.toFixed(0)+' '+x.toFixed(0)+' '+(y+s).toFixed(0)+' Q'+x.toFixed(0)+' '+y.toFixed(0)+' '+(x-s).toFixed(0)+' '+y.toFixed(0)+' Q'+x.toFixed(0)+' '+y.toFixed(0)+' '+x.toFixed(0)+' '+(y-s).toFixed(0)+'Z" fill="#fff" opacity="'+(.35+rn()*.5).toFixed(2)+'" class="sp"/>'}
    h+='<g opacity=".18"><path d="M'+(W*.08)+' '+(H-C)+' l22 -90 l22 90 Z" fill="#9ff0ff"/><path d="M'+(W*.08+30)+' '+(H-C)+' l16 -60 l16 60 Z" fill="#c38bff"/><path d="M'+(W*.86)+' '+(H-C)+' l18 -76 l18 76 Z" fill="#ff9ce6"/></g>'}
  else if(thId==="dino"){h+='<path d="M'+(W*.62)+' '+(H-C)+' L'+(W*.74)+' '+(H*.55)+' H'+(W*.82)+' L'+(W*.94)+' '+(H-C)+' Z" fill="#7a5a3a" opacity=".35"/><path d="M'+(W*.74)+' '+(H*.55)+' Q'+(W*.78)+' '+(H*.6)+' '+(W*.82)+' '+(H*.55)+'" stroke="#ff5a2f" stroke-width="6" fill="none" opacity=".5"/>'+[0,1,2].map(i=>'<circle class="smk" cx="'+(W*.78+i*6)+'" cy="'+(H*.5-i*26)+'" r="'+(10+i*6)+'" fill="#fff" opacity=".22"/>').join("");
    for(let i=0;i<5;i++){const x=rn()*W,y=C*1.5+rn()*(H-3*C),s=.6+rn()*.6,rot=(rn()*60-30).toFixed(0);h+='<g transform="translate('+x.toFixed(0)+','+y.toFixed(0)+') rotate('+rot+') scale('+s.toFixed(2)+')" opacity=".28"><path d="M0 0 Q4 -40 0 -80" stroke="#2f6b25" stroke-width="4" fill="none"/>'+[0,1,2,3,4,5].map(j=>'<ellipse cx="'+(j%2?9:-9)+'" cy="'+(-12-j*11)+'" rx="10" ry="4" fill="#2f6b25" transform="rotate('+(j%2?-25:25)+' '+(j%2?9:-9)+' '+(-12-j*11)+')"/>').join("")+'</g>'}
    for(let i=0;i<3;i++){const x=W*.1+i*W*.12,y=H-C*1.4-i*22;h+='<g opacity=".22" fill="#5c3d1e"><ellipse cx="'+x+'" cy="'+y+'" rx="7" ry="9"/><circle cx="'+(x-7)+'" cy="'+(y-11)+'" r="3"/><circle cx="'+x+'" cy="'+(y-13)+'" r="3"/><circle cx="'+(x+7)+'" cy="'+(y-11)+'" r="3"/></g>'}}
  else if(thId==="turbo"){const sq=14;let ck="";for(let x=0;x<W;x+=sq)for(let r=0;r<2;r++)ck+='<rect x="'+x+'" y="'+(C+r*sq)+'" width="'+sq+'" height="'+sq+'" fill="'+((x/sq+r)%2?"#f2f5f8":"#16181b")+'"/>';h+='<g opacity=".22">'+ck+'</g>';
    for(let i=0;i<6;i++){const y=C*2+rn()*(H-4*C),x=rn()*W*.6;h+='<line x1="'+x.toFixed(0)+'" y1="'+y.toFixed(0)+'" x2="'+(x+60+rn()*90).toFixed(0)+'" y2="'+y.toFixed(0)+'" stroke="#ffcc00" stroke-width="3" stroke-linecap="round" opacity=".18"/>'}
    h+='<g opacity=".16" transform="translate('+(W-80)+','+(H-C*1.6)+')"><circle r="34" fill="none" stroke="#f2f5f8" stroke-width="10" stroke-dasharray="6 5"/><circle r="14" fill="#f2f5f8"/></g>'}
  return '<g aria-hidden="true">'+h+'</g>'}
function themeStatic(){
  $("thcss").textContent=TH.css;document.body.className="th-"+thId;
  $("ttl").textContent=TH.title;$("cupsh").textContent=Wd("Cups to fill");$("lostl").textContent=Wd("Marbles lost");
  const set=TH.easy?LVE:LV;const changed=set!==LVS;LVS=set;
  try{best=JSON.parse(localStorage.getItem(TH.easy?"tumble-best-easy":"tumble-best")||"{}")}catch(e){best={}}
  return changed}
function applyTheme(id,keepLevel){
  thId=THEMES[id]?id:"classic";TH=THEMES[thId];try{localStorage.setItem("tumble-theme",thId)}catch(e){}
  const changed=themeStatic();
  if(MU){stopMusic();if(music)startMusic()}
  if(changed||!keepLevel||!L)start(first());else{drawBoard();side();$("hint").textContent=Wd(L.hint)}
}
function themePicker(firstTime){
  ov('<h2>'+(firstTime?"Pick your machine":"Choose a theme")+'</h2><p>'+(firstTime?"You can switch any time with the Theme button.":"Younger themes have easier levels and extra marbles.")+'</p><div class="thg">'+Object.entries(THEMES).map(([id,t])=>{const ks=["r","b","g","y"];const sv=thId;thId=id;const balls=ks.map(k=>'<i style="background:'+tball(k)+'"></i>').join("");thId=sv;
    return '<button class="thc'+(id===thId?" on":"")+'" data-th="'+id+'"><span class="sw" style="background:'+t.swatch+'"><span class="bl">'+balls+'</span></span><b>'+t.name+'</b><small>'+t.tag+'</small></button>'}).join("")+'</div>');
}
$("panel").addEventListener("click",e=>{const b=e.target.closest("[data-th]");if(!b)return;applyTheme(b.dataset.th,true);closeOv();toast(TH.name+(TH.easy?": easy levels":""))});
$("theme").onclick=()=>themePicker(false);

$("mute").onclick=()=>{muted=!muted;try{localStorage.setItem("tumble-mute",muted?"1":"0")}catch(e){}side();if(!muted)sfx("bell")};
$("panel").addEventListener("click",e=>{
  const lv=e.target.closest("[data-lv]");if(lv){start(+lv.dataset.lv);return}
  const g=e.target.closest("[data-go]");if(!g)return;const a=g.dataset.go;
  if(a==="next")start(li+1);else if(a==="replay")start(li);else if(a==="levels")levels();else if(a==="undo")undo();else closeOv();
});
const first=()=>{const i=LVS.findIndex((l,j)=>!best[j]);return i<0?0:i};
const boot=d=>{themeStatic();start(d&&Number.isInteger(d.li)&&LVS[d.li]?d.li:first());let saved=null;try{saved=localStorage.getItem("tumble-theme")}catch(e){}if(!saved)themePicker(true)};
window.claude?.hot?.snapshot?.(()=>({li}));
window.claude?.hot?.ready?window.claude.hot.ready(boot):boot(window.claude?.hot?.data??{});
}
}
