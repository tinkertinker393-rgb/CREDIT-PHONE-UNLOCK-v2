// Inside api/trigger.js
export default async function handler(req, res) {
    const { methodType, imei, brand, provider } = req.body; // Receive the new fields
    
    const url = `https://api.github.com/repos/${process.env.REPO_OWNER}/${process.env.REPO_NAME}/actions/workflows/simulation.yml/dispatches`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github+json',
        },
        body: JSON.stringify({ 
            ref: 'main',
            inputs: { // Pass these to GitHub Actions
                imei: imei,
                brand: brand,
                provider: provider,
                method: methodType
            }
        })
    });
    // ...
}