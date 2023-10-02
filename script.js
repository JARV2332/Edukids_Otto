document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM cargado");

    const loginButton = document.getElementById("loginButton");

    if (loginButton) {
        loginButton.addEventListener("click", () => {
            // Verificar las credenciales del usuario (en este caso, usuario: "Alumno", contraseña: "EDU")
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "Alumno" && password === "EDU") {
                // Redireccionar a la página del curso de robótica
                window.location.href = "curso.html";
            } else {
                // Mostrar un mensaje de error o hacer algo en caso de credenciales incorrectas
                alert("Credenciales incorrectas. Inténtalo de nuevo.");
            }
        });
    }

    const videoButtons = document.querySelectorAll('.navigation-buttons button');

    videoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const videoId = button.getAttribute('data-video-id');
            changeVideo(videoId);
        });
    });

    function changeVideo(videoId) {
        console.log(`Cambiando a video con ID: ${videoId}`);
        const videoContainer = document.querySelector(".video-container iframe");
        const newVideoSrc = `https://www.youtube.com/embed/${videoId}`;
        console.log(`Nuevo enlace del video: ${newVideoSrc}`);
        videoContainer.src = newVideoSrc;
    }
});
