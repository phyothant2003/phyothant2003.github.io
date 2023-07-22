
    function select_option(){
        grr=window.formula;
    for(i=0;i<grr.length;i++){
        grrName=window.formula[i].value;
        window[grrName].style.display="none";
    }
    window[grr.value].style.display="";
    }

    function calculateCircleCircumference(){
        var r=parseFloat(document.getElementById("r7").value);
        var rr2=document.getElementById("rc");
        var result=2*3.142*r;
        rr2.innerHTML="Circle Circumference :"+result+" square unit.";
        return true;
    } 

    function calculateArea(){
        var w=parseFloat(document.getElementById("w").value);
        var h=parseFloat(document.getElementById("h").value);
        var rr=document.getElementById("r");
        var result=w*h;
        rr.innerHTML="Square Area :"+result+" square unit.";
        return true;
    } 

    function calculateRectangleArea(){
        var l=parseFloat(document.getElementById("l").value);
        var b=parseFloat(document.getElementById("b").value);
        var rla=document.getElementById("ra");
        var result=l*b;
        rla.innerHTML="Rectangle Area :"+result+" square unit.";
        return true;
    }
   
    function calculateTriangleArea(){
        var b=parseFloat(document.getElementById("b1").value);
        var h=parseFloat(document.getElementById("h1").value);
        var rta=document.getElementById("ta");
        var result=b*h*0.5;
        rta.innerHTML="Triangle Area :"+result+" square unit.";
        return true;
    }  
   
    function calculateTrapeziodArea(){
        var b1=parseFloat(document.getElementById("b2").value);
        var b2=parseFloat(document.getElementById("b3").value);
        var h=parseFloat(document.getElementById("h2").value);
        var rtpa=document.getElementById("tpa");
        var result=((b1+b2)*h)/2;
        rtpa.innerHTML="Trapeziod Area :"+result+" square unit.";
        return true;
    }  
   
    function calculateCircleArea(){
        var r=parseFloat(document.getElementById("ri").value);
        var ca=document.getElementById("c");
        var result=3.142*r*r;
       ca.innerHTML="Circle Area :"+result+" square unit.";
        return true;
    }  
   
    function calculateCubeSurfaceArea(){
        var l=parseFloat(document.getElementById("l1").value);
        var cb=document.getElementById("c1");
        var result=6*l*l;
       cb.innerHTML="Cube Surface Area :"+result+" square unit.";
        return true;
    } 
   
    function calculateCylinderSurfaceArea(){
        var r=parseFloat(document.getElementById("ri5").value);
        var h=parseFloat(document.getElementById("h3").value);
        var cc1=document.getElementById("cy");
        var result=2*3.142*r*h;
       cc1.innerHTML="Cylinder Surface Area:"+result+" square unit.";
        return true;
    }  
   
    function calculateConeSurfaceArea(){
        var r=parseFloat(document.getElementById("ri2").value);
        var l=parseFloat(document.getElementById("l4").value);
        var ca2=document.getElementById("csa");
        var result=3.142*r*l;
       ca2.innerHTML="Circle Area :"+result+" square unit.";
        return true;
    }  
   
    function calculateSphereSurfaceArea(){
        var r=parseFloat(document.getElementById("ri3").value);
        var ca1=document.getElementById("c3");
        var result=4*3.142*r*r;
       ca1.innerHTML="Sphere Surface Area :"+result+" square unit.";
        return true;
    } 
   
    function calculateSquarePerimeter(){
        var l=parseFloat(document.getElementById("l5").value);
        var rp=document.getElementById("sp");
        var result=4*l;
        rp.innerHTML="Square Perimeter :"+result+" square unit.";
        return true; 
    }
   
    function calculateRectanglePerimeter(){
        var l=parseFloat(document.getElementById("l6").value);
        var b=parseFloat(document.getElementById("b6").value);
        var rr1=document.getElementById("rp");
        var result=2*l*b;
        rr1.innerHTML="Rectangle Perimeter :"+result+" square unit.";
        return true;
    } 
    

  

