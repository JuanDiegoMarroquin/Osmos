const form = document.querySelector("form")
const fullName = document.getElementById("floatingName");
const email = document.getElementById("floatingEmail");
const phone = document.getElementById("floatingNumber");
const mess = document.getElementById("floatingNote");

function sendEmail() {
    const bodymMessage = `Nombre Completo: ${fullName.value} <br> Email: ${email.value}<br> Numero de telefono: ${phone.value}<br> contexto: ${mess.value}<br>`;



    Email.send({
        SecureToken: "4e8ad2ce-63f9-4896-b5c2-de88ed62dc5b",
        To : "administracion@osmosgt.com",
        From : "administracion@osmosgt.com",
        Subject : "Nuevo Leed Pagina Web",
        Body : bodymMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
              title: "¡Listo!",
              text: "Un asesor se pondrá en contacto contigo.",
              icon: "success"
            });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    sendEmail();
});