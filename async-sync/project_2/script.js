const box = document.getElementById("box");

window.addEventListener("keydown", (e) => {
    box.innerHTML = `
        <div class="color">
            <table border="1">
                <tr>
                    <th>Key</th>
                    <th>Key Code</th>
                    <th>Code</th>
                </tr>

                <tr>
                    <td>${e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `;
});
