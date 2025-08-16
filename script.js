const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');
const brandFilter = document.getElementById('brandFilter');
const btnBuscar = document.getElementById('btnBuscar');
const catalogo = document.getElementById('catalogo');

// Criar listas de categorias e marcas
const categorias = new Set();
const marcas = new Set();

Object.values(produtos).forEach(p => {
    categorias.add(p.categoria);
    marcas.add(p.marca);
});

// Preencher filtros
categorias.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat.toLowerCase();
    opt.textContent = cat;
    filterSelect.appendChild(opt);
});

marcas.forEach(marca => {
    const opt = document.createElement('option');
    opt.value = marca.toLowerCase();
    opt.textContent = marca;
    brandFilter.appendChild(opt);
});

// Função para obter as primeiras características, lidando com os dois formatos
function getPrimeirasCaracteristicas(caracteristicas) {
    let caracteristicasArray = [];

    // Se for um objeto (novo formato)
    if (typeof caracteristicas === "object" && !Array.isArray(caracteristicas)) {
        for (const categoria in caracteristicas) {
            caracteristicas[categoria].forEach(item => caracteristicasArray.push(item));
        }
    } else {
        // Se for um array (formato antigo)
        caracteristicasArray = caracteristicas;
    }
    
    // Retorna os 2 primeiros itens
    return caracteristicasArray.slice(0, 2);
}

// Função para exibir produtos
function mostrarProdutos(lista) {
    catalogo.innerHTML = '';
    if (lista.length === 0) {
        catalogo.innerHTML = '<p class="nenhum">Nenhum produto encontrado.</p>';
        return;
    }
    lista.forEach(([id, p]) => {
        const card = document.createElement('div');
        card.classList.add('produto');
        card.setAttribute('data-category', p.categoria.toLowerCase());
        card.setAttribute('data-brand', p.marca.toLowerCase());

        const primeirasCaracteristicas = getPrimeirasCaracteristicas(p.caracteristicas);

        // Criar HTML do card
        card.innerHTML = `
            <a href="produto.html?id=${id}">
                <img src="${p.imagem}" alt="${p.nome}">
                <h2>${p.nome}</h2>
                <h3>${p.codigo}</h3>
                <p>${p.descricao.substring(0, 50)}...</p>
                <ul>
                    ${primeirasCaracteristicas.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </a>
        `;
        catalogo.appendChild(card);
    });
}

// Filtrar produtos
function filtrarProdutos() {
    const busca = searchInput.value.toLowerCase();
    const catFiltro = filterSelect.value.toLowerCase();
    const marcaFiltro = brandFilter.value.toLowerCase();

    const filtrados = Object.entries(produtos).filter(([id, p]) => {
        const matchBusca = p.nome.toLowerCase().includes(busca) ||
                           p.codigo.toLowerCase().includes(busca) ||
                           p.descricao.toLowerCase().includes(busca);
        const matchCat = catFiltro === 'all' || p.categoria.toLowerCase() === catFiltro;
        const matchMarca = marcaFiltro === 'all' || p.marca.toLowerCase() === marcaFiltro;
        return matchBusca && matchCat && matchMarca;
    });

    mostrarProdutos(filtrados);
}

// Eventos
btnBuscar.addEventListener('click', filtrarProdutos);
searchInput.addEventListener('input', filtrarProdutos);
filterSelect.addEventListener('change', filtrarProdutos);
brandFilter.addEventListener('change', filtrarProdutos);

// Inicial
mostrarProdutos(Object.entries(produtos));