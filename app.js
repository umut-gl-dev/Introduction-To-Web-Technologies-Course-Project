
// Toggle explanation
document.getElementById('toggleExplanation').addEventListener('click', function () {
    const superposition = document.getElementById('superposition');
    if (superposition.classList.contains('hidden')) {
        superposition.classList.remove('hidden');
        this.value = 'Daha Az Göster';
        superposition.style.height = '240px';
    } else {
        superposition.classList.add('hidden');
        superposition.style.height = '600px';
        this.value = 'Daha Fazla Bilgi';
    }
});

// Schrödinger's Cat Experiment
document.getElementById('openBox').addEventListener('click', function () {
    var a = document.getElementById('alive');
    var b = document.getElementById('dead');
    if (document.getElementById('openBox').value == "Deneyi Sıfırla") {
        a.style.height = "0px";
        a.style.padding = "0%";
        a.style.border = "none";
        b.style.height = "0px";
        b.style.padding = "0%";
        b.style.border = "none";
        a.innerHTML = "";
        b.innerHTML = "";
        document.getElementById('openBox').value = "Kutuyu Aç";
        document.getElementById('catBox').innerHTML = '<h4>Kuantum Kutusu</h4><p>Kutu Kapalı. Kedi süperpozisyon durumunda...</p><p>Hem canlı hem ölü</p>';
        return;
    }

    // Hide the button
    this.classList.add('hidden');

    // Show loading state
    document.getElementById('catBox').innerHTML = '<h4>Kuantum Kutusu</h4><p>Dalga fonksiyonu çöküyor...</p><p>Gözlem yapılıyor</p>';

    // Simulate quantum observation with 50% probability
    setTimeout(function () {
        var a = document.getElementById('alive');
        var b = document.getElementById('dead');
        if (document.getElementById('openBox').value == 'Deneyi Sıfırla') {
            a.style.display = "none";
            b.style.display = "none";
            document.getElementById('openBox').value = "Kutuyu Aç";
            document.getElementById('catBox').innerHTML = '<h4>Kuantum Kutusu</h4><p>Kutu Kapalı. Kedi süperpozisyon durumunda...</p><p>Hem canlı hem ölü</p>';
            return;
        }
        const isAlive = Math.random() >= 0.5;
        if (isAlive) {
            a.innerHTML = '<h2>Kedi Yaşıyor</h2><p>Radyoaktif madde bozunmamış ve zehri salınmamış.</p><p>Dalga fonksiyonu çöktü ve kedi canlı olarak gözlemlendi.</p>';
            a.style.height = "auto";
            a.style.padding = "2%";
            a.style.border = "2px solid rgba(120, 250, 120, 0.5)";
        } else {
            b.innerHTML = '<h2>Kedi Öldü!</h2><p>Radyoaktif madde bozunmuş ve zehir salınmış.</p><p>Dalga fonksiyonu çöktü ve kedi ölü olarak gözlemlendi.</p>';
            b.style.height = "auto";
            b.style.padding = "2%";
            b.style.border = "2px solid rgba(250, 120, 120, 0.5)";
        }
        document.getElementById('openBox').value = "Deneyi Sıfırla";
        // Update box state
        document.getElementById('catBox').innerHTML = '<h4>Kuantum Kutusu</h4><p>Kutu açıldı!</p"><p>Dalga fonksiyonu çöktü</p>';
    }, 1500);
});