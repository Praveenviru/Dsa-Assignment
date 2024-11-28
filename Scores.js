function Scores(){
    let Scores=[10,20,30,40,50,60,70,80,90,45];
    let Res=[];
    let f=0;
    let c=0;
    for(let i=0;i<Scores.length;i++){
      if(Scores[i]<40){
        Scores[i]=Scores[i]+20;
      }
      else if(Scores[i]>90){
        Scores[i]=90;
      }
      else if(Scores[i]>=50){
        c++;
        Res[f]=Scores[i];
        f++;
      }
    }
    console.log("Final Scores:"+Scores);
    console.log("Results Greater than 50 :"+Res);
    console.log("count :",c);
  }
  Scores();