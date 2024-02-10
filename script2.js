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

        function downloadVideo(tabName) {
            // Adicione a lógica para realizar o download do vídeo
        }

        function selectInputText(input) {
            if (input.value) {
                input.select();
            }
        }
    </script>
