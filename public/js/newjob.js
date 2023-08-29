const newJob = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#jobTitle').value.trim();
    const company = document.querySelector('#companyName').value.trim();
    const description = document.querySelector('#jobDescription').value.trim();

    console.log(title)
    console.log(company)
    console.log(description)


}
document
.querySelector('#new_job')
.addEventListener('submit', newJob);