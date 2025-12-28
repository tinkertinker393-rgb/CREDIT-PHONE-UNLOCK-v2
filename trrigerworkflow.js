async function triggerWorkflow(methodType) {
    const imei = document.getElementById('imeiNumber').value;
    const brand = document.getElementById('phoneBrand').value;
    const provider = document.getElementById('provider').value;
    const log = document.getElementById('consoleLog');

    if (!imei) {
        alert("Please enter an IMEI number first!");
        return;
    }

    log.innerHTML += `<p class="text-yellow-500">> Initiating ${methodType} for IMEI: ${imei} (${brand})...</p>`;

    try {
        const response = await fetch('/api/trigger', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                methodType: methodType,
                imei: imei,
                brand: brand,
                provider: provider
            })
        });
        // ... rest of the existing response code ...
    } catch (err) { /* ... */ }
}
