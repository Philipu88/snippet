<script>
    function goToHome() {
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => content.style.display = 'none');
        document.querySelector('.home-content').style.display = 'block';
    }

    function activateTab(tabName) {
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => content.style.display = 'none');

        const selectedTabContent = document.getElementById(tabName + '-content');
        selectedTabContent.style.display = 'block';

        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => tab.style.backgroundColor = '');

        const selectedTab = document.querySelector(`.tab[data-tab='${tabName}']`);
        selectedTab.style.backgroundColor = '#555';
    }

    function pasteLink(tabName) {
        const input = document.getElementById(tabName + '-input');
        navigator.clipboard.readText().then(text => {
            input.value = text;
        }).catch(error => {
            console.error('Erro ao colar o link:', error);
        });
    }

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

    function selectInputText(input) {
        if (input.value) {
            input.select();
        }
    }
</script>
