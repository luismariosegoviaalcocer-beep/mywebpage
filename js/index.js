// Estos son los datos de mi pagina
// Silhouetas de papel
    
    document.addEventListener("DOMContentLoaded", function(){
    alert("Bienvenidos a Silhouetas de Papel")
    document.getElementById('Pelitofeli').addEventListener('click', function() {
    const contenedor = document.getElementById('contenedor-imagen');
    
    if (!document.getElementById('img-pelito')) {
        const nuevaImagen = document.createElement('img');
        nuevaImagen.src = 'Pelitofeli.jpeg';
        nuevaImagen.id = 'img-pelito';
        nuevaImagen.style.width = '300px'; 
        nuevaImagen.style.display = 'block';
        nuevaImagen.style.margin = '20px auto';
        
        contenedor.appendChild(nuevaImagen);
    }
});
    })