// ============================================
// ENLACE CHAKANA - Script del Juego
// ============================================

// ============================================
// 1. NAVEGACIÓN ENTRE SECCIONES
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Obtener todos los botones de navegación
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    // Función para cambiar de sección
    function switchSection(sectionId) {
        // Ocultar todas las secciones
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Mostrar la sección seleccionada
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Actualizar botones activos
        navButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.section === sectionId) {
                btn.classList.add('active');
            }
        });
    }

    // Agregar eventos a los botones
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const sectionId = btn.dataset.section;
            if (sectionId) {
                switchSection(sectionId);
            }
        });
    });

    // Mostrar la sección inicial (Inicio)
    switchSection('inicio');
});

// ============================================
// 2. DATOS DEL JUEGO
// ============================================

// Base de datos de Identidades
const identidadesDB = [
    // Costa (🔴)
    { id: 'I1', nombre: 'Manta', color: '🔴', numero: 1, region: 'Costa' },
    { id: 'I2', nombre: 'Huancavilca', color: '🔴', numero: 2, region: 'Costa' },
    { id: 'I3', nombre: 'Afroecuatoriano', color: '🔴', numero: 3, region: 'Costa' },
    { id: 'I4', nombre: 'Montubio', color: '🔴', numero: 4, region: 'Costa' },
    { id: 'I5', nombre: 'Épera', color: '🔴', numero: 5, region: 'Costa' },
    
    // Sierra (🟢)
    { id: 'I6', nombre: 'Kichwa', color: '🟢', numero: 1, region: 'Sierra' },
    { id: 'I7', nombre: 'Otavalo', color: '🟢', numero: 2, region: 'Sierra' },
    { id: 'I8', nombre: 'Salasaka', color: '🟢', numero: 3, region: 'Sierra' },
    { id: 'I9', nombre: 'Puruwá', color: '🟢', numero: 4, region: 'Sierra' },
    { id: 'I10', nombre: 'Karanki', color: '🟢', numero: 5, region: 'Sierra' },
    { id: 'I11', nombre: 'Kayambi', color: '🟢', numero: 6, region: 'Sierra' },
    { id: 'I12', nombre: 'Kitukara', color: '🟢', numero: 7, region: 'Sierra' },
    { id: 'I13', nombre: 'Panzaleo', color: '🟢', numero: 8, region: 'Sierra' },
    { id: 'I14', nombre: 'Cañari', color: '🟢', numero: 9, region: 'Sierra' },
    { id: 'I15', nombre: 'Chibuleo', color: '🟢', numero: 10, region: 'Sierra' },
    { id: 'I16', nombre: 'Kisapincha', color: '🟢', numero: 11, region: 'Sierra' },
    
    // Amazonía (🔵)
    { id: 'I17', nombre: 'Waorani', color: '🔵', numero: 1, region: 'Amazonía' },
    { id: 'I18', nombre: 'Shuar', color: '🔵', numero: 2, region: 'Amazonía' },
    { id: 'I19', nombre: 'Achuar', color: '🔵', numero: 3, region: 'Amazonía' },
    { id: 'I20', nombre: 'Shiwiar', color: '🔵', numero: 4, region: 'Amazonía' },
    { id: 'I21', nombre: 'Siona', color: '🔵', numero: 5, region: 'Amazonía' },
    { id: 'I22', nombre: 'Secoya', color: '🔵', numero: 6, region: 'Amazonía' },
    { id: 'I23', nombre: 'Cofán', color: '🔵', numero: 7, region: 'Amazonía' },
    { id: 'I24', nombre: 'Zápara', color: '🔵', numero: 8, region: 'Amazonía' },
    { id: 'I25', nombre: 'Andoa', color: '🔵', numero: 9, region: 'Amazonía' }
];

// Base de datos de Elementos y sus conexiones
const elementosDB = [
    { id: 'E1', nombre: 'Maito', conexiones: ['Kichwa', 'Shuar', 'Achuar'] },
    { id: 'E2', nombre: 'Marimba', conexiones: ['Afroecuatoriano'] },
    { id: 'E3', nombre: 'Sombrero de Paja Toquilla', conexiones: ['Manta', 'Huancavilca'] },
    { id: 'E4', nombre: 'Achiote', conexiones: ['Waorani', 'Shuar', 'Achuar', 'Shiwiar'] },
    { id: 'E5', nombre: 'Quena / Rondador', conexiones: ['Otavalo', 'Salasaka', 'Kayambi', 'Puruwá'] },
    { id: 'E6', nombre: 'Poncho Negro / Rojo', conexiones: ['Otavalo', 'Kichwa', 'Karanki'] },
    { id: 'E7', nombre: 'Tejeduría en telar', conexiones: ['Otavalo', 'Salasaka', 'Karanki'] },
    { id: 'E8', nombre: 'Chicha de Jora / Yuca', conexiones: ['Puruwá', 'Waorani', 'Shuar'] },
    { id: 'E9', nombre: 'Coraza y Dantzante', conexiones: ['Panzaleo', 'Kichwa'] },
    { id: 'E10', nombre: 'Machete y Manta', conexiones: ['Montubio'] },
    { id: 'E11', nombre: 'Wipala / Chakana', conexiones: ['Kichwa', 'Otavalo', 'Kitukara', 'Kayambi'] },
    { id: 'E12', nombre: 'Bodoquera / Cerbatanas', conexiones: ['Waorani', 'Siona', 'Secoya', 'Cofán', 'Zápara', 'Andoa'] },
    { id: 'E13', nombre: 'Amorfino', conexiones: ['Montubio'] },
    { id: 'E14', nombre: 'Cestería de cabuya/bejuco', conexiones: ['Salasaka', 'Chibuleo', 'Kisapincha'] },
    { id: 'E15', nombre: 'Chihuil / Tamal', conexiones: ['Manta', 'Huancavilca'] },
    { id: 'E16', nombre: 'Collares de mullu / semillas', conexiones: ['Huancavilca', 'Manta', 'Épera'] },
    { id: 'E17', nombre: 'Canoa de madera', conexiones: ['Waorani', 'Achuar', 'Shiwiar', 'Huancavilca'] },
    { id: 'E18', nombre: 'Cuy asado con papas', conexiones: ['Puruwá', 'Cañari', 'Salasaka', 'Kichwa'] },
    { id: 'E19', nombre: 'Corona de plumas (Tawasap)', conexiones: ['Shuar', 'Achuar'] },
    { id: 'E20', nombre: 'Cerámica ancestral', conexiones: ['Manta', 'Huancavilca', 'Panzaleo'] }
];

// Mapa de elementos por nombre para búsqueda rápida
const elementosMap = {};
elementosDB.forEach(el => {
    elementosMap[el.nombre] = el;
});

// Mapa de identidades por nombre
const identidadesMap = {};
identidadesDB.forEach(id => {
    identidadesMap[id.nombre] = id;
});

// ============================================
// 3. SIMULADOR DEL JUEGO
// ============================================

// Estado del simulador
let simState = {
    // Jugadores
    players: [
        { id: 1, name: 'Jugador 1', hand: [], score: 0 },
        { id: 2, name: 'Jugador 2', hand: [], score: 0 }
    ],
    currentPlayer: 0,
    activeCard: null, // Carta activa en el centro
    deck: [], // Mazo de robo
    discardPile: [], // Pila de descarte
    gameLog: [],
    gameOver: false,
    turnPhase: 'play' // 'play' | 'element' | 'identity'
};

// Función para inicializar el simulador
function initSimulator() {
    // Crear mazo completo
    const deck = [];
    
    // Agregar Identidades (33 cartas)
    identidadesDB.forEach(id => {
        deck.push({
            type: 'identity',
            ...id,
            cardId: `ID_${id.id}`
        });
    });
    
    // Agregar Elementos (20 cartas)
    elementosDB.forEach(el => {
        deck.push({
            type: 'element',
            ...el,
            cardId: `EL_${el.id}`
        });
    });
    
    // Barajar
    shuffleArray(deck);
    
    // Inicializar estado
    simState.deck = deck;
    simState.discardPile = [];
    simState.gameLog = [];
    simState.gameOver = false;
    simState.turnPhase = 'play';
    
    // Repartir cartas (5 cada uno)
    simState.players.forEach(player => {
        player.hand = [];
        for (let i = 0; i < 5; i++) {
            if (simState.deck.length > 0) {
                player.hand.push(simState.deck.pop());
            }
        }
        player.score = 0;
    });
    
    // Colocar primera carta activa (debe ser Identidad)
    let firstCard = null;
    while (simState.deck.length > 0 && !firstCard) {
        const card = simState.deck.pop();
        if (card.type === 'identity') {
            firstCard = card;
        } else {
            simState.discardPile.push(card);
        }
    }
    
    if (firstCard) {
        simState.activeCard = firstCard;
    } else {
        // Si no hay identidades, usar una por defecto
        simState.activeCard = {
            type: 'identity',
            nombre: 'Kichwa',
            color: '🟢',
            numero: 1,
            region: 'Sierra'
        };
    }
    
    // Resetear jugador actual
    simState.currentPlayer = 0;
    
    // Limpiar log
    const logContainer = document.getElementById('sim-log-messages');
    if (logContainer) {
        logContainer.innerHTML = '<p>🎲 ¡El juego ha comenzado!</p>';
    }
    
    // Actualizar UI
    updateSimUI();
    addSimLog('🎲 ¡Nueva partida iniciada!');
    addSimLog(`📌 Carta activa: ${simState.activeCard.nombre} (${simState.activeCard.color}${simState.activeCard.numero})`);
}

// Función para barajar (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ============================================
// 4. LÓGICA DEL SIMULADOR
// ============================================

// Obtener carta activa
function getActiveCard() {
    return simState.activeCard;
}

// Verificar si una identidad es jugable por flujo directo
function isFlujoDirecto(identityCard) {
    const active = getActiveCard();
    if (!active || active.type !== 'identity') return false;
    return (identityCard.color === active.color || identityCard.numero === active.numero);
}

// Verificar si un elemento está vinculado a una identidad
function isElementoVinculado(elementCard, identityCard) {
    if (!elementCard || elementCard.type !== 'element') return false;
    if (!identityCard || identityCard.type !== 'identity') return false;
    
    const elemento = elementosMap[elementCard.nombre];
    if (!elemento) return false;
    
    return elemento.conexiones.includes(identityCard.nombre);
}

// Verificar si una identidad está vinculada a un elemento
function isIdentityVinculadaToElement(identityCard, elementCard) {
    if (!identityCard || identityCard.type !== 'identity') return false;
    if (!elementCard || elementCard.type !== 'element') return false;
    
    const elemento = elementosMap[elementCard.nombre];
    if (!elemento) return false;
    
    return elemento.conexiones.includes(identityCard.nombre);
}

// Acción: Flujo Directo
function playFlujoDirecto(playerIndex, cardIndex) {
    const player = simState.players[playerIndex];
    const card = player.hand[cardIndex];
    
    if (!card || card.type !== 'identity') {
        addSimLog('❌ Debes jugar una carta de Identidad para Flujo Directo');
        return false;
    }
    
    if (!isFlujoDirecto(card)) {
        addSimLog(`❌ ${card.nombre} no comparte color ni número con la carta activa`);
        return false;
    }
    
    // Jugar la carta
    player.hand.splice(cardIndex, 1);
    simState.discardPile.push(simState.activeCard);
    simState.activeCard = card;
    
    addSimLog(`✅ ${player.name} jugó ${card.nombre} por Flujo Directo`);
    
    // Verificar victoria
    if (player.hand.length === 0) {
        addSimLog(`🏆 ¡${player.name} ha ganado la partida!`);
        simState.gameOver = true;
    }
    
    // Cambiar turno
    nextTurn();
    updateSimUI();
    return true;
}

// Acción: Puente Cultural
function playPuenteCultural(playerIndex, elementIndex, identityIndex) {
    const player = simState.players[playerIndex];
    const elementCard = player.hand[elementIndex];
    const identityCard = player.hand[identityIndex];
    
    if (!elementCard || elementCard.type !== 'element') {
        addSimLog('❌ Primero debes jugar un Elemento');
        return false;
    }
    
    if (!identityCard || identityCard.type !== 'identity') {
        addSimLog('❌ Luego debes jugar una Identidad vinculada al Elemento');
        return false;
    }
    
    // Verificar que el elemento esté vinculado a la carta activa
    if (!isElementoVinculado(elementCard, simState.activeCard)) {
        addSimLog(`❌ ${elementCard.nombre} no está vinculado a ${simState.activeCard.nombre}`);
        return false;
    }
    
    // Verificar que la identidad esté vinculada al elemento
    if (!isIdentityVinculadaToElement(identityCard, elementCard)) {
        addSimLog(`❌ ${identityCard.nombre} no está vinculado a ${elementCard.nombre}`);
        return false;
    }
    
    // Jugar el elemento y la identidad
    player.hand.splice(elementIndex, 1);
    // Ajustar índice si el elemento estaba antes que la identidad
    const adjustedIdentityIndex = identityIndex > elementIndex ? identityIndex - 1 : identityIndex;
    player.hand.splice(adjustedIdentityIndex, 1);
    
    simState.discardPile.push(simState.activeCard);
    simState.discardPile.push(elementCard);
    simState.activeCard = identityCard;
    
    addSimLog(`🌉 ${player.name} hizo Puente Cultural: ${elementCard.nombre} → ${identityCard.nombre}`);
    
    // Bonus por Corredor Cultural (3+ regiones diferentes)
    // Simplificado: contar regiones en la mano
    const regions = new Set();
    player.hand.forEach(c => {
        if (c.type === 'identity' && c.region) {
            regions.add(c.region);
        }
    });
    if (regions.size >= 3) {
        player.score += 5;
        addSimLog(`🌟 ¡Corredor Cultural! ${player.name} suma 5 puntos extra`);
    }
    
    // Verificar victoria
    if (player.hand.length === 0) {
        addSimLog(`🏆 ¡${player.name} ha ganado la partida!`);
        simState.gameOver = true;
    }
    
    // Cambiar turno
    nextTurn();
    updateSimUI();
    return true;
}

// Acción: Robar
function playRobar(playerIndex) {
    const player = simState.players[playerIndex];
    
    if (simState.deck.length === 0) {
        addSimLog('📭 No hay más cartas en el mazo');
        nextTurn();
        updateSimUI();
        return false;
    }
    
    const card = simState.deck.pop();
    player.hand.push(card);
    addSimLog(`🃏 ${player.name} robó una carta`);
    
    // Verificar si la carta robada es jugable
    let played = false;
    if (card.type === 'identity' && isFlujoDirecto(card)) {
        // Jugar automáticamente por flujo directo
        const index = player.hand.length - 1;
        playFlujoDirecto(playerIndex, index);
        played = true;
    } else if (card.type === 'element' && isElementoVinculado(card, simState.activeCard)) {
        // Buscar identidad vinculada en la mano
        for (let i = 0; i < player.hand.length - 1; i++) {
            const idCard = player.hand[i];
            if (idCard.type === 'identity' && isIdentityVinculadaToElement(idCard, card)) {
                const elemIndex = player.hand.length - 1;
                playPuenteCultural(playerIndex, elemIndex, i);
                played = true;
                break;
            }
        }
    }
    
    if (!played) {
        addSimLog(`⏭️ ${player.name} no pudo jugar la carta robada, pasa turno`);
        nextTurn();
    }
    
    updateSimUI();
    return true;
}

// Cambiar al siguiente turno
function nextTurn() {
    if (simState.gameOver) return;
    
    // Buscar siguiente jugador con cartas
    let next = (simState.currentPlayer + 1) % simState.players.length;
    let attempts = 0;
    while (simState.players[next].hand.length === 0 && attempts < simState.players.length) {
        next = (next + 1) % simState.players.length;
        attempts++;
    }
    
    if (attempts >= simState.players.length) {
        // Todos sin cartas
        simState.gameOver = true;
        addSimLog('🏁 ¡Partida terminada! Todos se quedaron sin cartas');
        return;
    }
    
    simState.currentPlayer = next;
    simState.turnPhase = 'play';
    addSimLog(`🎯 Turno de ${simState.players[next].name}`);
}

// ============================================
// 5. ACTUALIZACIÓN DE UI DEL SIMULADOR
// ============================================

function updateSimUI() {
    // Actualizar carta activa
    const activeCard = getActiveCard();
    const activeDisplay = document.getElementById('active-card');
    if (activeDisplay && activeCard) {
        const colorEl = document.getElementById('active-color');
        const numberEl = document.getElementById('active-number');
        const nameEl = document.getElementById('active-name');
        
        if (colorEl) colorEl.textContent = activeCard.color || '🟢';
        if (numberEl) numberEl.textContent = activeCard.numero || '?';
        if (nameEl) nameEl.textContent = activeCard.nombre || 'Kichwa';
    }
    
    // Actualizar jugadores
    const playersList = document.getElementById('sim-players-list');
    if (playersList) {
        playersList.innerHTML = '';
        simState.players.forEach((player, index) => {
            const div = document.createElement('div');
            div.className = 'sim-player';
            if (index === simState.currentPlayer && !simState.gameOver) {
                div.classList.add('active');
            }
            div.innerHTML = `
                ${player.name} 
                <span class="hand-size">(${player.hand.length})</span>
                ${player.score > 0 ? `<span class="score">⭐${player.score}</span>` : ''}
            `;
            playersList.appendChild(div);
        });
    }
    
    // Actualizar elementos disponibles (mostrar algunos)
    const elementsList = document.getElementById('sim-elements-list');
    if (elementsList) {
        elementsList.innerHTML = '';
        const currentPlayer = simState.players[simState.currentPlayer];
        if (currentPlayer) {
            const elements = currentPlayer.hand.filter(c => c.type === 'element');
            if (elements.length === 0) {
                const span = document.createElement('span');
                span.textContent = 'No hay elementos en mano';
                span.style.color = '#888';
                elementsList.appendChild(span);
            } else {
                elements.slice(0, 6).forEach(el => {
                    const span = document.createElement('span');
                    span.className = 'element-tag';
                    span.textContent = el.nombre;
                    elementsList.appendChild(span);
                });
                if (elements.length > 6) {
                    const span = document.createElement('span');
                    span.className = 'element-tag';
                    span.textContent = `+${elements.length - 6} más`;
                    span.style.opacity = '0.7';
                    elementsList.appendChild(span);
                }
            }
        }
    }
    
    // Actualizar botones
    const flujoBtn = document.getElementById('sim-flujo');
    const puenteBtn = document.getElementById('sim-puente');
    const robarBtn = document.getElementById('sim-robar');
    
    if (flujoBtn) flujoBtn.disabled = simState.gameOver;
    if (puenteBtn) puenteBtn.disabled = simState.gameOver;
    if (robarBtn) robarBtn.disabled = simState.gameOver;
}

// ============================================
// 6. REGISTRO DE LOG
// ============================================

function addSimLog(message) {
    const logContainer = document.getElementById('sim-log-messages');
    if (!logContainer) return;
    
    const p = document.createElement('p');
    p.textContent = message;
    logContainer.appendChild(p);
    
    // Mantener solo los últimos 50 mensajes
    while (logContainer.children.length > 50) {
        logContainer.removeChild(logContainer.firstChild);
    }
    
    // Auto-scroll
    logContainer.scrollTop = logContainer.scrollHeight;
}

// ============================================
// 7. EVENTOS DEL SIMULADOR
// ============================================

// Función para Flujo Directo (simulado - usa la primera carta de identidad jugable)
function handleFlujoDirecto() {
    if (simState.gameOver) {
        addSimLog('⛔ La partida ya terminó');
        return;
    }
    
    const player = simState.players[simState.currentPlayer];
    const active = getActiveCard();
    
    // Buscar identidad jugable en la mano
    let playableIndex = -1;
    for (let i = 0; i < player.hand.length; i++) {
        const card = player.hand[i];
        if (card.type === 'identity' && isFlujoDirecto(card)) {
            playableIndex = i;
            break;
        }
    }
    
    if (playableIndex === -1) {
        addSimLog(`❌ ${player.name} no tiene identidades jugables por Flujo Directo`);
        return;
    }
    
    playFlujoDirecto(simState.currentPlayer, playableIndex);
}

// Función para Puente Cultural (simulado)
function handlePuenteCultural() {
    if (simState.gameOver) {
        addSimLog('⛔ La partida ya terminó');
        return;
    }
    
    const player = simState.players[simState.currentPlayer];
    const active = getActiveCard();
    
    // Buscar elemento vinculado a la carta activa
    let elementIndex = -1;
    for (let i = 0; i < player.hand.length; i++) {
        const card = player.hand[i];
        if (card.type === 'element' && isElementoVinculado(card, active)) {
            elementIndex = i;
            break;
        }
    }
    
    if (elementIndex === -1) {
        addSimLog(`❌ ${player.name} no tiene elementos vinculados a ${active.nombre}`);
        return;
    }
    
    const elementCard = player.hand[elementIndex];
    
    // Buscar identidad vinculada al elemento
    let identityIndex = -1;
    for (let i = 0; i < player.hand.length; i++) {
        const card = player.hand[i];
        if (card.type === 'identity' && isIdentityVinculadaToElement(card, elementCard)) {
            identityIndex = i;
            break;
        }
    }
    
    if (identityIndex === -1) {
        addSimLog(`❌ ${player.name} no tiene identidades vinculadas a ${elementCard.nombre}`);
        return;
    }
    
    playPuenteCultural(simState.currentPlayer, elementIndex, identityIndex);
}

// Función para Robar
function handleRobar() {
    if (simState.gameOver) {
        addSimLog('⛔ La partida ya terminó');
        return;
    }
    
    playRobar(simState.currentPlayer);
}

// Función para Reiniciar
function handleReset() {
    initSimulator();
}

// ============================================
// 8. INICIALIZACIÓN DEL SIMULADOR
// ============================================

// Inicializar cuando la página esté lista
document.addEventListener('DOMContentLoaded', () => {
    // Configurar eventos del simulador
    const flujoBtn = document.getElementById('sim-flujo');
    const puenteBtn = document.getElementById('sim-puente');
    const robarBtn = document.getElementById('sim-robar');
    const resetBtn = document.getElementById('sim-reset');
    
    if (flujoBtn) flujoBtn.addEventListener('click', handleFlujoDirecto);
    if (puenteBtn) puenteBtn.addEventListener('click', handlePuenteCultural);
    if (robarBtn) robarBtn.addEventListener('click', handleRobar);
    if (resetBtn) resetBtn.addEventListener('click', handleReset);
    
    // Inicializar el simulador
    initSimulator();
});

// ============================================
// 9. FUNCIONES ADICIONALES - EFECTOS ESPECIALES
// ============================================

// Efectos especiales para variante de 5+ jugadores
function aplicarEfectoEspecial(elementCard) {
    const nombre = elementCard.nombre;
    
    switch (nombre) {
        case 'Wipala / Chakana':
            // Comodín total - se maneja en la lógica de puente
            addSimLog('🔄 ¡Wipala/Chakana activado! Puede conectar con cualquier identidad');
            break;
        case 'Bodoquera / Cerbatanas':
            // El siguiente jugador roba 1 carta
            const nextPlayer = (simState.currentPlayer + 1) % simState.players.length;
            if (simState.deck.length > 0) {
                const card = simState.deck.pop();
                simState.players[nextPlayer].hand.push(card);
                addSimLog(`🏹 Bodoquera: ${simState.players[nextPlayer].name} roba 1 carta extra`);
            }
            break;
        case 'Marimba':
        case 'Amorfino':
            // Invertir sentido - simulamos cambiando el orden de jugadores
            // En una implementación real, esto sería más complejo
            addSimLog(`🔄 ${nombre} invierte el sentido del turno!`);
            break;
        default:
            break;
    }
}

// ============================================
// 10. EXPORTAR PARA USO EN CONSOLA (debug)
// ============================================

// Hacer accesible desde la consola del navegador
window.EnlaceChakana = {
    init: initSimulator,
    state: simState,
    flujo: handleFlujoDirecto,
    puente: handlePuenteCultural,
    robar: handleRobar,
    reset: handleReset,
    getActive: getActiveCard,
    identidades: identidadesDB,
    elementos: elementosDB
};

console.log('🎲 Enlace Chakana - Simulador cargado');
console.log('💡 Usa EnlaceChakana.flujo(), .puente(), .robar() o .reset() desde consola');
