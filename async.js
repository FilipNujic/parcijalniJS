const AsyncFetch = {
    pozoviServer: async (event)=>{
        let imePoeme = event.target.previousElementSibling.value;
        document.getElementById(`results`).innerHTML =
          "<p>Učitavamo podatke...</p>";
        let rezultat = await fetch(`https://poetrydb.org/title/${imePoeme}`);
          rezultat = await rezultat.json();
  
            if (rezultat.status == 404)  {
              document.getElementById(`results`).innerHTML =
                "<p>Nema rezultata za trazeni upit</p>";
            } else
              AsyncFetch.ubaciRezultateUdom(rezultat, document.getElementById(`results`));
          },
      ubaciRezultateUdom: function (data, element) {
        let rezultat = "<p>Rezultati:</p><ul>";
    
        data.forEach((literatura) => {
          rezultat += `<li>${literatura.title}</li>`;
        });
    
        rezultat += "</ul>";
        element.innerHTML = rezultat;
      },
  };

  export default AsyncFetch;