function uploadAndProcess() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

    if (!file) {
        alert('Veuillez sélectionner un fichier.');
        return;
    }

    var formData = new FormData();
    formData.append('file', file);

    fetch('http://127.0.0.1:8000/mask_image', {
        method: 'POST',
        headers: {
            'accept': 'image/*'
        },
        body: formData
    })
    .then(response => {
        return response.blob();
    })
    .then(blob => {
        var imageUrl = URL.createObjectURL(blob);
        var outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '<img src="' + imageUrl + '">';
    })
    .catch(error => {
        console.error('Error', error);
        alert('Error');
    });
}