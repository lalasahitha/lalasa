<html>
         <head>
              <title>dynamic</title>
              <script type="text/javascript" /*src="first.js"*/>
                   function msg(name)
                   {
                       username=document.getElementById("vall").value;
                       if(name == null)
                                 name = 'Ms.';
                       alert(Hello " + name +" " + usrname);
                       document.writeln("Hello " +name+ " " +usrname);
                   }
      

             </script>
             </head>
             <body>
               <p>Welcome to JavaScript
               <form>
                     Name: <input type="text" id="vall"><p>
                     <input type="button" value="Greet" onClick="msg()" />
                     <input type="button" value="Greet with Salutation" onClick="msg('Mr.')" />


     </form>
     </body>
     </html>