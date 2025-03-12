function GeoToMaps() {
    // Verifica se o navegador suporta a geolocalização
    if ("geolocation" in navigator) {
        // Solicita a localização do usuário
        navigator.geolocation.getCurrentPosition(function(position) {
            // Captura a latitude e longitude
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Cria a URL do Google Maps com a localização capturada
            const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

            // Redireciona para o Google Maps
            window.location.href = mapsUrl;
        }, function(error) {
            // Trata erros na obtenção da localização
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    alert("Permissão para acessar a localização foi negada.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("A localização não pôde ser determinada.");
                    break;
                case error.TIMEOUT:
                    alert("A solicitação de localização expirou.");
                    break;
                default:
                    alert("Ocorreu um erro desconhecido ao tentar obter a localização.");
                    break;
            }
        });
    } else {
        alert('O seu navegador não suporta geolocalização.');
    }
}