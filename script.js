
        let gvalue = 1;

        function onClick() {
            let progressExample = document.getElementById('progress');
            setInterval(function () {
                if (gvalue < 100) {
                    gvalue++;
                    progressExample.value = gvalue;
                }
                onClick();
            }, 1000);

        }

        function afficher_liste() {
            let table = document.querySelector('.etape1');
            let style = table.style.display;
            if (style == 'block') {
                table.style.display = 'none';
            } else {
                table.style.display = 'block';
            }
        }

        function afficher_justificatif() {
            let table = document.querySelector('.etape2');
            let style = table.style.display;
            if (style == 'block') {
                table.style.display = 'none';
            } else {
                table.style.display = 'block';
            }
        }

        function afficher_preuve() {
            let table = document.querySelector('.etape3');
            let style = table.style.display;
            if (style == 'block') {
                table.style.display = 'none';
            } else {
                table.style.display = 'block';
            }
        }

// ******************************************** Validation Formulaire
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let nom = document.getElementById("nom");
    let adress = document.getElementById("adress");
    let tel = document.getElementById("tel");
    let email = document.getElementById("email");

    if (nom.value == "" || adress.value == "" || tel.value == "" || email.value == "") {
        alert("Veillez à saisir une valeur correcte dans les quatre champs !");
    } else {
        // effectuer une opération à partir d'un formulaire
        alert("Le formulaire a été envoyé avec succès !");
        console.log(" Félicitations pour avoir envoyé votre commande !");
        alert(`Ce formulaire a comme nom d'utilisateur ${nom.value}, son adresse est ${adress.value},
        son numéro de téléphone ${tel.value}, et son email ${email.value}`);
        nom.value = "";
        adress.value = "";
        tel.value = "";
        email.value = "";
    }
});
// ******************************************** Validation Formulaire

