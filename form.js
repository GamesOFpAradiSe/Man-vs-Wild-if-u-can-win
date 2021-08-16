class Form
{
  constructor()
  {
    this.htp= createButton("HOW TO PLAY? ")
  this.title1 =createElement('h1')
  this.title2 =createElement('h4')
  this.title3 =createElement('h4')
  this.title4 =createElement('h4')
  this.title5 =createElement('h4')
  this.title6 =createElement('h4')
  this.title7 =createElement('h4')
  this.title8 =createElement('h4')


  }

  display()
  {
    

   this. htp.position(width/2+50,height/2);
         
   this. htp.mousePressed(()=>{

p.visible = true
       this.title1.html("INSTRUCTION")
        this.title1.position(width-300,50);
        this.title2.html("there are 2 level only ")
        this.title2.position(width-250,100);
        this.title3.html("in level 1 go to the temple for next level")
        this.title3.position(width-250,150);
        this.title4.html("← and → to use move only in level 1")
        this.title4.position(width-250,200);
        this.title5.html("you have only 5 life to win (every level life doesn't restore")
        this.title5.position(width-250,250);
        this.title6.html("don't touch the mose if touch life will go down")
        this.title6.position(width-250,300);
        this.title7.html("in level 2 kill all mutated bird")
        this.title7.position(width-250,350);
        this.title8.html("if bird touch the end then the life will go down")
        this.title8.position(width-250,400);


        
    })
      

  }

  hide()
  {
    this.htp.hide();
  
  }
}

