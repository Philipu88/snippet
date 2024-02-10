    <script>
        // Função para baixar o vídeo do YouTube
        function downloadVideo(tabName) {
            // Obtém o valor do campo de entrada onde o usuário colou o link do vídeo do YouTube
            const input = document.getElementById(tabName + '-input');
            const videoUrl = input.value;

            // Verifica se o URL do vídeo do YouTube é válido
            if (isValidYouTubeUrl(videoUrl)) {
                // Cria um link temporário para o vídeo
                const tempLink = document.createElement('a');
                tempLink.href = videoUrl;
                tempLink.target = '_blank';

                // Adiciona o link temporário à página e simula um clique para iniciar o download
                document.body.appendChild(tempLink);
                tempLink.click();
                document.body.removeChild(tempLink);
            } else {
                // Se o URL do vídeo do YouTube não for válido, exibe uma mensagem de erro
                alert('Por favor, insira um link válido do YouTube.');
            }
        }

        // Função para validar se o URL do vídeo do YouTube é válido
        function isValidYouTubeUrl(url) {
            const youtubeRegex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+/;
            return youtubeRegex.test(url);
        }

        // Outras funções JavaScript permanecem inalteradas
    </script>
