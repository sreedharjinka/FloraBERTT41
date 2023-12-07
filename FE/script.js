const modalId = document.getElementById('modalId');
const modalBody = document.querySelector('.modal-body');
const remoteFile = document.getElementById('remoteFile');
const uploadFile = document.getElementById('uploadFile');
const pasteFile = document.getElementById('pasteFile');

remoteFile.addEventListener('click', function () {
    modalBody.innerHTML = `
    <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><a href="https://ftp.ensemblgenomes.ebi.ac.uk/pub/plants/" target="_blank">Ensemble</a></span>
                <span class="input-group-text" id="basic-addon1"><a href="https://ftp.ncbi.nlm.nih.gov/genomes/refseq/plant/" target="_blank">RefSeq</a></span>
                <span class="input-group-text" id="basic-addon1"><a href="https://download.maizegdb.org/" target="_blank">MaizeGDB</a></span>
    </div>
    `;
});
uploadFile.addEventListener('click', function () {
    modalBody.innerHTML = `
    <div class="input-group mb-3">
                <input type="file" name="file" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    `;
});
pasteFile.addEventListener('click', function () {
    modalBody.innerHTML = `
    <div class="input-group mb-3">
                <input type="text" name="file" class="form-control" placeholder="Data" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    `;
});

