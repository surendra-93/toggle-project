let ChangeBackgroundColor = document.getElementById('theme-changer');

    ChangeBackgroundColor.addEventListener("click", () => {
      document.body.style.backgroundColor = "color";
      const currentColor=document.body.style.backgroundColor;

    if(!currentColor||currentColor=="white"){
        document.body.style.backgroundColor="black";
        ChangeBackgroundColor.innerText= "Change white";
    }
    else{
         document.body.style.backgroundColor="white";
         ChangeBackgroundColor.innerText= "Change black";
    }
     });