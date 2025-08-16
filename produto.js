// Lista de produtos
const produtos = {

    // Exemplo no NOVO formato
    "DMHG228BT": {
        nome: "Multimídia Player DMHG228BT - Pioneer",
        codigo: "1919.531.0307",
        descricao: "Com Tela De 6.2\" WVGA, Bluetooth, USB, Rádio AM/FM, Auxiliar, Entrada para Câmera de Ré.",
        marca: "Pioneer",
        categoria: "Multimídia",
        imagem: "./img/DMHG228BT_1.png",
        caracteristicas: {
            "PRINCIPAIS CARACTERÍSTICAS:": [
                "2-DIN",
"Tela de 6.2\" Touch Screen Resistiva",
"Ligações Hands-free e streaming de áudio (Bluetooth)",
"Entrada para Câmera de Ré",
"Entrada para Comando de Volante",
"Entrada AUX",
"Integração com Smartphone (Via USB/Bluetooth)",
"Rádio AM/FM",
"2 Saídas RCA Pré-Amplificadas (2 V)",
"Reforçador de Graves (BassBoost)"
            ],

            "Display/Tela": [
                "Tela de 6.2\ Touch Screen Resistiva"
            ],
            "Conectividade": [
                "Entrada USB",
                "Integração com Smartphone (Via USB/Bluetooth)"
            ],
            "Bluetooth": [
                "Ligações Hands-free e streaming de áudio"
            ],
            "Sintonizador AM/FM": [
                "Rádio AM/FM"
            ],
            "Áudio": [
                "2 Saídas RCA Pré-Amplificadas (2 V)",
                "Reforçador de Graves (BassBoost)"
            ],
            "Conexões": [
                "Entrada para Câmera de Ré",
                "Entrada AUX",
                "Entrada para Comando de Volante"
            ],
            "Geral/Dimensões": [
                "2-DIN"
            ],
            "Conteúdo da embalagem": [
                "Manual, Chicote e Peças de fixação"
            ]
        }
    },

     "DMHG228BTDMHG225BT/XNCS": {
        nome: "Multimídia Player DMHG225BT/XNCS - Pioneer",
        codigo: "1919.531.0336",
        descricao: "Com Tela De 6.2\" WVGA, Bluetooth, USB, Rádio AM/FM, Auxiliar, Entrada para Câmera de Ré.",
        marca: "Pioneer",
        categoria: "Multimídia",
        imagem: "./img/DMH-G225BT_1.png",
        caracteristicas: {
            "PRINCIPAIS CARACTERÍSTICAS:": [
        "6.2\" Touchscreen Resistiva",
        "Ligações Hands-free e streaming de áudio (Bluetooth)",
        "Rádio AM/FM",
        "2 Saídas RCA pré-amplificadas (2V)",
        "Entrada USB",
        "Entrada para câmera de ré",
        "Entrada para comando de volante",
        "Entrada AUX",
        "Reforçador de Graves (Bass Boost)"
    ],
    "TELA:": [
        "6.2\" Touchscreen Resistiva",
        "Resolução WVGA",
        "Sistema de cores (NTSC / PAL / SECAM)",
        "Cor dos botões (Azul)",
        "Cor de destaque (5 cores)",
        "Ajustes de imagem (brilho, contraste, cor, matiz e dimmer)",
        "Modo Display Off"
    ],
    "INTEGRAÇÃO COM SMARTPHONE:": [
        "Compatível com Android (via USB/Bluetooth) ¹"
    ],
    "BLUETOOTH:": [
        "Conexão Bluetooth (Versão 4.1) ²",
        "Bluetooth Audio Streaming (Músicas) ²",
        "Bluetooth Hands-Free (Chamadas telefônicas, Histórico e Agenda) ²",
        "Memória para registro de até 3 telefones"
    ],
    "SINTONIZADOR AM/FM:": [
        "BSM (busca e sintonia automática de estações)",
        "Memória para gravar estações - 6 AM e 18 FM",
        "RDS ³ - oferece informações de texto juntamente com a recepção de FM"
    ],
    "INTERFACE USB:": [
        "Padrão: USB 2.0 High Speed",
        "Codec de Áudio: MP3 / WAV / WMA / AAC ⁴",
        "Codec de Vídeo: DivX / MPEG-1 / MPEG-2 / MPEG-4 ⁴"
    ],
    "CONEXÕES:": [
        "Entrada USB (Frontal; Corrente máx. 0.5A) ⁴",
        "2 Saídas de áudio pré-amplificadas (RCA)",
        "Entrada AUX (Traseira; 3.5 mm estéreo; Áudio/Vídeo)",
        "Entrada para câmera de ré (RCA)",
        "Entrada para comando de volante (Configurável)",
        "Microfone integrado"
    ],
    "ÁUDIO:": [
        "Potência de saída RMS 23 W x 4 (50Hz a 15kHz, 10 %THD, 4 Ω)",
        "Nível da saída pré-amplificada: 2V",
        "Equalizador gráfico de 7 bandas",
        "6 equalizações pré-definidas e 1 personalizáveis",
        "Fader / Balanço",
        "Reforçador de Graves (Bass Boost): +6 dB a 0 dB",
        "Loudness em 3 níveis"
    ],
    "GERAL:": [
        "Fonte de alimentação nominal: 14,4V DC",
        "Corrente máxima: 10A",
        "Chassi: 178 x 100 x 165 mm",
        "Face: 171 x 97 x 5 mm"
    ],
    "OUTROS:": [
        "Garantia de 1 ano",
        "Menu em Português, Inglês e Espanhol",
        "Relógio e calendário na tela"
    ],
    "CONTEÚDO DA EMBALAGEM:": [
        "Pioneer DMH-G225BT",
        "Cabo de alimentação",
        "Controle remoto",
        "Guia de início rápido"
    ]
        }
    },

    // Exemplo no formato ANTIGO (continua funcionando)
    "DMHZ5380TV": {
        nome: "Multimídia player DMHZ5380TV - Pioneer",
        codigo: "1919.531.0311",
        descricao: "Multimídia Receiver com tela HD Capacitiva de 6.8 polegadas, Apple Carplay™, Android Auto™, Bluetooth®, TV Digital e muito mais!",
        marca: "Pioneer",
        categoria: "Multimídia",
        imagem: "./img/DMHZ5380TV_1.png",
        caracteristicas: [
            "2-DIN Chassi Regular",            
            "Tela de 6.8 Polegadas Touch screen Capacitiva",
            "TV Digital Integrada",
            "Ligações Hands-free e Streaming de Áudio (Bluetooth)",
            "Compatível com Apple CarPlay™",
            "Compatível com Android Auto™",
            "Compatível com WebLink® (iPhone/Android)",
            "3 Saídas RCA Pré-amplificadas (4V)",
            "Saída de Vídeo para Monitor Traseiro",
            "Entrada para Câmera de Ré",
            "Entrada para Controle de Volante",
        ]
    },

    // ... resto dos produtos sem alteração ...
};
