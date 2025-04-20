// ✅ Fetch and Display Stored URLs
async function fetchStoredURLs() {
    const response = await fetch('/stored-urls');
    const data = await response.json();
    
    let tableBody = document.getElementById('urlList');
    tableBody.innerHTML = '';

    data.forEach(item => {
        let row = `<tr>
            <td>${item.url}</td>
            <td>${item.prediction}</td>
            <td>${new Date(item.timestamp).toLocaleString()}</td>
            <td><button onclick="deleteURL('${item._id}')">Delete</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// ✅ Check New URL
async function checkPhishing() {
    let url = document.getElementById('urlInput').value;
    if (!url) return alert("Please enter a URL");

    const response = await fetch('/check-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
    });

    const result = await response.json();
    document.getElementById('resultMessage').innerText = `Result: ${result.prediction}`;
    fetchStoredURLs();
}

// ✅ Delete URL Record
async function deleteURL(id) {
    await fetch(`/delete-url/${id}`, { method: 'DELETE' });
    fetchStoredURLs();
}

// Load URLs when page loads
fetchStoredURLs();
